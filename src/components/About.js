import imga from '../assets/images/Palash.png'
import Image from 'next/image';

const About = () => {
  
  return (
    <div id='About' className="h-full w-full bg-slate-800">
      <h1 className="md:text-4xl text-2xl text-white text-center py-10 nd:py-20" >About Me</h1>
      <div className="flex  flex-col md:flex-row justify-around px-2">
        <div className="w-full md:w-1/2 md:h-full flex flex-col items-center">
          <div className='w-1/2 md:w-2/3 h-full bg-slate-600  rounded-full p-2 md:-rotate-2 md:flex md:flex-col md:items-center md:p-4'>
            <Image src={imga} className='overflow-hidden  w-full rounded-full ' alt="" />
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start md:pl-10 py-5'>
          <h1 className='text-white text-2xl'>Palash Daroker</h1>
          <span className='text-white border-2 border-solid border-slate-500  w-full text-center md:w-max p-2 bg-slate-600 rounded-lg'>
            Power BI Developer
          </span>
          <span className='text-white md:text-base text-sm  w-full md:w-2/3 md:min-w-full h-min text-left px-2'>
            As a seasoned Power BI developer with 7 years of experience, I am passionate about creating data-driven solutions that empower businesses to make informed decisions. I specialize in designing custom data visualizations and analytics solutions that provide insights into complex data sets. My skills and expertise in Power BI allow me to create dynamic dashboards and reports that deliver meaningful insights to clients. I am committed to staying up-to-date with the latest trends and advancements in data visualization to ensure that my clients receive the most effective solutions. I take pride in my
            ability to collaborate with clients to understand their unique needs and deliver solutions that exceed expectations.
          </span>
          <div className='text-white bg-slate-950 md:w-min w-full text-center py-2 px-4 rounded-lg hover:bg-slate-600 delay-50 transition-all cursor-pointer
            ' onClick={() => {
              window.open("https://drive.google.com/file/d/1Kp41rl85n-cotrh-JuNn7O3q5oXo9QJs/view", '_blank', 'noopener,noreferrer');
            }}>
            Resume
          </div>
        </div>
      </div>
    </div>
  )
}

export default About