import { useState } from 'react'

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = '/placeholder.jpg',
  className = '',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface">
          <span className="loader"></span>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc)
          setIsLoading(false)
        }}
        loading="lazy"
        {...props}
      />
    </div>
  )
}

export default ImageWithFallback 