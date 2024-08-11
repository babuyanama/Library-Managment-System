import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [student, setStudent] = useState({
    name: '',
    id: '',
    email: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
    setStudent({ name: '', id: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Student Name"
        required
      />
      <input
        type="text"
        name="id"
        value={student.id}
        onChange={handleChange}
        placeholder="Student ID"
        required
      />
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={handleChange}
        placeholder="Student Email"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;