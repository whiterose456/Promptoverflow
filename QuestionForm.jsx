import React, { useState } from 'react';

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Question Title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Describe your question"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags (comma separated)"
        value={formData.tags}
        onChange={handleChange}
      />
      <button type="submit">Post Question</button>
    </form>
  );
};

export default QuestionForm;
