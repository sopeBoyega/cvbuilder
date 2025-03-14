import React from 'react'
import CV from '@/app/components/my-cv/cv'

type Props = {}

type StatusType = "drafts" | "downloaded" | "saved";

const CvContainer = (props: Props) => {

 const cvStatus : StatusType[] = ["drafts","downloaded","saved","drafts","downloaded","saved","drafts","downloaded","saved"]
  
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