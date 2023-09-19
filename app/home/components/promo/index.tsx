import Button from '@/components/common/button';
import React from 'react';
import { PromoTitle, PromoSubtitle, PromoFooter } from './style'

const SectionFirst = () => {
  return (
    <div>
      <div className='flex justify-between items-center mt-14'>
        <div className='w-2/5'>
          <PromoTitle>Start your learning
            our <span style={{ color: "#FE7244" }}>experts Trainers</span></PromoTitle>
          <PromoSubtitle>Build your skill from world-class universities and companies, you can learn online and earn certifications and degrees.</PromoSubtitle>
          <div className='flex gap-5'>
            <Button text='Register' />
            <div className='flex items-center gap-2'>
              <img src="/Polygon.svg" alt="polygon icon" />
              <button>Watch now</button>
            </div>
          </div>
        </div>
        <div className='w-2/5 relative'>
          <img className='absolute top-32 -left-14' src="/congratulation.png" alt="Congratulations" />
          <img className='absolute top-1/3 right-4' src="/Course.png" alt="Congratulations" />
          <img className='absolute -left-1/4 bottom-1' src="/students.png" alt="Congratulations" />
          <img src='/user.png'
            alt='teacher_Muzaffar'
            className='w-full ' />
        </div>
      </div>
      <PromoFooter className='w-10/12 m-auto'>
        <div className='flex gap-2 items-center'>
          <img className='' src="/Course.svg" alt="Congratulations" />
          10000+ Online Course</div>
        <div className='flex gap-2 items-center'>
          <img className='' src="/Expert Icon.svg" alt="Congratulations" />
          Expert Instruction</div>
        <div>Lifetime access</div>
      </PromoFooter>
    </div>
  );
};

export default SectionFirst;
