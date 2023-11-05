import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
     Hello 
    </main>
  );
}


export async function getServerSideProps(){
  const response = await fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course');
  const data = await response.json();
  console.log('Data', data);

  return{
    props: {
      data
    }
  }
  
}