import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";

const ConsultantCard = ({ consultant }) => {
    const { consultantImg, consultantName, consultantPosition } = consultant
    return (
        <div className='rounded-md hover:-translate-y-1 transition-all hover:shadow-xl w-11/12 md:w-full mx-auto sm:mx-0 flex flex-col items-center justify-center border border-primary'>
            <div className='h-[150px] w-[150px] rounded-full overflow-hidden mt-5'>
                {
                    consultantImg ?
                        <><img src={consultantImg} className='w-full' alt="" /></> :
                        <><IoPersonCircleOutline className='text-[150px] text-primary' /></>
                }
            </div>
            <div className='p-5 text-center pt-2'>
                <h5 className='text-[22px] lg:text-[27px]'><strong>{consultantName}</strong></h5>
                <p className='font-bornoregular text-[13px] md:text-[15px] text-ash'>{consultantPosition}</p>
            </div>
        </div >
    );
};

export default ConsultantCard;