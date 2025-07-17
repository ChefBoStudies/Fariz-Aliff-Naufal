import { useEffect } from 'react'
import Hero from '../assets/components/Hero'
import AboutMe from '../assets/components/AboutMe'
import Projects from '../assets/components/Projects'
// import { runTests } from '../lib/testSupabase'

const Home = () => {
  useEffect(() => {
    // Test Supabase connection on app load (disabled for production)
    // runTests()
  }, [])

  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  )
}

export default Home 