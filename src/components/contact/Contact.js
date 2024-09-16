import React from 'react';
import Title from '../feature/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = () => {
  return (
    <div className="h-auto w-full py-[10px] my-[10px] border-b-black border-b-[1px]">
      <div className="flex justify-center items-center text-center">
        <Title title={'CONTACT'} subtitle={'Contact Me'} />
      </div>

      <div className="grid grid-col-1 px-4 gap-4 my-2 md:gap-12 lg:grid lg:grid-cols-2 lg:gap-">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
};

export default Contact;
