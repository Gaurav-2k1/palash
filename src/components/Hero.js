import { FiFacebook, FiTwitter } from 'react-icons/fi'
import img from "../assets/images/Palash.png"
import Image from 'next/image'
const Hero = () => {
    return (
        <div className="h-full md:pt-40 w-full bg-slate-800 flex md:flex-row flex-col-reverse  items-center justify-items-center">
            <div className="flex flex-col w-full md:w-2/3 items-center">
                <div className=" h-full md:h-3/5 flex flex-col w-4/5 gap-2 ">
                    <span className="md:text-4xl text-2xl text-white">Hello,I`m</span>
                    <span className="md:text-7xl text-2xl font-semibold text-white">Palash Daroker</span>
                    <span className="md:text-3xl text-2xl text-white">Power Bi Developer</span>
                    <br />
                    <span className="text-lg text-white">Seeking for an exciting opportunity to work as BI developer to create an
                        Interactive Reports/Dashboards and Integrating Systems.</span>
                    <br />
                    <br />
                    <span className='text-lg text-white'>FIND ME ON</span>
                    <div className='flex flex-row gap-2'>
                        <div className='p-5 bg-slate-900 cursor-pointer rounded-lg'><FiFacebook fontSize={30} color='white' /></div>
                        <div className='p-5 bg-slate-900 cursor-pointer rounded-lg'><FiTwitter fontSize={30} color='white' /></div>
                    </div>

                </div>
            </div>
            <div className="w-full md:w-1/2 md:h-full flex flex-col items-center">
                <div className='w-1/2 md:w-2/3 h-full   rounded-full  md:flex md:flex-col md:items-center '>
                    <Image src={img} className='overflow-hidden  w-full  md:w-96 md:h-96 rounded-full shadow-sm shadow-white ' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero