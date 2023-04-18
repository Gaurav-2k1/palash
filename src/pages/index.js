import Hero from "../components/Hero"
import About from '../components/About'
import Project from '../components/Project'
import Tech from '../components/Tech'
import Experience from '../components/Experience'
import Navbar from "../components/Navbar"
import Head from "next/head"
import Achievement from "@/components/Achievement"

export default function Home() {
  return (
    <>
      <Head>
        <title>Palash</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Project />
      <Experience />
      <Achievement />
    </>
  )
}
