import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source) => {
  return builder.image(source)
}

export const getImageDimensions = (image) => {
  if (!image?.asset?._ref) {
    return { width: 0, height: 0 }
  }
  const dimensions = image.asset._ref.split('-')[2]
  const [width, height] = dimensions.split('x').map(Number)
  return { width, height }
}

export const getOptimizedImageUrl = (image, { width, quality = 80 } = {}) => {
  if (!image) return null
  let imageBuilder = urlFor(image)
  if (width) imageBuilder = imageBuilder.width(width)
  return imageBuilder.quality(quality).auto('format').url()
}
