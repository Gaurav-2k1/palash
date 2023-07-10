import Hero from "../components/Hero"
import About from '../components/About'
import Project from '../components/Project'
import Tech from '../components/Tech'
import Experience from '../components/Experience'
import Navbar from "../components/Navbar"
import Head from "next/head"
import Achievement from "@/components/Achievement"
import Certification from "@/components/Certification"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pallavi</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certification/>
      <Tech />
      <Project />
      <Achievement />
    </>
  )
}
