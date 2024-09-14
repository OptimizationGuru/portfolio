import React, { useState } from 'react';
import { fieldTypes } from '../../constants';
import emailjs from 'emailjs-com';

const ContactRight = () => {
  const [finalFormError, setFinalFormError] = useState('');

  const [formDetails, setFormDetails] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formValidity, setFormValidity] = useState({
    name: false,
    phone: false,
    email: false,
    subject: false,
    message: false,
  });

  const ValidateForm = (fieldValue, fieldName) => {
    let isValid = false;
    let idx = null;

    idx =
      fieldName === 'phone'
        ? 1
        : fieldName === 'email'
          ? 2
          : fieldName === 'message'
            ? 4
            : fieldName === 'name'
              ? 0
              : 3;

    if (idx === 0) {
      isValid = fieldValue?.length >= 3;
    } else if (idx === 3) {
      isValid = fieldValue?.length >= 15;
    } else {
      isValid = fieldTypes[idx].test_func.test(fieldValue);
    }

    setFormValidity((prev) => ({ ...prev, [fieldName]: isValid }));

    setFormErrors((prev) => ({
      ...prev,
      [fieldName]: isValid ? '' : idx !== null ? fieldTypes[idx]?.errMsg : '',
    }));

    setFormDetails((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const finalValidation = () => {
    let hasError = false;
    let finalErrorMessage = '';

    for (const key of Object.keys(formValidity)) {
      if (!formValidity[key]) {
        finalErrorMessage = 'Please make sure all fields are valid..';
        hasError = true;
        break;
      }
    }

    if (hasError) {
      setFinalFormError(finalErrorMessage);
      return false;
    } else {
      setFinalFormError('');
      return true;
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();

    const isFormValid = finalValidation();

    if (!isFormValid) return;

    try {
      await emailjs.send(
        process.env.REACT_APP_SELF_MAIL_SERVICE_ID,
        process.env.REACT_APP_SELF_MAIL_TEMPLATE_ID,
        {
          from_name: 'Portfolio',
          user_name: formDetails.name,
          message: `Subject: ${formDetails.subject}\n\nMessage: ${formDetails.message}`,
          user_email: `${formDetails.email} : ${formDetails.phone}`,
        },
        process.env.REACT_APP_SELF_MAIL_USER_ID
      );

      await emailjs.send(
        process.env.REACT_APP_VISITOR_MAIL_SERVICE_ID,
        process.env.REACT_APP_VISITOR_MAIL_TEMPLATE_ID,
        {
          user_name: formDetails.name,
          subject: formDetails.subject,
          message: formDetails.message,
          from_name: 'Shivam Tiwari',
          user_email: formDetails.email,
        },
        process.env.REACT_APP_VISITOR_MAIL_USER_ID
      );

      setFormDetails({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email', error.text);
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
                  value={formDetails.name}
                  onChange={(e) => {
                    ValidateForm(e.target.value, 'name');
                  }}
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
                  value={formDetails.phone}
                  onChange={(e) => {
                    ValidateForm(e.target.value, 'phone');
                  }}
                  className="w-full p-4 rounded-md bg-[#191B1E]  highlight "
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between px-4 w-full -my-4">
            <div className="w-[48%] -h-2">
              {!formValidity.name && (
                <p className="text-designColor text-xs -pt-[10px]">
                  {formErrors.name}
                </p>
              )}
            </div>

            <div className="w-[48%] h-4">
              {!formValidity.phone && (
                <p className="text-designColor text-xs ">{formErrors.phone}</p>
              )}
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
                  value={formDetails.email}
                  onChange={(e) => {
                    ValidateForm(e.target.value, 'email');
                  }}
                  className="w-full p-4 rounded-md bg-[#191B1E]  highlight"
                />
                {!formValidity.email && (
                  <p className="text-designColor text-sm py-1">
                    {formErrors.email}
                  </p>
                )}
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
                  value={formDetails.subject}
                  onChange={(e) => {
                    ValidateForm(e.target.value, 'subject');
                  }}
                  className="w-full p-4 rounded-md bg-[#191B1E] highlight "
                />
                {!formValidity.subject && (
                  <p className="text-designColor text-sm py-1">
                    {formErrors.subject}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-2">
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <div className="w-full">
                <label className="ml-2">Message</label>
              </div>

              <div className="w-full resize-none">
                <textarea
                  id="your_message"
                  type="text"
                  value={formDetails.message}
                  onChange={(e) => {
                    ValidateForm(e.target.value, 'message');
                  }}
                  className="w-full h-[250px]  p-4 rounded-md   overflow-auto resize-none highlight bg-[#191B1E]"
                />
                {!formValidity.message && (
                  <p className="text-designColor text-sm py-1">
                    {formErrors.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full  px-4 py-2 flex flex-col gap-4">
            <button
              type="submit"
              className="w-full p-4 text-white  rounded-md bg-[#141518]  highlight"
            >
              Submit
            </button>
            {finalFormError?.length > 0 && (
              <p className="text-designColor text-sm py-1">{finalFormError}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactRight;
