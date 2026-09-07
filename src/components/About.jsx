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
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
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
        padding: '140px 24px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        background: '#fffaf5'
      }}
    >
      <p 
        className="about-line"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#6b5d52',
          marginBottom: '28px'
        }}
      >
        About
      </p>
      
      <h2 
        className="about-line"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 400,
          color: '#2a1f1a',
          lineHeight: 1.4,
          marginBottom: '32px'
        }}
      >
        Wedding & Event Content Creation
      </h2>
      
      <div 
        className="about-line"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          lineHeight: 1.9,
          color: '#5a4a42',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}
      >
        <p style={{ marginBottom: '16px' }}>
          Based in London, capturing weddings and events across the UK.
        </p>
        <p>
          Creating content that feels as beautiful as your moments feel real.
        </p>
      </div>

      <div 
        className="about-line"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '28px',
          flexWrap: 'wrap'
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color: '#6b5d52'
        }}>
          Weddings
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color: '#6b5d52'
        }}>
          Events
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color: '#6b5d52'
        }}>
          Content
        </span>
      </div>
    </section>
  )
}
