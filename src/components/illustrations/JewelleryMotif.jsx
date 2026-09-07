import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function JewelleryMotif({ className, style }) {
  const svgRef = useRef(null)
  
  useEffect(() => {
    if (!svgRef.current) return
    
    const ctx = gsap.context(() => {
      const elements = svgRef.current.querySelectorAll('.jewel-element')
      gsap.fromTo(elements,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: 'easeOut',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, svgRef)
    
    return () => ctx.revert()
  }, [])
  
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 300 300"
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '250px',
        ...style
      }}
      fill="none"
      stroke="#eaddd4"
      strokeWidth="1"
    >
      {/* Central ring/circle motif */}
      <circle className="jewel-element" cx="150" cy="150" r="40" />
      <circle className="jewel-element" cx="150" cy="150" r="25" />
      <circle className="jewel-element" cx="150" cy="150" r="8" fill="#eaddd4" />
      
      {/* Top decorative element */}
      <path className="jewel-element" d="M150,110 L150,80" />
      <circle className="jewel-element" cx="150" cy="70" r="6" />
      
      {/* Bottom decorative element */}
      <path className="jewel-element" d="M150,190 L150,220" />
      <circle className="jewel-element" cx="150" cy="230" r="6" />
      
      {/* Left bangle-like curve */}
      <path className="jewel-element" d="M110,150 C80,150 60,130 60,150 C60,170 80,150 110,150" />
      
      {/* Right bangle-like curve */}
      <path className="jewel-element" d="M190,150 C220,150 240,130 240,150 C240,170 220,150 190,150" />
      
      {/* Diagonal accents */}
      <circle className="jewel-element" cx="95" cy="95" r="4" />
      <circle className="jewel-element" cx="205" cy="95" r="4" />
      <circle className="jewel-element" cx="95" cy="205" r="4" />
      <circle className="jewel-element" cx="205" cy="205" r="4" />
      
      {/* Delicate connecting lines */}
      <path className="jewel-element" d="M150,110 L120,90" />
      <path className="jewel-element" d="M150,110 L180,90" />
      <path className="jewel-element" d="M150,190 L120,210" />
      <path className="jewel-element" d="M150,190 L180,210" />
      
      {/* Small sparkle dots */}
      <circle className="jewel-element" cx="70" cy="120" r="2" fill="#eaddd4" />
      <circle className="jewel-element" cx="230" cy="120" r="2" fill="#eaddd4" />
      <circle className="jewel-element" cx="70" cy="180" r="2" fill="#eaddd4" />
      <circle className="jewel-element" cx="230" cy="180" r="2" fill="#eaddd4" />
    </svg>
  )
}
