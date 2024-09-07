import React from 'react';
import Title from '../feature/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = () => {
  return (
    <div id="contact" className="h-auto w-full pt-[20px] my-[30px] border-b-black border-b-[1px]">
      <div className="flex justify-center items-center text-center pt-8 mt-[10px]">
        <Title title={'CONTACT'} subtitle={'Contact With Me'} />
      </div>

      <div className="flex justify-between mx-0 -my-1 p-4 ">
        <div className="w-[40%] p-2 mr-6">
          <ContactLeft />
        </div>
        <div className="w-[55%]">
          <ContactRight />
        </div>
      </div>
    </div>
  );
};

export default Contact;
