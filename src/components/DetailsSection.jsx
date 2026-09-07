import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MehndiPattern, JewelleryMotif, OrganicShape } from './illustrations'

gsap.registerPlugin(ScrollTrigger)

export function DetailsSection() {
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(sectionRef.current.querySelectorAll('.details-title'), {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse'
        }
      })
      
      // Animate decorative elements
      gsap.from(sectionRef.current.querySelectorAll('.details-art'), {
        opacity: 0,
        scale: 0.85,
        rotation: -5,
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
        padding: '140px 24px',
        background: '#2a1f1a',
        overflow: 'hidden'
      }}
    >
      {/* Background organic shape */}
      <OrganicShape
        color="#5a4a42"
        opacity={0.3}
        style={{
          bottom: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px'
        }}
      />
      
      {/* Content container */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <p className="details-title" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '9px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: '#eaddd4',
            marginBottom: '20px',
            fontWeight: 300,
            opacity: 0
          }}>
            The Beauty Is In
          </p>
          
          <h2 className="details-title" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 300,
            color: '#fffaf5',
            lineHeight: 1,
            fontStyle: 'italic',
            opacity: 0
          }}>
            Details
          </h2>
        </div>
        
        {/* Three column layout with illustrations and text */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '40px',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Left illustration */}
          <div className="details-art" style={{
            display: 'flex',
            justifyContent: 'flex-end',
            opacity: 0
          }}>
            <JewelleryMotif
              style={{
                maxWidth: '200px'
              }}
            />
          </div>
          
          {/* Center text */}
          <div style={{
            textAlign: 'center',
            padding: '40px 0'
          }}>
            <p className="details-title" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              lineHeight: 2.2,
              color: '#eaddd4',
              maxWidth: '320px',
              margin: '0 auto',
              fontWeight: 300,
              opacity: 0
            }}>
              The delicate art of mehndi,<br />
              the weight of gold jewellery,<br />
              the texture of embroidered fabrics,<br />
              the intimacy of joined hands.
            </p>
            
            {/* Decorative divider */}
            <div className="details-title" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '32px',
              opacity: 0
            }}>
              <span style={{
                width: '30px',
                height: '1px',
                background: '#eaddd4',
                opacity: 0.4
              }} />
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#eaddd4'
              }} />
              <span style={{
                width: '30px',
                height: '1px',
                background: '#eaddd4',
                opacity: 0.4
              }} />
            </div>
          </div>
          
          {/* Right illustration */}
          <div className="details-art" style={{
            display: 'flex',
            justifyContent: 'flex-start',
            opacity: 0
          }}>
            <MehndiPattern
              style={{
                maxWidth: '220px',
                opacity: 0.7
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile responsive adjustment */}
      <style>{`
        @media (max-width: 900px) {
          section[ref] div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          section[ref] div[style*="justify-content: flex-end"] {
            justify-content: center !important;
          }
          section[ref] div[style*="justify-content: flex-start"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}
