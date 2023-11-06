import { CourseDetailsType } from '@/types/types';
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const CourseDetails = ({ courseDetailsData }: { courseDetailsData: CourseDetailsType }) => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <section className='py-6'>
      <h2 className='text-2xl font-semibold py-4'>{courseDetailsData.name}</h2>
      <div className='border rounded-md'>
        {courseDetailsData.values.map((data, index) => {
          return <AccordionItem key={index} open={index === open} title={data.title} description={data.description} toggle={() => toggle(index)} />;
        })}
      </div>
    </section>
  );
};

export default CourseDetails;
