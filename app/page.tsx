import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Quotes from '@/components/Quotes'
import Footer from '@/components/Footer'
import StarField from '@/components/StarField'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarField />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Quotes />
      <Footer />
    </main>
  )
}
