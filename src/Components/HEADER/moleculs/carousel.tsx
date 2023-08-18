
// Lazy Image Loader
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { afterLoadingImage, beforeLoadingImage } from '@/utility/loader_image';
import spinner from '@/assets/spinner.svg'

// Image Carousel
import carousel_image from '@/assets/exported/carousel';
const {carousel1,carousel2,carousel3} = carousel_image

export default function Carousel() {

 
  return (
    <>
    <div>
  <div className="carousel">
    <ul className="slides h-[490px]">

        {/* Title Hero */}
        <div className="relative z-50 md:pl-32 pl-16 h-full flex flex-col justify-center  ">
        <div>
        <h1 className="text_embose md:text-6xl text-5xl text-white drop-shadow-sm break-words font-extrabold tracking-wide  uppercase " style={{inlineSize:'309px'}}>exDamn X fashion outfits</h1>
        </div>
        </div>

      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li className="slide-container">
        <div className="slide-image">
        <LazyLoadImage
      alt={carousel1.alt}
      src={carousel1.src} 
      height={'100%'}
      width={'100%'}       
      placeholderSrc={spinner}
      wrapperClassName='lazy-loader'
      beforeLoad={() => beforeLoadingImage()}
      afterLoad={() => afterLoadingImage()}
      effect='blur'
     />
      <span>{carousel1.caption_span}</span>
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-3" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-2" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li className="slide-container">
        <div className="slide-image">
        <LazyLoadImage
      alt={carousel2.alt}
      src={carousel2.src} 
      height={'100%'}
      width={'100%'}  
      wrapperClassName='lazy-loader'
      placeholderSrc={spinner}
      beforeLoad={() => beforeLoadingImage()}
      afterLoad={() => afterLoadingImage()}
      effect='blur' />
      <span>{carousel2.caption_span}</span>
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-1" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-3" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li className="slide-container">
        <div className="slide-image">
        <LazyLoadImage
      alt={carousel3.alt}
      src={carousel3.src} 
      height={'100%'}
      width={'100%'}  
      wrapperClassName='lazy-loader'
      placeholderSrc={spinner}
      beforeLoad={() => beforeLoadingImage()}
      afterLoad={() => afterLoadingImage()}
      effect='blur'
      />
      <span>{carousel3.caption_span}</span>
        </div>
        <div className="carousel-controls">
          <label htmlFor="img-2" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-1" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div className="carousel-dots">
        <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
        <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
        <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div>
    </>
  )
}
