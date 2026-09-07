import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const videos = [
  { src: '/1.mp4', title: 'Wedding Moments' },
  { src: '/2.mp4', title: 'Celebration' },
  { src: '/3.mp4', title: 'Details' }
]

export function VideoGallery() {
  const sectionRef = useRef(null)
  const videoRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section in
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginTop: '60px'
      }}>
        {videos.map((video, index) => (
          <div
            key={video.src}
            className="video-card"
            style={{
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
              background: '#f0ede9',
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
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
            >
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#fff'
              }}>
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
