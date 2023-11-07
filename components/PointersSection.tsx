import { PointersType } from '@/types/types';

const PointersSection = ({ pointersData }: { pointersData: PointersType }) => {
    
    
  return (
    <section className='w-10/12'>
      <h2 className='text-xl font-semibold pt-12 pb-4'>{pointersData.name}</h2>
      <div className='grid md:grid-cols-2 gap-8 p-8 w-full border border-grey-300 rounded-md'>
        {pointersData?.values.map((info: any) => (
          <div className='flex gap-1'>
            <div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" style={{color: '#6294F8'}} height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
            <div>
              <h3>{info.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PointersSection;
