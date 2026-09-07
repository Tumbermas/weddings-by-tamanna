import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { Hero } from './components/Hero'
import { VideoGallery } from './components/VideoGallery'
import { HandsSequence } from './components/HandsSequence'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { EditorialTransition } from './components/EditorialTransition'
import { DetailsSection } from './components/DetailsSection'

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main style={{ overflow: 'hidden' }}>
      <Hero />
      <EditorialTransition />
      <VideoGallery />
      <DetailsSection />
      <HandsSequence />
      <About />
      <Footer />
    </main>
  )
}

export default App
