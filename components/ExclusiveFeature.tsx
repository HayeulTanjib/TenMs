import { ExclusiveFeatureType } from '@/types/types';

const ExclusiveFeature = ({ exclusiveFeatureData }: { exclusiveFeatureData: ExclusiveFeatureType }) => {
  return (
    <section className='w-10/12'>
        <h2 className='text-xl font-semibold py-6'>{exclusiveFeatureData.name}</h2>
    <div className='border rounded-md w-full'>
      {exclusiveFeatureData.values.map((info, index) => (
        <div key={index}>
          <div className='flex justify-around pt-4'>
            <div className="flex flex-col gap-3">
            <h3 className=''>{info.title}</h3>
            <div>
              {info.checklist.map((item, index) => (
                <div className='flex gap-2 items-center pb-2'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" fill="none" viewBox="0 0 19 15"><path fill="#6294F8" stroke="#6294F8" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.893" d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"></path></svg>
                </div>
                <ul key={index}>
                  <li className='text-slate-600'>{item}</li>
                </ul>
                </div>
              ))}
            </div>
            </div>

            <div>
                <img height='300' width='200' src={info.file_url} alt={info.title} />
            </div>
          </div>
          <div className='py-4 grid place-items-center'>
          <hr className='w-11/12' />
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default ExclusiveFeature;
