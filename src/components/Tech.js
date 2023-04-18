import { useRef, useState } from "react"
import stack from "../data/images"
import Image from "next/image"
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Tech = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
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
        },
        {
            name: "Tools"
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
        else if (sel.current === "Tools") {
            st.current = stack.Tools
        }
    }

    return (
        <div id="Tech" className="h-full  py-5 w-full bg-slate-800 flex flex-col items-center ">
            <h1 className="text-white text-3xl text-center my-4">Technical Skills</h1>
            <div className="w-full   md:h-2/5 flex flex-col items-center px-2 md:px-0">
                <div className="w-full overflow-x-auto md:overflow-visible md:w-min gap-4 md:h-min flex md:flex-row justify-between bg-slate-600 my-2 p-1 rounded-md">
                    {
                        data.map((d, i) => {
                            return (
                                <span key={i} className={`text-lg ${selected === d.name ? " bg-slate-700" : ""} rounded-md p-2 text-white cursor-pointer
                                 flex items-center justify-items-center min-w-max`}
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
                <div className="flex flex-wrap justify-center gap-8 mt-10 md:w-3/5">
                    {

                        st.current.map((ico, i) => {
                            return (
                                <div key={i} className="flex flex-col items-center gap-4 w-min text-center
                                cursor-pointer hover:scale-105 delay-75 ease-linear group" data-aos="fade-up">
                                    <div key={i} className="bg-slate-900  md:w-36 md:h-36 flex  items-center justify-center rounded-full md:p-2 p-1 
                                        w-28 h-28 ">
                                        <Image className="w-2/5 md:w-3/5 object-contain " src={ico.icon} alt="" />
                                    </div>
                                    <span className="text-white  text-base md:text-lg ">{ico.name}</span>

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