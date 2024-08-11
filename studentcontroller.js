import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [student, setStudent] = useState({
    name: '',
    class: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
    setStudent({ name: '', class: '' });
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
        name="class"
        value={student.class}
        onChange={handleChange}
        placeholder="Student Class"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;