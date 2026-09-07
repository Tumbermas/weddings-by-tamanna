import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useImageSequence } from '../utils/hooks'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const { getImageSrc, isLoaded } = useImageSequence('hero-sequence', 25)
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    if (!isLoaded) return

    const ctx = gsap.context(() => {
      // Fade in hero content
      gsap.fromTo(textRef.current.children, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3
        }
      )

      // Scroll-driven image sequence
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const frame = Math.floor(self.progress * 24)
          setCurrentFrame(frame)
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [isLoaded])

  return (
    <section 
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Image Sequence Background */}
      <div 
        ref={imageRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        {isLoaded && (
          <img
            src={getImageSrc(currentFrame)}
            alt="Wedding ring detail"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.9
            }}
            loading="eager"
          />
        )}
        {!isLoaded && (
          <div style={{
            width: '100%',
            height: '100%',
            background: '#f5f3f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '2px solid #d4cfc7',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
          </div>
        )}
      </div>

      {/* Overlay gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(250,249,247,0.3) 0%, rgba(250,249,247,0.6) 50%, rgba(250,249,247,0.95) 100%)',
        zIndex: 1
      }} />

      {/* Text Content */}
      <div 
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '600px'
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#4a4a4a',
          marginBottom: '16px',
          opacity: 0
        }}>
          Wedding Content Creator
        </p>
        
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 400,
          color: '#1a1a1a',
          marginBottom: '12px',
          lineHeight: 1,
          opacity: 0
        }}>
          Weddings by Tamanna
        </h1>
        
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#666',
          marginBottom: '32px',
          opacity: 0
        }}>
          London & UK
        </p>

        <a 
          href="https://instagram.com/weddingsbytamanna"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#1a1a1a',
            padding: '16px 32px',
            border: '1px solid #1a1a1a',
            transition: 'all 0.3s ease',
            opacity: 0
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#1a1a1a'
            e.target.style.color = '#faf9f7'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.color = '#1a1a1a'
          }}
        >
          DM to Enquire
        </a>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
