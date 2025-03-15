import React from 'react'
import CV from '@/app/components/my-cv/cv'
import { cvStatus } from '@/global/data';

type Props = {}

type StatusType = "drafts" | "downloaded" | "saved";

const CvContainer = (props: Props) => {

 
  
 return (
  <>
  <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2">
     {cvStatus.map((item,index) =>(
      <CV statusTag={item}/>
     ))
     }
  </div>
  </>
  );
};

export default CvContainer