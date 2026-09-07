import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FloralLineArt({ className, style }) {
  const svgRef = useRef(null)
  
  useEffect(() => {
    if (!svgRef.current) return
    
    const ctx = gsap.context(() => {
      const paths = svgRef.current.querySelectorAll('.floral-path')
      gsap.fromTo(paths,
        { pathLength: 0, opacity: 0 },
        {
          pathLength: 1,
          opacity: 1,
          duration: 2,
          stagger: 0.3,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 80%',
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
      viewBox="0 0 400 600"
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '500px',
        ...style
      }}
      fill="none"
      stroke="#ad9f96"
      strokeWidth="0.8"
    >
      {/* Main stem */}
      <path
        className="floral-path"
        d="M200,550 C200,450 180,350 200,250 C220,150 200,80 200,30"
        strokeLinecap="round"
      />
      
      {/* Left branch 1 */}
      <path
        className="floral-path"
        d="M200,450 C170,440 140,420 120,400"
        strokeLinecap="round"
      />
      
      {/* Left leaf 1 */}
      <path
        className="floral-path"
        d="M140,410 C130,400 120,395 115,400 C120,405 130,410 140,410"
        strokeLinecap="round"
      />
      
      {/* Right branch 1 */}
      <path
        className="floral-path"
        d="M200,380 C230,370 260,350 280,330"
        strokeLinecap="round"
      />
      
      {/* Right leaf 1 */}
      <path
        className="floral-path"
        d="M260,340 C270,330 280,325 285,330 C280,335 270,340 260,340"
        strokeLinecap="round"
      />
      
      {/* Left branch 2 */}
      <path
        className="floral-path"
        d="M200,300 C170,290 140,270 120,250"
        strokeLinecap="round"
      />
      
      {/* Flower bud left */}
      <circle className="floral-path" cx="120" cy="250" r="8" />
      <path className="floral-path" d="M120,242 L120,235" />
      <path className="floral-path" d="M115,238 L120,235 L125,238" />
      
      {/* Right branch 2 */}
      <path
        className="floral-path"
        d="M200,220 C230,210 260,190 280,170"
        strokeLinecap="round"
      />
      
      {/* Flower bud right */}
      <circle className="floral-path" cx="280" cy="170" r="10" />
      <path className="floral-path" d="M280,160 L280,150" />
      
      {/* Top flower */}
      <circle className="floral-path" cx="200" cy="30" r="15" />
      <circle className="floral-path" cx="200" cy="30" r="6" />
      <path className="floral-path" d="M200,15 L200,8" />
      <path className="floral-path" d="M200,45 L200,52" />
      <path className="floral-path" d="M185,30 L175,30" />
      <path className="floral-path" d="M215,30 L225,30" />
      
      {/* Small decorative dots */}
      <circle className="floral-path" cx="160" cy="350" r="2" fill="#ad9f96" />
      <circle className="floral-path" cx="240" cy="280" r="2" fill="#ad9f96" />
      <circle className="floral-path" cx="150" cy="180" r="2" fill="#ad9f96" />
    </svg>
  )
}
