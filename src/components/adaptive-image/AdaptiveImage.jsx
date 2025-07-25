import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import styles from './styles.module.scss'

export const AdaptiveImage = ({ 
  image, 
  alt, 
  aspectRatio = '16:9',
  priority = false,
  rounded = false 
}) => {
  const imageUrl = image ? urlFor(image).url() : null
  const blurUrl = image ? urlFor(image).width(10).quality(20).blur(10).url() : null
  
  if (!imageUrl) return null
  
  return (
    <div 
      className={`${styles.imageContainer} ${rounded ? styles.rounded : ''}`}
      style={{ paddingBottom: aspectRatio === '16:9' ? '56.25%' : '75%' }}
    >
      <Image
        src={imageUrl}
        alt={alt || 'Image'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        className={styles.image}
        quality={90}
        priority={priority}
        placeholder="blur"
        blurDataURL={blurUrl}
      />
    </div>
  )
}