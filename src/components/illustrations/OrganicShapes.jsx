import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function OrganicShape({ color = '#eaddd4', opacity = 0.3, style }) {
  const svgRef = useRef(null)
  
  useEffect(() => {
    if (!svgRef.current) return
    
    gsap.fromTo(svgRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: opacity,
        duration: 2,
        ease: 'easeOut',
        delay: 0.2
      }
    )
  }, [opacity])
  
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      style={{
        width: '100%',
        height: 'auto',
        position: 'absolute',
        zIndex: 0,
        pointerEvents: 'none',
        ...style
      }}
      fill={color}
    >
      <path d="M200,20 C280,40 340,100 360,180 C380,260 340,340 260,370 C180,400 80,380 40,300 C0,220 20,120 100,60 C140,30 160,10 200,20 Z" />
    </svg>
  )
}

export function FloatingOrnament({ x, y, size = 40, delay = 0, style }) {
  const ref = useRef(null)
  
  useEffect(() => {
    if (!ref.current) return
    
    gsap.fromTo(ref.current,
      { y: -10, opacity: 0, rotation: -5 },
      {
        y: 10,
        opacity: 1,
        rotation: 5,
        duration: 3,
        delay: delay,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      }
    )
  }, [delay])
  
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.6,
        ...style
      }}
    >
      <svg viewBox="0 0 40 40" fill="none" stroke="#ad9f96" strokeWidth="0.8">
        <circle cx="20" cy="20" r="15" />
        <circle cx="20" cy="20" r="8" />
        <circle cx="20" cy="20" r="3" fill="#ad9f96" />
      </svg>
    </div>
  )
}

export function DecorativeLine({ vertical = false, style }) {
  const ref = useRef(null)
  
  useEffect(() => {
    if (!ref.current) return
    
    const length = vertical ? 200 : 300
    gsap.fromTo(ref.current,
      { scaleX: vertical ? 1 : 0, scaleY: vertical ? 0 : 1, opacity: 0 },
      {
        scaleX: vertical ? 0 : 1,
        scaleY: vertical ? 1 : 0,
        opacity: 0.4,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [vertical])
  
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        background: 'linear-gradient(to right, transparent, #ad9f96, transparent)',
        width: vertical ? '1px' : '300px',
        height: vertical ? '200px' : '1px',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0,
        ...style
      }}
    />
  )
}
