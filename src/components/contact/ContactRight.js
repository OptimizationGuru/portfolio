import React from 'react';

const ContactRight = () => {
  function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;

    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
  }

  let textarea = document.getElementById('your_message');

  textarea &&
    textarea.addEventListener('keyup', () => {
      textarea.style.height = calcHeight(textarea.value) + 'px';
    });

  const sendMail = (e) => {
    e.preventDefault();
    const fields = [
      { id: 'name', regex: null, error: 'Please enter your name' },
      {
        id: 'phone',
        regex: /^\d{10}$/,
        error: 'Please enter a valid phone number',
      },
      {
        id: 'email',
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        error: 'Please enter a valid email',
      },
      { id: 'subject', regex: null, error: 'Please enter a subject' },
      { id: 'adjust_height', regex: null, error: 'Please enter a message' },
    ];

    let isValid = true;
    let firstError = null;

    fields.forEach(({ id, regex, error }) => {
      const input = document.getElementById(id);
      input?.classList.remove('border-red-500');
      if (!input?.value || (regex && !regex.test(input?.value))) {
        input?.classList.add('border-red-500');
        if (firstError === null) firstError = error;
        isValid = false;
      }
    });

    if (!isValid) {
      alert(firstError);
      return;
    }

    if (isValid) {
      alert('Thank you for your message.');
    }
  };

  return (
    <div className="w-full  my-2 p-3 h-auto shadow-shadowOne text-[#9CA3AF]">
      <form className="py-4" onSubmit={sendMail}>
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
                  className="w-full p-4  bg-[#191B1E]  rounded-lg highlight"
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
                  className="w-full p-4 rounded-md bg-[#191B1E]  highlight "
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
                  className="w-full p-4 rounded-md bg-[#191B1E]  highlight"
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
                  className="w-full p-4 rounded-md bg-[#191B1E] highlight "
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
                  id="your_message"
                  type="text"
                  className="w-full h-[250px]  p-4 rounded-md  resize-none highlight bg-[#191B1E]"
                />
              </div>
            </div>
          </div>

          <div className="w-full  px-4 py-2">
            <button
              type="submit"
              className="w-full p-4 text-white  rounded-md bg-[#141518]  highlight"
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
