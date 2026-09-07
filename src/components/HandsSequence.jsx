import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useImageSequence } from '../utils/hooks'

gsap.registerPlugin(ScrollTrigger)

export function HandsSequence() {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const labelRef = useRef(null)
  const { getImageSrc, isLoaded } = useImageSequence('hands-sequence', 41)
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    if (!isLoaded) return

    const ctx = gsap.context(() => {
      // Animate label on enter
      gsap.fromTo(labelRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Pinned scroll sequence for hands
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=' + (window.innerHeight * 1.8),
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const frame = Math.floor(self.progress * 40)
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
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fffaf5'
      }}
    >
      {/* Editorial label */}
      <div 
        ref={labelRef}
        style={{
          position: 'absolute',
          top: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: '#9a8b7f',
          fontWeight: 300,
          opacity: 0,
          y: 20
        }}
      >
        Details
      </div>

      {/* Frame indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        right: '32px',
        zIndex: 2,
        fontFamily: 'Inter, sans-serif',
        fontSize: '9px',
        letterSpacing: '2px',
        color: '#9a8b7f',
        opacity: 0.6
      }}>
        {String(currentFrame + 1).padStart(2, '0')} / 41
      </div>

      {isLoaded && (
        <div
          ref={contentRef}
          style={{
            width: '100%',
            height: '85vh',
            maxWidth: '450px',
            position: 'relative'
          }}
        >
          <img
            src={getImageSrc(currentFrame)}
            alt="Couple hands detail with mehndi and jewellery"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '2px'
            }}
            loading="lazy"
          />
        </div>
      )}
      {!isLoaded && (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fffaf5'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            border: '1px solid rgba(180, 140, 120, 0.3)',
            borderTopColor: 'rgba(180, 140, 120, 0.6)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
