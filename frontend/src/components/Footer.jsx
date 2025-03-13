import React from 'react';
import { assets, socials } from '@/assets/assets';


const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-14 text-sm bg-slate-900'>
      {/* Main Content */}
      <div className=' gap-14 pt-10 text-white lg:mx-10 justify-center items-center text-center w-full'>
        <div>
          <h1 className='text-[30px] font-normal text-white my-5 text-center mt-10'>MOCKINT</h1>
          <p className='text-gray-300 text-center'>
            SUHBATLAR IJOBIY BO’LISHIGA YORDAM BERAMIZ!
          </p>
          <div className='flex gap-3 items-center  justify-center mt-5'>
          <img className='w-[32px] h-[34px]' src={socials.youtube} alt="" />
          <img className='w-[32px] h-[34px]' src={socials.tg} alt="" />
          <img className='w-[32px] h-[34px]' src={socials.linkindin} alt="" />
          </div>
        </div>
        <div>
        
        </div>
      </div>
      {/* Copyright Section */}
      <div className='border-t border-gray-400 text-gray-400 w-full'>
        <p className='py-5 text-sm  text-center'>
          MOCKINT 2025@ mockint.uz - Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
}

export default Footer;
