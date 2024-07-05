import React from 'react'
import Image from 'next/image'
import styles from './GlareCard2.module.css'

interface GlareCard2Props {
  imageSrc: string
  alt: string
  className?: string
}

const GlareCard2: React.FC<GlareCard2Props> = ({
  imageSrc,
  alt,
  className
}) => {
  return (
    <div className={`${styles.shader} ${className || ''}`}>
      <Image src={imageSrc} alt={alt} layout='fill' objectFit='cover' />
      <div className={`${styles.shaderLayer} ${styles.specular}`}>
        <div className={`${styles.shaderLayer} ${styles.mask}`}>
          <div className={styles.hologramLayer}></div>
        </div>
      </div>
    </div>
  )
}

export default GlareCard2
