import Image from 'next/image'
import Hero from "../components/Hero"
import About from '../components/About'
import Project from '../components/Project'
import Tech from '../components/Tech'
import Experience from '../components/Experience'
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Project />
      <Experience />
    </>
  )
}
