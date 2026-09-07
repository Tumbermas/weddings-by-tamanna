import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const footerRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current.querySelectorAll('.footer-element'), {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    }, footerRef)
    
    return () => ctx.revert()
  }, [])
  
  // Social icon SVGs
  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </svg>
  )
  
  const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
  
  const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
  
  return (
    <footer
      ref={footerRef}
      style={{
        padding: '120px 24px 80px',
        background: '#1a1614',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle burgundy accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(to right, transparent, rgba(180, 140, 120, 0.4), transparent)'
      }} />

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section marker */}
        <p className="footer-element" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '9px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#ad9f96',
          marginBottom: '32px',
          fontWeight: 300,
          opacity: 0
        }}>
          03 / Enquire
        </p>

        <h2 className="footer-element" style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 300,
          color: '#fffaf5',
          marginBottom: '16px',
          lineHeight: 1.3,
          fontStyle: 'italic',
          opacity: 0
        }}>
          Let's create something beautiful
        </h2>
        
        <p className="footer-element" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: '#ad9f96',
          marginBottom: '40px',
          fontWeight: 300,
          lineHeight: 1.8,
          opacity: 0
        }}>
          Now booking for 2024/2025
        </p>

        <a 
          href="https://instagram.com/weddingsbytamanna"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-element"
          style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#fffaf5',
            padding: '18px 40px',
            border: '1px solid rgba(234, 221, 212, 0.4)',
            transition: 'all 0.4s ease',
            marginBottom: '48px',
            background: 'transparent',
            opacity: 0
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(180, 140, 120, 0.15)'
            e.target.style.borderColor = 'rgba(180, 140, 120, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(234, 221, 212, 0.4)'
          }}
        >
          DM to Book
        </a>

        {/* Social links with icons */}
        <div className="footer-element" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          alignItems: 'center',
          marginBottom: '60px',
          opacity: 0
        }}>
          <a 
            href="https://instagram.com/weddingsbytamanna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              color: '#ad9f96'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#eaddd4'
              e.currentTarget.querySelector('svg').style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ad9f96'
              e.currentTarget.querySelector('svg').style.transform = 'scale(1)'
            }}
          >
            <InstagramIcon />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Instagram
            </span>
          </a>
          
          <a 
            href="https://tiktok.com/@weddingsbytamanna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              color: '#ad9f96'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#eaddd4'
              e.currentTarget.querySelector('svg').style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ad9f96'
              e.currentTarget.querySelector('svg').style.transform = 'scale(1)'
            }}
          >
            <TikTokIcon />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              TikTok
            </span>
          </a>
          
          <a 
            href="https://facebook.com/weddingsbytamanna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              color: '#ad9f96'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#eaddd4'
              e.currentTarget.querySelector('svg').style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ad9f96'
              e.currentTarget.querySelector('svg').style.transform = 'scale(1)'
            }}
          >
            <FacebookIcon />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Facebook
            </span>
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-element" style={{
          paddingTop: '40px',
          borderTop: '1px solid rgba(173, 159, 150, 0.15)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: '#6b5d52',
          letterSpacing: '1.5px',
          opacity: 0
        }}>
          © {new Date().getFullYear()} Weddings by Tamanna
        </div>
      </div>
    </footer>
  )
}
