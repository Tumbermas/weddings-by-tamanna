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
        textAlign: 'center'
      }}
    >
      <p 
        className="about-line"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#666',
          marginBottom: '24px'
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
          color: '#1a1a1a',
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
          fontSize: '16px',
          lineHeight: 1.8,
          color: '#4a4a4a',
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
          gap: '24px',
          flexWrap: 'wrap'
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#666'
        }}>
          Weddings
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#666'
        }}>
          Events
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#666'
        }}>
          Content
        </span>
      </div>
    </section>
  )
}
