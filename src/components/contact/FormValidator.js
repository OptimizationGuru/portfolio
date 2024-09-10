import React, { useState } from 'react';
import { fieldTypes } from '../../constants';

const FormValidator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formValidity, setFormValidity] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const isFieldValid = (field, fieldType, fieldName) => {
    const { type, test_func, errMsg } = fieldType;
    let isValid = false;

    if (type === 'text') {
      isValid = field.length >= 3;
    } else {
      isValid = test_func.test(field);
    }

    setFormValidity((prev) => ({ ...prev, [fieldName]: isValid }));
    setFormErrors((prev) => ({ ...prev, [fieldName]: isValid ? '' : errMsg }));

    setFormData((prev) => ({ ...prev, [fieldName]: field }));
  };

  const handleChange = (e, fieldType) => {
    const { name, value } = e.target;
    isFieldValid(value, fieldType, name);
  };

  const fields = [
    { name: 'name', type: 'text' },
    { name: 'phone', type: 'phone' },
    { name: 'email', type: 'email' },
    { name: 'subject', type: 'text' },
    { name: 'message', type: 'text' },
  ];

  return (
    <div>
      <form>
        <div className="flex flex-col items-center justify-center gap-6">
          {fields.map(({ name, type }) => (
            <div
              key={name}
              className="flex flex-col gap-2 item-center justify-center text-gray-400"
            >
              <label>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={(e) =>
                  handleChange(
                    e,
                    fieldTypes.find((f) => f.type === type)
                  )
                }
              />
              <p className="text-md text-designColor">
                {formValidity[name] ? '' : formErrors[name]}
              </p>
            </div>
          ))}
          <div className="flex flex-col gap-2 item-center justify-center">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormValidator;
