import React from 'react';

const ContactRight = () => {
  function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
  }

  let textarea = document.getElementById('adjust_height');

  textarea &&
    textarea.addEventListener('keyup', () => {
      textarea.style.height = calcHeight(textarea.value) + 'px';
    });

  return (
    <div className="w-full  my-2 p-3 h-auto shadow-shadowOne text-[#9CA3AF]">
      <form className="py-4">
        <div className="flex flex-col items-center justify-center gap-4 w-full ">
          <div className="flex justify-between px-4 py-2 w-full">
            <div className="flex flex-col items-center justify-center gap-2 w-[48%]">
              <div className="w-full">
                <label className="ml-2">Your Name</label>
              </div>
              <div className="w-full">
                <input
                  id="name"
                  type="text"
                  className="w-full p-4  bg-[#191B1E]  rounded-lg focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 w-[48%]">
              <div className="w-full">
                <label className="ml-2">Phone Number</label>
              </div>
              <div className="w-full">
                <input
                  id="phone"
                  type="text"
                  className="w-full p-4 rounded-md bg-[#191B1E]  focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-2">
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <div className="w-full">
                <label className="ml-2">Email</label>
              </div>
              <div className="w-full">
                <input
                  id="email"
                  type="text"
                  className="w-full p-4 rounded-md bg-[#191B1E]  focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-2">
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <div className="w-full">
                <label className="ml-2">Subject</label>
              </div>
              <div className="w-full">
                <input
                  id="subject"
                  type="text"
                  className="w-full p-4 rounded-md bg-[#191B1E]  focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-2">
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <div className="w-full">
                <label className="ml-2">Message</label>
              </div>
              <div className="w-full">
                <textarea
                  id="adjust_height"
                  type="text"
                  className="w-full h-[250px] resize-none p-4 rounded-md focus:outline-none bg-[#191B1E]"
                />
              </div>
            </div>
          </div>

          <div className="w-full  px-4 py-2">
            <button
              type="submit"
              className="w-full p-4 text-white  rounded-md bg-[#141518] hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactRight;
