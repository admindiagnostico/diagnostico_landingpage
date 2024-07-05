import React from 'react'
import styles from './GlareCard3.module.css'

interface GlareCard3Props {
  title: string
  subtitle: string
  koreanText: string
  flowerImageUrl: string
}

const GlareCard3: React.FC<GlareCard3Props> = ({
  title,
  subtitle,
  koreanText,
  flowerImageUrl
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.isolate}>
        <div className={styles.noise}>
          <p>{title}</p>
          <p>{subtitle}</p>
          <span>{koreanText}</span>
        </div>
        <div className={styles.overlay}></div>
        <div
          className={styles.flower}
          style={{ backgroundImage: `url(${flowerImageUrl})` }}
        ></div>
      </div>
    </section>
  )
}

export default GlareCard3
