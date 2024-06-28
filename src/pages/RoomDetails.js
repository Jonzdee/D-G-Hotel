import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
//components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
// scroll tap component
import ScrollToTop from '../components/ScrollToTop';
// context
import { RoomContext } from '../context/RoomContext';
//icons
import {FaCheck} from 'react-icons/fa';	

const RoomDetails = () => {
  const {rooms} = useContext(RoomContext);
  const {id} = useParams();
  console.log(id);
  
  // get room 
  const room =rooms.find((room)=>{
    return room.id === Number(id)
  });

  //destructure room 
  const {name, description, facilities, imageLg, price}= room;
  return (
    <section >
      <ScrollToTop />
      {/* banner */}
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
       {/*  overlay */}
       <div className='absolute w-full h-full bg-black/70'></div>
       {/* title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{name}
          Details 
        </h1>
      </div>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row h-full py-24'>
        {/* left side  */}
        <div className='w-full h-full lg:w-[60%] px-6'>
    <h2 className='h2'>{name}</h2>
    <p className='mb-8'>{description}</p>
    <img src={imageLg} alt="" />
    {/* facilities  */}
    <div className='mt-12'>
    <h3 className='h3 mb-3'> Room Facilities</h3>
    <p className='mb-12'>....</p>
    {/* grid */}
    <div className='grid grid-cols-3 gap-6 mb-12'>
      {facilities.map((item, index)=>{
        //destructure item
        const {name, icon} = item;
        return <div className='flex items-center gap-x-3 flex-1' key={index}>
          <div className='text-3xl text-accent '>{icon}</div>
          <div className='text-base '>{name}</div>
        </div>
      })}
    </div>
    </div>
        </div>

      {/* right side  */}
      <div className='w-full h-full lg:w-[60%]'>
      {/* reservation */}
      <div className='py-8 px-6 bg-accent/20 mb-12'>
        <div className='flex flex-col space-y-4 mb-4'>
          <h3>Your Reservation</h3>
          <div className='h-[60px]'>
            <CheckIn />
          </div>
          <div className='h-[60px]'>
            <CheckOut />
          </div>
          <div className='h-[60px]'>
            <AdultsDropdown />
          </div>
          <div className='h-[60px]'>
            <KidsDropdown />
          </div>
        </div>
        <button className='btn btn-lg btn-primary w-full'>
            book now for #{price}
            </button>
      </div>
      {/* rule  */}
      <div>
        <h3 className='h3'>Hotel Rules</h3>
        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur,
           adipisicing elit. Aliquam nisi in reprehenderit.</p>
           <ul className='flex flex-col gap-y-4'>
            <li className='flex items-center gap-x-4'>
              <FaCheck className='text-accent'/>
              Check-in: 3:00 PM - 9:00 PM
            </li>
            <li className='flex items-center gap-x-4'>
              <FaCheck className='text-accent'/>
              Check-Out: 10:30 PM
            </li>
            <li className='flex items-center gap-x-4'>
              <FaCheck className='text-accent'/>
              No Pets
            </li>
            <li className='flex items-center gap-x-4'>
              <FaCheck className='text-accent'/>
              No Smoking
            </li>
           </ul>
      </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default RoomDetails;
