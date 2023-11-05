import { fetchData } from '@/apidata/api';
import { Data } from '@/types/types';
import InstructorsSection from '@/components/InstructorSection';
import { Inter } from 'next/font/google';
import FeaturesSection from '@/components/FeaturesSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ data }: { data: Data }) {
  const instructorsData = data?.sections.find((item: any) => item.type === 'instructors');
  const featuresData = data.sections.find((item: any) => item.type === 'features');

  if (!data) {
    return <main>No Data Available!</main>;
  }

  return (
    <main className={`p-8 ${inter.className}`}>
      <section>
        <h1 className='md:block md:text-4xl font-semibold text-gray mb-4 text-[21px]'>{data.title}</h1>
        <p>{data.description}</p>
      </section>
      {instructorsData && <InstructorsSection instructorsData={instructorsData} />}
      {featuresData && <FeaturesSection featuresData={featuresData} />}
    </main>
  );
}

export async function getServerSideProps() {
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
