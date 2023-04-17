import { useRef, useState } from "react"
import stack from "../data/images"
import Image from "next/image"
const Tech = () => {
    const data = [
        {
            name: "Cloud Storage"
        },
        {
            name: "Databases"
        },
        {
            name: "AI"
        },
        {
            name: "Platform"
        },
        {
            name: "Framework"
        }
    ]
    const [selected, setselect] = useState(data[0].name)
    const sel = useRef(data[0].name)
    let st = useRef(stack.Cloud);
    const updatestack = () => {
        if (sel.current === "Cloud Storage") {
            st.current = stack.Cloud;
        } else if (sel.current === "Databases") {
            st.current = stack.Databases;
        } else if (sel.current === "AI") {
            st.current = stack.AI;
        } else if (sel.current === "Platform") {
            st.current = stack.Platform
        } else if (sel.current === "Framework") {
            st.current = stack.Framework
        }
    }

    return (
        <div className="h-full  py-5 w-full bg-slate-800 flex flex-col items-center ">
            <h1 className="text-white text-3xl text-center my-4">Technical Skills</h1>
            <div className="w-full md:w-min  md:h-2/5 flex flex-col items-center px-2 md:px-0">
                <div className="w-full overflow-x-auto md:overflow-visible md:min-w-max gap-4 md:h-min flex md:flex-row justify-between bg-slate-600 my-2 p-1 rounded-md">
                    {
                        data.map((d, i) => {
                            return (
                                <span key={i} className={`text-lg ${selected === d.name ? " bg-slate-700" : ""} rounded-md p-2 text-white cursor-pointer
                                 flex items-center justify-items-center`}
                                    onClick={() => {
                                        sel.current = d.name
                                        setselect(d.name)
                                        updatestack()
                                    }}>
                                    {d.name}
                                </span>
                            )

                        })
                    }
                </div>
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {

                        st.current.map((ico, i) => {
                            return (
                                <div key={i} className="flex flex-col items-center gap-4 w-min text-center">
                                    <div key={i} className="bg-slate-900 w-36 h-36 flex  items-center justify-center rounded-full p-2  ">
                                        <Image className="w-3/5 object-contain" src={ico.icon} alt="" />
                                    </div>
                                    <span className="text-white text-lg">{ico.name}</span>

                                </div>

                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Tech