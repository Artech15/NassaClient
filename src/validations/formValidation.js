import React, { useState } from 'react';

 export default function validateForm({fields}) {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name].trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
      if (field.validation && !field.validation.test(formData[field.name])) {
        newErrors[field.name] = `Invalid ${field.label}`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

