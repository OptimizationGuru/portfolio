import React, { useState } from 'react';
import { fieldTypes } from '../../constants';

const FormValidator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errName, setErrName] = useState();
  const [errPhone, setErrPhone] = useState();
  const [errMail, setErrMail] = useState();
  const [errSubject, setErrSubject] = useState();
  const [errMessage, setErrMessage] = useState();

  const [isNameValid, setNameValid] = useState();
  const [isPhoneValid, setPhoneValid] = useState();
  const [isMailValid, setMailValid] = useState();
  const [isSubjectValid, setSubjectValid] = useState();
  const [isMsgValid, setMsgValid] = useState();

  const isFieldValid = (field, fieldType, cb, cb2, cb3) => {
    const { type, test_func, errMsg } = fieldType;

    if (type === 'text') {
      if (field.length >= 3) {
        cb3(true);
      } else {
        cb3(false);
        cb2(errMsg);
      }
    } else {
      const isValid = test_func.test(field);
      cb3(isValid);
      cb2(errMsg);
    }
    cb(field);
  };

  return (
    <div>
      <form>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-2 item-center justify-center text-gray-400">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) =>
                isFieldValid(
                  e.target.value,
                  fieldTypes[0],
                  setName,
                  setErrName,
                  setNameValid
                )
              }
            />
            <p className="text-md text-designColor">
              {isNameValid ? '' : errName}
            </p>
          </div>
          <div className="flex flex-col gap-2 item-center justify-center">
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) =>
                isFieldValid(
                  e.target.value,
                  fieldTypes[1],
                  setPhone,
                  setErrPhone,
                  setPhoneValid
                )
              }
            />
            <p className="text-md text-designColor">
              {isPhoneValid ? '' : errPhone}
            </p>
          </div>
          <div className="flex flex-col gap-2 item-center justify-center">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) =>
                isFieldValid(
                  e.target.value,
                  fieldTypes[2],
                  setEmail,
                  setErrMail,
                  setMailValid
                )
              }
            />
            <p className="text-md text-designColor">
              {isMailValid ? '' : errMail}
            </p>
          </div>
          <div className="flex flex-col gap-2 item-center justify-center">
            <label>Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) =>
                isFieldValid(
                  e.target.value,
                  fieldTypes[0],
                  setSubject,
                  setErrSubject,
                  setSubjectValid
                )
              }
            />
            <p className="text-md text-designColor">
              {isSubjectValid ? '' : errSubject}
            </p>
          </div>
          <div className="flex flex-col gap-2 item-center justify-center">
            <label>Message:</label>
            <input
              type="text"
              value={message}
              onChange={(e) =>
                isFieldValid(
                  e.target.value,
                  fieldTypes[0],
                  setMessage,
                  setErrMessage,
                  setMsgValid
                )
              }
            />
            <p className="text-md text-designColor">
              {isMsgValid ? '' : errMessage}
            </p>
          </div>
          <div className="flex flex-col gap-2 item-center justify-center">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormValidator;
