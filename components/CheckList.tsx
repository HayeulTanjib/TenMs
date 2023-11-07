import { ChecklistType } from "@/types/types";


const CheckList = ({data}: {data:ChecklistType}) => {
    
    
    return (
        <section className="pt-6">
            {
                data?.checklist.map((info:any, index:number) => (
                    <div key={index} className="flex gap-2 pb-3 text-slate-600">
                        <div><img src={info.icon} loading="lazy" alt={info.text} /></div>
                        <div>
                            <p>{info.text}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default CheckList;