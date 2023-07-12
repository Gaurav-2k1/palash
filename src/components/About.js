import imga from '../assets/images/Palash.png'
import Image from 'next/image';

const About = () => {

  return (
    <div id='About' className="h-full w-full bg-secondary py-5">
      <h1 className="md:text-4xl text-2xl text-black text-center py-4 nd:py-20" >About Me</h1>
      <div className="flex  flex-col md:flex-row justify-around px-2">
        {/* <div className="w-full md:w-1/2 md:h-full flex flex-col items-center">
          <div className='w-1/2 md:w-2/3 h-full bg-slate-600  rounded-full p-2 md:-rotate-2 md:flex md:flex-col md:items-center md:p-4'>
            <Image src={imga} className='overflow-hidden  w-full rounded-full ' alt="" />
          </div>
        </div> */}
        <div className='w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start md:pl-10 py-5'>
          {/* <h1 className='text-white text-2xl'>Palash Daroker</h1>
          <span className='text-white border-2 border-solid border-slate-500  w-full text-center md:w-max p-2 bg-slate-600 rounded-lg'>
            Power BI Developer
          </span> */}
          <span className='text-black md:text-base text-sm  w-full md:w-2/3 md:min-w-full h-min text-left px-2'>
            I am a highly experienced BI Developer with over 7 years of experience in the IT industry. I have a strong understanding of data analytics, ETL and data warehousing concepts. I am proficient in Power BI, SSIS, Alteryx and other BI tools. I am also skilled in SQL, DAX and other data analysis languages.

            I am a highly motivated and results-oriented individual with a proven track record of success in delivering projects on time and within budget. I am also a team player and I am able to work effectively in a fast-paced environment.

            I am confident that I have the skills and experience necessary to be successful in your company. I am eager to learn new things and I am always looking for ways to improve my skills. I am also a quick learner and I am able to adapt to new situations quickly.

            I am a valuable asset to any team and I am confident that I can make a significant contribution to your company. I am eager to discuss my qualifications in more detail and I look forward to hearing from you soon.          </span>
          <div className='text-white bg-primary md:w-min w-full text-center py-2 px-4 rounded-lg hover:bg-slate-600 delay-50 transition-all cursor-pointer
            ' onClick={() => {
              window.open("https://drive.google.com/file/d/1xXZyOjCi9xBoAb3i8w8nrAGANpro9ahB/view?usp=sharing", '_blank', 'noopener,noreferrer');
            }}>
            Resume
          </div>
        </div>
      </div>
    </div>
  )
}

export default About