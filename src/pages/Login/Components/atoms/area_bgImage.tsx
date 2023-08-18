// Lazy Image Loader
import { LazyLoadImage } from 'react-lazy-load-image-component';
import spinner from '@/assets/spinner.svg'
import { afterLoadingImage, beforeLoadingImage } from '@/utility/loader_image';


export default function Area_BgImage() {
  return (
    <>
      <section className='area_bgImage hidden sm:block h-screen' >
        <LazyLoadImage
          alt={'background_login'}
          src={'https://unsplash.com/photos/-IlmDnJg5cg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8fHwxNjkyMjAwNDc3fDA&force=true&w=640'}
          height={'100%'}
          width={'100%'}
          wrapperClassName='lazy-loader'
          placeholderSrc={spinner}
          beforeLoad={() => beforeLoadingImage()}
          afterLoad={() => afterLoadingImage()}
          effect='blur'
          className='grayscale-[80%] hover:grayscale-0 bg-white h-full w-full '
        />
      </section>
    </>
  )
}
