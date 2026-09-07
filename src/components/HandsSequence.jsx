import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useImageSequence } from '../utils/hooks'

gsap.registerPlugin(ScrollTrigger)

export function HandsSequence() {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const { getImageSrc, isLoaded } = useImageSequence('hands-sequence', 41)
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    if (!isLoaded) return

    const ctx = gsap.context(() => {
      // Pinned scroll sequence for hands - giving enough time to appreciate
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=' + (window.innerHeight * 1.5), // 150vh scroll distance
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
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fffaf5'
      }}
    >
      {isLoaded && (
        <div
          ref={imageRef}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '500px',
            maxHeight: '700px'
          }}
        >
          <img
            src={getImageSrc(currentFrame)}
            alt="Couple hands detail"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
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

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
