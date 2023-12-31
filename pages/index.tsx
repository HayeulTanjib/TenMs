import { fetchData } from '@/apidata/api';
import { Data } from '@/types/types';
import InstructorsSection from '@/components/InstructorSection';
import { Inter } from 'next/font/google';
import FeaturesSection from '@/components/FeaturesSection';
import PointersSection from '@/components/PointersSection';
import ProductTrailer from '@/components/ProductTrailer';
import CourseDetails from '@/components/CourseDetails';
import ExclusiveFeature from '@/components/ExclusiveFeature';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ data }: { data: Data }) {
  const instructorsData = data?.sections.find((item: any) => item.type === 'instructors');
  const featuresData = data?.sections.find((item: any) => item.type === 'features');
  const pointersData = data?.sections.find((item: any) => item.type === 'pointers');
  const courseDetailsData = data?.sections.find((item: any) => item.type === 'about');
  const exclusiveFeatureData = data?.sections.find((item: any) => item.type === 'feature_explanations');

  if (!data) {
    return <main>No Data Available!</main>;
  }

  return (
    <main className={`p-10 ${inter.className}`}>
      <div className='flex'>
        <div>
          <section className='w-10/12'>
            <h1 className='md:block md:text-4xl font-semibold text-gray mb-4 text-[21px]'>{data.title}</h1>
            <p className='text-slate-700 w-full leading-6'>{data.description}</p>
          </section>
          {instructorsData && <InstructorsSection instructorsData={instructorsData} />}
          {featuresData && <FeaturesSection featuresData={featuresData} />}
          {pointersData && <PointersSection pointersData={pointersData} />}
          {courseDetailsData && <CourseDetails courseDetailsData={courseDetailsData} />}
          {exclusiveFeatureData && <ExclusiveFeature exclusiveFeatureData={exclusiveFeatureData} />}
        </div>
        <div>
          <ProductTrailer data={data} />
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context:any) {
  const { res } = context;
  res.setHeader('X-TENMS-SOURCE-PLATFORM', 'web');

  try {
    const data = await fetchData();
    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
