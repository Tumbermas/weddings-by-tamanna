import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.about-line'), {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
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
        padding: '160px 24px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        background: '#fffaf5'
      }}
    >
      {/* Editorial section marker */}
      <div className="about-line" style={{
        marginBottom: '40px'
      }}>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '9px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#ad9f96',
          fontWeight: 300
        }}>
          02 / About
        </span>
      </div>
      
      <h2 
        className="about-line"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 300,
          color: '#2a1f1a',
          lineHeight: 1.3,
          marginBottom: '40px',
          fontStyle: 'italic'
        }}
      >
        Wedding & Event Content Creation
      </h2>
      
      <div 
        className="about-line"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          lineHeight: 2,
          color: '#5a4a42',
          maxWidth: '520px',
          margin: '0 auto 48px'
        }}
      >
        <p style={{ marginBottom: '20px', fontWeight: 300 }}>
          Based in London, capturing weddings and events across the UK.
        </p>
        <p style={{ fontWeight: 300 }}>
          Creating content that feels as beautiful as your moments feel real.
        </p>
      </div>

      {/* Service tags with decorative separator */}
      <div 
        className="about-line"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          flexWrap: 'wrap',
          position: 'relative'
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#6b5d52',
          fontWeight: 300
        }}>
          Weddings
        </span>
        <span style={{
          width: '4px',
          height: '4px',
          background: '#ad9f96',
          borderRadius: '50%'
        }} />
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#6b5d52',
          fontWeight: 300
        }}>
          Events
        </span>
        <span style={{
          width: '4px',
          height: '4px',
          background: '#ad9f96',
          borderRadius: '50%'
        }} />
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#6b5d52',
          fontWeight: 300
        }}>
          Content
        </span>
      </div>
    </section>
  )
}
