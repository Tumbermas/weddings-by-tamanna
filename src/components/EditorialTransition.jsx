import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FloralLineArt, OrganicShape, FloatingOrnament } from './illustrations'

gsap.registerPlugin(ScrollTrigger)

export function EditorialTransition() {
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements
      gsap.from(sectionRef.current.querySelectorAll('.editorial-text'), {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      })
      
      // Animate decorative elements
      gsap.from(sectionRef.current.querySelectorAll('.editorial-art'), {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        stagger: 0.2,
        ease: 'easeOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      })
    }, sectionRef)
    
    return () => ctx.revert()
  }, [])
  
  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '120px 24px',
        background: 'linear-gradient(135deg, #fffaf5 0%, #f5ebe6 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Background organic shape */}
      <OrganicShape
        color="#eaddd4"
        opacity={0.4}
        style={{
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px'
        }}
      />
      
      {/* Floating ornaments */}
      <FloatingOrnament x="10%" y="20%" size={50} delay={0.5} />
      <FloatingOrnament x="85%" y="60%" size={35} delay={1} />
      
      {/* Content container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Left column - Text */}
        <div style={{
          position: 'relative'
        }}>
          <p className="editorial-text" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: '#ad9f96',
            marginBottom: '24px',
            fontWeight: 300
          }}>
            Capturing Moments
          </p>
          
          <h2 className="editorial-text" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 300,
            color: '#2a1f1a',
            lineHeight: 1.2,
            marginBottom: '28px',
            fontStyle: 'italic'
          }}>
            Where tradition meets contemporary storytelling
          </h2>
          
          <p className="editorial-text" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            lineHeight: 2,
            color: '#5a4a42',
            maxWidth: '420px',
            fontWeight: 300
          }}>
            Every wedding carries its own rhythm, its own colours, its own quiet moments of magic. 
            Creating content that honours both the grand celebrations and the intimate details.
          </p>
          
          {/* Decorative line */}
          <div className="editorial-text" style={{
            width: '80px',
            height: '1px',
            background: 'linear-gradient(to right, #ad9f96, transparent)',
            marginTop: '32px'
          }} />
        </div>
        
        {/* Right column - Floral illustration */}
        <div className="editorial-art" style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <FloralLineArt
            style={{
              maxWidth: '350px',
              opacity: 0.8
            }}
          />
        </div>
      </div>
      
      {/* Mobile responsive adjustment */}
      <style>{`
        @media (max-width: 900px) {
          section[ref] div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          section[ref] div[style*="max-width: 420px"] {
            max-width: 100% !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
