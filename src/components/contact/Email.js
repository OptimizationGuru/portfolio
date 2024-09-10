import React, { useState } from 'react';
import { fieldTypes } from '../../constants';

const Email = () => {
  const [mailDetails, setMailDetails] = useState({
    name: '',
    phone: null,
    email: '',
    subject: '',
    message: '',
  });

  const [mailErrorMsg, setMailError] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [mailValidity, setMailValidity] = useState({
    name: false,
    phone: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleInput = (fieldValue, fieldtype, fieldName) => {
    console.log(fieldValue.length, fieldtype, fieldName, 'values');

    const isValid =
      fieldtype === 0
        ? fieldValue.length >= 3
        : fieldTypes[fieldtype].test_func.test(fieldValue);

    setMailValidity((prev) => ({
      ...prev,
      [fieldName]: isValid,
    }));

    setMailError((prev) => ({
      ...prev,
      [fieldName]: mailValidity[fieldName] ? '' : fieldTypes[fieldtype].errMsg,
    }));

    setMailError((prev) => ({
      ...prev,
      [fieldName]: isValid ? '' : fieldTypes[fieldtype].errMsg,
    }));

    setMailDetails((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  return (
    <form className="p-4">
      <div className="flex flex-col item-center justify-center gap-5 w-full shadow-shadowOne py-4 px-8">
        <div className="flex justify-center gap-4 w-full">
          <div className="flex flex-col gap-2 w-[48%]">
            <label className="ml-1 text-gray-400">Name</label>
            <input
              type="text"
              className="p-4  rounded-md bg-[#191B1E]"
              value={mailDetails.name}
              onChange={(e) => {
                handleInput(e.target.value, 0, 'name');
              }}
            />
            {!mailValidity.name && (
              <p className="text-designColor">{mailErrorMsg.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-[48%]">
            <label className="ml-1 text-gray-400">Phone</label>
            <input
              type="number"
              className="p-4  rounded-md bg-[#191B1E]"
              value={mailDetails.phone}
              onChange={(e) => {
                handleInput(e.target.value, 1, 'phone');
              }}
            />
            {!mailValidity.phone && (
              <p className="text-designColor">{mailErrorMsg.phone}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="ml-1 text-gray-400">Email</label>
            <input
              type="email"
              className="p-4  rounded-md bg-[#191B1E] px-2"
              value={mailDetails.email}
              onChange={(e) => {
                handleInput(e.target.value, 2, 'email');
              }}
            />
            {!mailValidity.email && (
              <p className="text-designColor">{mailErrorMsg.email}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="ml-1 text-gray-400">Subject</label>
            <input
              type="text"
              className="p-4  rounded-md bg-[#191B1E] px-2"
              value={mailDetails.subject}
              onChange={(e) => {
                handleInput(e.target.value, 0, 'subject');
              }}
            />
            {!mailValidity.subject && (
              <p className="text-designColor">{mailErrorMsg.subject}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="ml-1 text-gray-400">Message</label>
            <textarea
              type="text"
              className="p-4  rounded-md bg-[#191B1E] px-2 w-full h-[300px] resize-none"
              value={mailDetails.message}
              onChange={(e) => {
                handleInput(e.target.value, 0, 'message');
              }}
            />
            {!mailValidity.message && (
              <p className="text-designColor">{mailErrorMsg.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-5 w-full py-4">
          <div className="flex flex-col gap-3 w-full">
            <button className="bg-[#191B1E] py-4" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Email;
