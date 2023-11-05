import { MediaData } from '@/types/types';

const ProductTrailer = ({ mediadata }: { mediadata: MediaData }) => {
  return (
    <section className='w-96 h-96 border border-gray-300 rounded-md'>
      <div>
        <img height='900' width='400' src={mediadata.media[0].thumbnail_url} alt='' />
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
