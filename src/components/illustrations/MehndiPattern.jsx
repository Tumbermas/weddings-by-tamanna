import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function MehndiPattern({ className, style }) {
  const svgRef = useRef(null)
  
  useEffect(() => {
    if (!svgRef.current) return
    
    const ctx = gsap.context(() => {
      const paths = svgRef.current.querySelectorAll('.mehndi-path')
      gsap.fromTo(paths,
        { pathLength: 0, opacity: 0 },
        {
          pathLength: 1,
          opacity: 1,
          duration: 2.5,
          stagger: 0.15,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 70%',
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
      viewBox="0 0 500 500"
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '400px',
        ...style
      }}
      fill="none"
      stroke="#9a8b7f"
      strokeWidth="0.6"
    >
      {/* Central motif */}
      <circle className="mehndi-path" cx="250" cy="250" r="60" />
      <circle className="mehndi-path" cx="250" cy="250" r="40" />
      <circle className="mehndi-path" cx="250" cy="250" r="20" />
      
      {/* Petal patterns around center */}
      <path className="mehndi-path" d="M250,190 C230,160 230,140 250,140 C270,140 270,160 250,190" />
      <path className="mehndi-path" d="M250,310 C230,280 230,260 250,260 C270,260 270,280 250,310" />
      <path className="mehndi-path" d="M190,250 C160,230 140,230 140,250 C140,270 160,270 190,250" />
      <path className="mehndi-path" d="M310,250 C280,230 260,230 260,250 C260,270 280,270 310,250" />
      
      {/* Diagonal petals */}
      <path className="mehndi-path" d="M210,210 C190,185 180,175 195,160 C210,145 220,155 245,175" />
      <path className="mehndi-path" d="M290,210 C310,185 320,175 305,160 C290,145 280,155 255,175" />
      <path className="mehndi-path" d="M210,290 C190,315 180,325 195,340 C210,355 220,345 245,325" />
      <path className="mehndi-path" d="M290,290 C310,315 320,325 305,340 C290,355 280,345 255,325" />
      
      {/* Outer decorative dots */}
      <circle className="mehndi-path" cx="250" cy="120" r="4" fill="#9a8b7f" />
      <circle className="mehndi-path" cx="250" cy="380" r="4" fill="#9a8b7f" />
      <circle className="mehndi-path" cx="120" cy="250" r="4" fill="#9a8b7f" />
      <circle className="mehndi-path" cx="380" cy="250" r="4" fill="#9a8b7f" />
      
      {/* Flowing vine-like lines */}
      <path className="mehndi-path" d="M250,140 L250,100" />
      <path className="mehndi-path" d="M250,360 L250,400" />
      <path className="mehndi-path" d="M140,250 L100,250" />
      <path className="mehndi-path" d="M360,250 L400,250" />
      
      {/* Small leaf motifs */}
      <path className="mehndi-path" d="M250,100 C240,90 235,85 240,80 C245,75 250,80 250,100" />
      <path className="mehndi-path" d="M250,100 C260,90 265,85 260,80 C255,75 250,80 250,100" />
      
      <path className="mehndi-path" d="M250,400 C240,410 235,415 240,420 C245,425 250,420 250,400" />
      <path className="mehndi-path" d="M250,400 C260,410 265,415 260,420 C255,425 250,420 250,400" />
      
      {/* Corner flourishes */}
      <path className="mehndi-path" d="M100,100 C120,110 130,120 140,140" />
      <path className="mehndi-path" d="M100,100 C110,120 120,130 140,140" />
      
      <path className="mehndi-path" d="M400,100 C380,110 370,120 360,140" />
      <path className="mehndi-path" d="M400,100 C390,120 380,130 360,140" />
      
      <path className="mehndi-path" d="M100,400 C120,390 130,380 140,360" />
      <path className="mehndi-path" d="M100,400 C110,380 120,370 140,360" />
      
      <path className="mehndi-path" d="M400,400 C380,390 370,380 360,360" />
      <path className="mehndi-path" d="M400,400 C390,380 380,370 360,360" />
      
      {/* Delicate sparkle dots */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const radius = 180
        const x = 250 + Math.cos(angle) * radius
        const y = 250 + Math.sin(angle) * radius
        return <circle key={i} className="mehndi-path" cx={x} cy={y} r="2" fill="#9a8b7f" />
      })}
    </svg>
  )
}
