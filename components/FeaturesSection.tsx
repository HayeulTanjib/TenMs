import { FeaturesType } from "@/types/types";

const FeaturesSection = ({featuresData} : {featuresData: FeaturesType}) => {
  return (
    <section className="w-10/12">
      <h2 className='text-lg font-semibold pt-12 pb-6'>{featuresData.name}</h2>
      <div className='grid md:grid-cols-2 gap-6 p-8 w-full bg-[#111827] rounded-md'>
        {featuresData.values.map((info: any) => (
          <div className='flex gap-3'>
            <div>
              <img height='150' width='150' src={info.icon} alt={info.title} />
            </div>
            <div>
              <h3 className='text-white'>{info.title}</h3>
              <p className='text-slate-400'>{info.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
