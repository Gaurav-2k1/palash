
import Link from "next/link";
import { RxCross2 } from 'react-icons/rx'
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps(context) {
    let param = context.query.id
    let data = await fetch(`http://localhost:3000/api/Details/${param}`);
    let props = await data.json()
    return {
        props: { props }
    }

}
const Details = ({ props }) => {
    const { company, url, projectDetail, Roles } = props;
    return (
        <div className="w-full h-full md:h-screen bg-slate-800 flex flex-col justify-center items-center" >
            <div className="h-10 w-full fixed top-0">
                <Link href="/">
                    <RxCross2 className="absolute md:right-10 md:top-5 top-0 right-0" color="white" size={40} />

                </Link>
            </div>
            <div className="flex md:flex-row flex-col ">
                <div className=" w-full md:w-1/3 flex flex-col ">
                    <div className="md:hidden inline-block mt-5 px-5">
                        <h1 className=" text-lg text-white">Company :</h1>
                        <h1 className=" text-lg text-white">{company} </h1>
                    </div>
                    <Image className="object-cover px-10" src={url} alt="" />
                    <div className="pl-10">
                        <h1 className="text-2xl text-white font-semibold my-5">Project Details </h1>
                        <div className="flex gap-4 flex-col">
                            <p className="text-white text-base">Name : {projectDetail.name}</p>git add .
                            <p className="text-white text-base">Duration : {projectDetail.Duration}</p>
                            <p className="text-white text-base">Tools : {projectDetail.Tools}</p>
                            <p className="text-white text-base">Database : {projectDetail.Database}</p>
                            <p className="text-white text-base">Language : {projectDetail.Language}</p>
                            <p className="text-white text-base">Cloud Storage : {projectDetail.Cloud}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:w-2/3 h-full items-start gap-10 justify-between">
                    <div className="md:inline-block hidden">
                        <h1 className=" text-3xl text-white">Company :</h1>
                        <h1 className=" text-3xl text-white">{company} </h1>
                    </div>


                    <div>
                        <h1 className="text-2xl text-white font-semibold my-5 md:text-left text-center">Roles and Responsibility </h1>
                        <ul className="pl-10">
                            {
                                Roles.map((data, i) => {
                                    return (
                                        <li className="list-disc text-white md:text-base text-sm" key={i}>{data}</li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Details