import { InstructorType } from "@/types/types";

const InstructorsSection = ({instructorsData} : {instructorsData: InstructorType}) => {
    return (
        <section>
        <h2 className='text:4xl font-semibold py-4'>{instructorsData.name}</h2>
        {instructorsData.values.map((info: any) => (
          <div className='flex items-center gap-3 border border-grey-300 rounded-md w-1/2 p-4'>
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

export default InstructorsSection;