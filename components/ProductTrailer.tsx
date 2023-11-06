import { MediaData } from '@/types/types';
import { useState } from 'react';

const ProductTrailer = ({ mediadata }: { mediadata: MediaData }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className='w-96 h-96 border border-gray-300 rounded-md'>
      <div className='relative'>
        {!isVideoOpen && (
          <>
            <img height='900' width='400' className='brightness-[.6]' loading='lazy' src={mediadata.media[0].thumbnail_url} alt='' />

            <div onClick={() => setIsVideoOpen(true)} className='absolute inset-0 flex justify-center items-center cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' fill='none' viewBox='0 0 56 56'>
                <circle cx='28' cy='28' r='28' fill='#fff' fill-opacity='0.5'></circle>
                <circle cx='27.999' cy='28' r='25.415' fill='#fff'></circle>
                <path
                  fill='#1CAB55'
                  d='M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z'
                ></path>
              </svg>
            </div>
          </>
        )}

        {isVideoOpen && (
          <iframe
            width='382'
            height='205'
            src={`https://www.youtube.com/embed/${mediadata?.media[0]?.resource_value}?si=ZBsvcrurI2mA87ub`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className='p-4'>
        <p className='font-semibold text-2xl my-2'>৳ 1000</p>
        <div>
          <button className='rounded-md bg-green-600 p-3 whitespace-nowrap text-base font-medium text-white md:w-full  '>
            {mediadata.cta_text.name}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductTrailer;
