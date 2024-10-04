import React, { useState } from 'react';
import '../Form.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    age: '',
    experience: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.salary || formData.salary < 4000) formErrors.salary = 'Salary must be greater than 4000';
    if (!formData.age || formData.age <= 0) formErrors.age = 'Valid age is required';
    if (!formData.experience || formData.experience < 0) formErrors.experience = 'Valid experience is required';
    if (!formData.email) formErrors.email = 'Email is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully');
      // handle form submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="form-container" style={{margin:'0 auto'}}>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
          {errors.salary && <p className="error">{errors.salary}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience (years)</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          {errors.experience && <p className="error">{errors.experience}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
//git
//git streak
//git jii