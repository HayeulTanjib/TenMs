import { Collapse } from 'react-collapse';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const AccordionItem = ({ open, toggle, title, description }) => {
  return (
    <div className='pt-[10px]'>
      <div className='bg-white flex justify-between items-center gap-3 p-4 cursor-pointer border-b border-dashed last:border-none' onClick={toggle}>
        <div className='font-semibold' dangerouslySetInnerHTML={{ __html: title }} />
        <div>{open ? <FiChevronUp /> : <FiChevronDown />}</div>
      </div>

      <Collapse isOpened={open}>
        <div className='p-3 text-slate-600' dangerouslySetInnerHTML={{ __html: description }} />
      </Collapse>
    </div>
  );
};

export default AccordionItem;
