'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './GlareCard4.module.css'

interface PositionState {
  x: number
  y: number
  bgX: number
  bgY: number
  spriteX: number
  spriteY: number
  opacity: number
}

const GlareCard4: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState<PositionState>({
    x: 0,
    y: 0,
    bgX: 50,
    bgY: 50,
    spriteX: 50,
    spriteY: 50,
    opacity: 0
  })
  const cardRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const l = e.clientX - rect.left
    const t = e.clientY - rect.top
    const h = rect.height
    const w = rect.width
    const px = Math.abs(Math.floor((100 / w) * l) - 100)
    const py = Math.abs(Math.floor((100 / h) * t) - 100)
    const pa = 50 - px + (50 - py)

    const lp = 50 + (px - 50) / 1.5
    const tp = 50 + (py - 50) / 1.5
    const px_spark = 50 + (px - 50) / 7
    const py_spark = 50 + (py - 50) / 7
    const p_opc = 20 + Math.abs(pa) * 1.5
    const ty = ((tp - 50) / 2) * -1
    const tx = ((lp - 50) / 1.5) * 0.5

    setPosition({
      x: tx,
      y: ty,
      bgX: lp,
      bgY: tp,
      spriteX: px_spark,
      spriteY: py_spark,
      opacity: p_opc / 100
    })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({
      x: 0,
      y: 0,
      bgX: 50,
      bgY: 50,
      spriteX: 50,
      spriteY: 50,
      opacity: 0
    })
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add(styles.animated)
      }
    }, 2500)
  }

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isHovered ? '' : styles.animated}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          transform: `rotateX(${position.y}deg) rotateY(${position.x}deg)`,
          '--gradientX': `${position.bgX}%`,
          '--gradientY': `${position.bgY}%`,
          '--spriteX': `${position.spriteX}%`,
          '--spriteY': `${position.spriteY}%`,
          '--opacity': position.opacity
        } as React.CSSProperties
      }
    >
      <Image
        src='/assets/iso/CS_559.png'
        alt='CS 559 Image'
        layout='fill'
        objectFit='cover'
      />
      <div className={styles.holo} />
    </div>
  )
}

export default GlareCard4
