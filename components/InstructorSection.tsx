import { InstructorType } from "@/types/types";

const InstructorSection = ({instructorsData} : {instructorsData: InstructorType}) => {
    return (
        <section  className='w-10/12'>
        <h2 className='text-2xl text-slate-800 font-semibold pt-12 pb-6'>{instructorsData.name}</h2>
        {instructorsData.values.map((info: any) => (
          <div className='flex items-center gap-3 border border-grey-300 rounded-md w-full p-4'>
            <div>
              <img loading='lazy' width='73' height='73' className='rounded-full' src={info.image} alt={info.name} />
            </div>
            <div>
              <h2>{info.name}</h2>
              <div dangerouslySetInnerHTML={{ __html: info.description }} />
            </div>
          </div>
        ))}
      </section>
    );
};

export default InstructorSection;