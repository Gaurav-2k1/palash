import React from 'react'
import Image from 'next/image'
import { detaildata } from '@/data/other'
const Certification = () => {
    return (
        <div className='h-full  py-5 w-full bg-slate-800 flex flex-col items-center '>
            <div className='md:text-3xl text-white text-lg'>Certification</div>
            <div className="flex flex-wrap justify-center gap-5 mt-10 md:w-4/5">
                {

                    detaildata.certification.map((data, i) => {
                        return (
                            <div key={i} className="flex flex-col items-center gap-4 w-full md:w-min px-5 text-center
                                cursor-pointer hover:scale-105 delay-75 ease-linear group:"
                                onClick={() => {
                                    window.open(data.link, '_blank', 'noopener,noreferrer');
                                }}>
                                <div key={i} className="bg-slate-900  md:w-36 md:h-36 flex  items-center justify-center rounded-full md:p-2 p-1 
                                        w-28 h-28 ">
                                    <Image className="w-2/5 md:w-3/5 object-contain " src={data.icon} alt="" />
                                </div>
                                <span className="text-white md:w-52 w-full  text-base md:text-lg ">{data.name}</span>

                            </div>

                        )

                    })
                }
            </div>
        </div>
    )
}

export default Certification