import { useEffect, useState, useCallback } from 'react'

export function useImageSequence(sequenceName, totalFrames, initialFrame = 0) {
  const [currentFrame, setCurrentFrame] = useState(initialFrame)
  const [loadedImages, setLoadedImages] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const images = []
    let loadedCount = 0

    const loadImages = async () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image()
        img.src = `/${sequenceName}/ezgif-frame-${String(i).padStart(3, '0')}.jpg`
        img.onload = () => {
          loadedCount++
          if (loadedCount === totalFrames) {
            setIsLoaded(true)
          }
        }
        images.push(img)
      }
      setLoadedImages(images)
    }

    loadImages()
  }, [sequenceName, totalFrames])

  const setFrame = useCallback((frame) => {
    setCurrentFrame(Math.max(0, Math.min(frame, totalFrames - 1)))
  }, [totalFrames])

  const getImageSrc = useCallback((frame = currentFrame) => {
    const frameNum = Math.max(0, Math.min(frame, totalFrames - 1))
    return `/${sequenceName}/ezgif-frame-${String(frameNum + 1).padStart(3, '0')}.jpg`
  }, [sequenceName, totalFrames, currentFrame])

  return { currentFrame, setFrame, getImageSrc, isLoaded, loadedImages }
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(scrollProgress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}
