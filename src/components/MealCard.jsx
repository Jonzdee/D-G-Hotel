import React from 'react'

const MealCard = ({name, description,price,linkTo, img}) => {
  return (
    <div className='w-full relative group'>
        <div className='w-full h-48 overflow-hidden'>
            <img src={img} alt=""  className='object-cover w-full group-hover:scale-110 duration-500'/>
        </div>
        <div className='bg-black p-5 flex flex-col gap-3 text-left'>
          <div className='text-white font-btnFont text-3xl'>{name}</div>
          <div className='text-fontClrGrey font-normal'>{description}</div>
        </div>
        <div className='flex items-center justify-between px-5 pb-5 bg-black'>
          <div className='flex gap-2 text-lg'>
            <div className='text-primaryClr'>€{price}</div>
            <div className='text-fontClrGrey font-normal'>per meal</div>  
          </div>
        </div>
    </div>
  )
}

export default MealCard