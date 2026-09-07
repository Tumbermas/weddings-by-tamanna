import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const videos = [
  { src: '/2.mp4', title: 'Wedding Moments' },
  { src: '/3.mp4', title: 'Celebration' },
  { src: '/1.mp4', title: 'Details' }
]

export function VideoGallery() {
  const sectionRef = useRef(null)
  const videoRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section in - softer, warmer feel
      gsap.from(sectionRef.current.querySelectorAll('.video-card'), {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
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
        padding: '120px 24px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}
    >
      {/* Section label */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '11px',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        color: '#6b5d52',
        marginBottom: '48px',
        textAlign: 'center'
      }}>
        Selected Work
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {videos.map((video, index) => (
          <div
            key={video.src}
            className="video-card"
            style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#f9f5f2',
              aspectRatio: '9/16',
              maxHeight: '600px'
            }}
          >
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
                height: '100%',
                objectFit: 'cover'
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
    </section>
  )
}
