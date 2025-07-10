'use client';

import { useState } from 'react';

export default function SignUp() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
    setForm({ nome: '', email: '', telefone: '' });
  };

  return (
    <section id="signup" className="py-8 sm:py-12 md:py-16 bg-cyan-400">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2 uppercase">CADASTRE-SE</h2>
        <p className="text-white text-center mb-6 sm:mb-8 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Nome */}
          <div className="flex items-center bg-white rounded shadow px-4 w-full lg:w-1/4 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-5 sm:size-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              required
            />
          </div>
          {/* Email */}
          <div className="flex items-center bg-white rounded shadow px-4 w-full lg:w-1/4 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-5 sm:size-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              required
            />
          </div>
          {/* Telefone */}
          <div className="flex items-center bg-white rounded shadow px-4 w-full lg:w-1/4 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-5 sm:size-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={form.telefone}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
              required
            />
          </div>
          {/* Enviar Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-12 px-6 sm:px-10 border-2 border-white text-white font-bold rounded bg-transparent hover:bg-cyan-500 transition-colors uppercase ml-0 lg:ml-2 cursor-pointer text-sm sm:text-base"
            style={{ minWidth: 120 }}
          >
            {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
          </button>
        </form>
        {isSubmitted && (
          <p className="text-white text-center mt-4 font-semibold text-sm sm:text-base">Cadastro enviado com sucesso!</p>
        )}
      </div>
    </section>
  );
} 