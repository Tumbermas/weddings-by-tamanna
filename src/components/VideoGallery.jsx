import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const videos = [
  { src: '/2.mp4', label: '01' },
  { src: '/3.mp4', label: '02' },
  { src: '/1.mp4', label: '03' }
]

export function VideoGallery() {
  const sectionRef = useRef(null)
  const videoRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section in
      gsap.from(sectionRef.current.querySelectorAll('.video-item'), {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      })

      // Animate labels
      gsap.from(sectionRef.current.querySelectorAll('.video-label'), {
        opacity: 0,
        x: -20,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause()
      }
    })
  }

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '140px 24px 100px',
        maxWidth: '1600px',
        margin: '0 auto'
      }}
    >
      {/* Section header with editorial styling */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: '60px',
        borderBottom: '1px solid rgba(180, 140, 120, 0.2)',
        paddingBottom: '20px'
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: '#6b5d52',
          fontWeight: 300
        }}>
          Selected Work
        </p>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '14px',
          fontStyle: 'italic',
          color: '#9a8b7f'
        }}>
          Weddings & Events
        </p>
      </div>

      {/* Asymmetric video grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        marginTop: '40px'
      }}>
        {videos.map((video, index) => (
          <div
            key={video.src}
            className="video-item"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: '#f9f5f2'
            }}
          >
            {/* Editorial label */}
            <div 
              className="video-label"
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                zIndex: 2,
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '2px',
                color: '#fffaf5',
                background: 'rgba(42, 31, 26, 0.7)',
                padding: '6px 12px',
                opacity: 0
              }}
            >
              {video.label}
            </div>

            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              loop
              muted
              playsInline
              preload="metadata"
              poster=""
              style={{
                width: '100%',
                aspectRatio: '9/16',
                objectFit: 'cover',
                display: 'block'
              }}
              onMouseEnter={() => {
                const video = videoRefs.current[index]
                if (video) {
                  handleVideoPlay(index)
                  video.play()
                }
              }}
              onMouseLeave={() => {
                const video = videoRefs.current[index]
                if (video) {
                  video.pause()
                  video.currentTime = 0
                }
              }}
              onTouchStart={() => {
                const video = videoRefs.current[index]
                if (video) {
                  handleVideoPlay(index)
                  if (video.paused) {
                    video.play()
                  } else {
                    video.pause()
                  }
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobile responsive adjustment */}
      <style>{`
        @media (max-width: 900px) {
          section[ref] div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            max-width: 400px;
            margin: 40px auto 0;
          }
        }
      `}</style>
    </section>
  )
}
