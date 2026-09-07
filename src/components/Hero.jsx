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
      // Fade in hero content on load
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

      // Scroll-driven image sequence with PINNED behavior
      // The hero stays in viewport while user scrolls through ~200vh of scroll distance
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=' + (window.innerHeight * 1.8), // 180vh scroll distance for smooth animation
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          // Map scroll progress (0-1) to frames (0-24)
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
              opacity: 0.95
            }}
            loading="eager"
          />
        )}
        {!isLoaded && (
          <div style={{
            width: '100%',
            height: '100%',
            background: '#faf9f7',
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

      {/* Subtle warm gradient overlay - softer, warmer tone */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(255,251,245,0.2) 0%, rgba(255,251,245,0.5) 50%, rgba(255,251,245,0.85) 100%)',
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
          fontSize: '12px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#5a4a42',
          marginBottom: '14px',
          opacity: 0
        }}>
          Wedding Content Creator
        </p>
        
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(42px, 7vw, 84px)',
          fontWeight: 400,
          color: '#2a1f1a',
          marginBottom: '10px',
          lineHeight: 1.05,
          opacity: 0
        }}>
          Weddings by Tamanna
        </h1>
        
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color: '#6b5d52',
          marginBottom: '28px',
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
            fontSize: '12px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#2a1f1a',
            padding: '15px 36px',
            border: '1px solid #2a1f1a',
            transition: 'all 0.3s ease',
            opacity: 0,
            background: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#2a1f1a'
            e.target.style.color = '#fffaf5'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.color = '#2a1f1a'
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
