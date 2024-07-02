import React from 'react'

const ServicesCard = ({tag, url}) => {
  return (
    <div className='flex items-start justify-center w-full h-60 bg-blackClr my-4 overflow-hidden relative'>
        <span className='font-bold text-sm text-white absolute top-2 right-2 bg-black py-2 px-5 z-10'>{tag}</span>
        <img src={url} alt="content" className='w-full object-cover hover:scale-110 duration-500'/>
    </div>
  )
}

export default ServicesCard
