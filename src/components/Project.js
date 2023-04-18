import React from 'react'
import projects from '../data/Projects'
import Link from 'next/link'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
}, [])
  return (
    <div id="Project" className='h-full md:p-0 px-5 w-full bg-slate-800 flex flex-col items-center pt-16'>
      <h1 className="text-white text-3xl text-center my-4">Projects</h1>
      <div className='w-full md:w-4/5  md:h-2/5 flex flex-col '>
        <div className="flex flex-wrap justify-center items-start gap-8 mt-10">
          {
            projects.map((data, i) => {
              return (
                <ProjectCard key={i} id={data.id} url={data.url} company={data.company} detail={data.projectDetail} />
              )

            })
          }
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ id, company, url, detail }) => {
  const router = useRouter()

  return (
    <div className=' md:w-80  md:h-96 rounded-2xl py-4 px-3 bg-slate-700 z-0' data-aos="fade-up">
      <div className='w-full h-3/5 relative group'>
        <div className='w-0 group-hover:w-full h-full absolute top-0 bg-slate-950 opacity-80 z-1 rounded-3xl grid place-items-center
        delay-250 transition-all ease-linear'>
          <span className='text-[0px] text-white  group-hover:text-lg delay-250 transition-all'>
            <FiExternalLink className='text-[0px] text-white group-hover:text-3xl cursor-pointer hover:text-blue-400' 
              onClick={() => {
                router.push(`/Details/${id}`)
              }}
            />
          </span>
        </div>
        <Image className='w-full h-full  object-cover overflow-hidden rounded-3xl my-2
      cursor-pointer' src={url} alt="" />
      </div>

      <div className='flex flex-col h-1/5 justify-between mt-5'>
        <h2 className='text-lg font-semibold text-white'>{company}</h2>
        <span className='text-sm text-slate-300'>
          {detail.name}
        </span>
      </div>
    </div>
  )
}


export default Project