
import Link from "next/link";
import { RxCross2 } from 'react-icons/rx'
import Image from "next/image";


export async function getServerSideProps(context) {

    let param = context.query.id
    let data = await fetch(`http://pallavi-priya.vercel.app/api/Details/${param}`);
    let props = await data.json()

    return {
        props: { props }
    }

}
const Details = ({ props }) => {
    const { company, url, projectDetail, Roles } = props;
    return (
        <div className="w-full h-full md:h-screen bg-primary  justify-center items-center" >
            <div className="h-min px-2 py-2 md:justify-end items-center justify-items-center w-full flex flex-row justify-between bg-slate-900 fixed top-0">

                <div className="md:hidden inline-block ">
                    <h1 className=" text-sm text-white">Company :</h1>
                    <h1 className=" text-sm text-white">{company} </h1>
                </div>
                <Link href="/#Project">
                    <RxCross2 className="" color="white" size={40} />

                </Link>
            </div>
            <div className="flex flex-col h-full w-full">

                <div className="flex md:grid md:grid-cols-2 flex-col mt-16 p-4">
                    <div className=" w-full  flex flex-col ">

                        <div className=" w-full h-full flex ">
                            <Image className="md:object-cover in md:pr-20 md:pb-10 object-cover w-full " src={url} alt="" />

                        </div>


                    </div>
                    <div className="w-full flex md:flex-col  h-full items-start gap-5 ">
                        <div className="md:inline-block hidden">
                            <h1 className=" text-3xl text-white">Company :</h1>
                            <h1 className=" text-3xl text-white">{company} </h1>
                        </div>
                        <div className="px-1">
                            <h1 className="text-2xl text-white font-semibold my-2">Project Details </h1>
                            <div className="flex gap-3 flex-col">
                                <p className="text-white text-sm md:text-base">Name : {projectDetail.name}</p>
                                <p className="text-white text-sm md:text-base">Duration : {projectDetail.Duration}</p>
                                <p className="text-white text-sm md:text-base">Tools : {projectDetail.Tools}</p>
                                <p className="text-white text-sm md:text-base">Database : {projectDetail.Database}</p>
                                <p className="text-white text-sm md:text-base">Language : {projectDetail.Language}</p>
                                <p className="text-white text-sm md:text-base">Cloud Storage : {projectDetail.Cloud}</p>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="px-1">
                    <h1 className="text-2xl text-white font-semibold my-5 text-left">Roles and Responsibility </h1>
                    <ul className="pl-5">
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
    )
}

export default Details