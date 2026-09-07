import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useImageSequence } from '../utils/hooks'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
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
          duration: 1.4, 
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.4
        }
      )

      // Animate scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.2,
        ease: 'power2.out'
      })

      // Scroll-driven image sequence with PINNED behavior
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=' + (window.innerHeight * 2), // 200vh scroll distance
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const frame = Math.floor(self.progress * 24)
          setCurrentFrame(frame)
        },
        onLeave: () => {
          gsap.to(scrollIndicatorRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.3
          })
        },
        onEnterBack: () => {
          gsap.to(scrollIndicatorRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.3
          })
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
        justifyContent: 'center',
        background: '#0a0807'
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
              opacity: 0.92
            }}
            loading="eager"
          />
        )}
        {!isLoaded && (
          <div style={{
            width: '100%',
            height: '100%',
            background: '#0a0807',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              border: '1px solid rgba(234, 221, 212, 0.3)',
              borderTopColor: 'rgba(180, 140, 120, 0.6)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
          </div>
        )}
      </div>

      {/* Warm gradient overlay - inspired by burgundy/gold wedding tones */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(42, 31, 26, 0.4) 0%, rgba(90, 30, 35, 0.15) 40%, rgba(255, 250, 245, 0.85) 100%)',
        zIndex: 1
      }} />

      {/* Editorial corner details */}
      <div style={{
        position: 'absolute',
        top: '32px',
        left: '32px',
        zIndex: 3,
        display: 'none',
        '@media (min-width: 768px)': { display: 'block' }
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#eaddd4',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          opacity: 0.7
        }}>
          Weddings by Tamanna
        </p>
      </div>

      {/* Frame counter */}
      <div style={{
        position: 'absolute',
        top: '32px',
        right: '32px',
        zIndex: 3,
        fontFamily: 'Inter, sans-serif',
        fontSize: '10px',
        letterSpacing: '2px',
        color: '#eaddd4',
        opacity: 0.6
      }}>
        {String(currentFrame + 1).padStart(2, '0')} / 25
      </div>

      {/* Text Content */}
      <div 
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '560px'
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: '#eaddd4',
          marginBottom: '18px',
          opacity: 0,
          fontWeight: 300
        }}>
          Wedding Content Creator
        </p>
        
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(38px, 6.5vw, 72px)',
          fontWeight: 300,
          color: '#fffaf5',
          marginBottom: '12px',
          lineHeight: 1.08,
          opacity: 0,
          fontStyle: 'italic'
        }}>
          Weddings by Tamanna
        </h1>
        
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '3.5px',
          textTransform: 'uppercase',
          color: '#eaddd4',
          marginBottom: '32px',
          opacity: 0,
          fontWeight: 300
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
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#fffaf5',
            padding: '16px 32px',
            border: '1px solid rgba(234, 221, 212, 0.5)',
            transition: 'all 0.4s ease',
            opacity: 0,
            background: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(180, 140, 120, 0.2)'
            e.target.style.borderColor = 'rgba(180, 140, 120, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(234, 221, 212, 0.5)'
          }}
        >
          DM to Enquire
        </a>
      </div>

      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          opacity: 0,
          y: 20
        }}
      >
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '9px',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color: '#eaddd4',
          opacity: 0.7
        }}>
          Scroll
        </p>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, #eaddd4, transparent)'
        }} />
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
