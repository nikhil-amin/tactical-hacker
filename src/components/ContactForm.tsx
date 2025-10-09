import { useState, ChangeEvent, FormEvent } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#161b22] p-8 rounded-lg max-w-md mx-auto">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full mb-3 p-2 rounded bg-[#0d1117] text-white border border-[#00bfa6]" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required type="email" className="w-full mb-3 p-2 rounded bg-[#0d1117] text-white border border-[#00bfa6]" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required className="w-full mb-3 p-2 rounded bg-[#0d1117] text-white border border-[#00bfa6]" />
      <button type="submit" className="bg-[#00bfa6] text-[#0d1117] px-6 py-2 rounded font-semibold hover:bg-cyan-400 transition w-full">Send</button>
      {submitted && <div className="text-[#00bfa6] mt-2">Message sent! (mock)</div>}
    </form>
  );
}

export default ContactForm;