import { FeaturesType } from "@/types/types";

const FeaturesSection = ({featuresData} : {featuresData: FeaturesType}) => {
  return (
    <section className="w-3/4">
      <h2 className='text:4xl font-semibold py-4'>{featuresData.name}</h2>
      <div className='grid md:grid-cols-2 gap-6 p-8 w-3/4 bg-[#111827] rounded-md'>
        {featuresData.values.map((info: any) => (
          <div className='flex gap-3'>
            <div>
              <img src={info.icon} alt={info.title} />
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
