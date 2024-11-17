import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
// import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton;'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mi Perfil - Desarrollador React</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        {/* <Contact /> */}
        <Footer />
      </main>
      <ScrollToTopButton />
    </div>
  )
}

export default Home
