import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", surname: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!/^[A-Za-z]+$/.test(form.name)) errs.name = "Name must only contain letters";
    if (!/^[A-Za-z]+$/.test(form.surname)) errs.surname = "Surname must only contain letters";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email format";
    if (form.message.split(" ").filter(Boolean).length > 3) errs.message = "Message must be ≤ 3 words";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      alert("Form submitted!");
    } else {
      setErrors(errs);
    }
  };

  // Restrict Name & Surname to only letters
  const handleLetterInput = (field, value) => {
    if (/^[A-Za-z]*$/.test(value)) {
      setForm({ ...form, [field]: value });
    }
  };

  // Restrict Message to max 3 words
  const handleMessageInput = (value) => {
    const words = value.trim().split(/\s+/);
    if (words.filter(Boolean).length <= 3) {
      setForm({ ...form, message: value });
    }
  };

  return (
    <div className="card form-card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => handleLetterInput("name", e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="text"
          placeholder="Surname"
          value={form.surname}
          onChange={(e) => handleLetterInput("surname", e.target.value)}
        />
        {errors.surname && <p className="error">{errors.surname}</p>}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          placeholder="Message (max 3 words)"
          value={form.message}
          onChange={(e) => handleMessageInput(e.target.value)}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
