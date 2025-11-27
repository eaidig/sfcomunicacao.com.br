import React, { useState } from 'react';
import { Send, Phone, Mail, Sparkles, Loader2 } from 'lucide-react';
import { ContactFormState, FormStatus } from '../types';
import { generateDraftMessage } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    interest: 'Planejamento Estratégico',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleAiDraft = async () => {
    if (!formState.name) {
      alert("Por favor, preencha seu nome primeiro.");
      return;
    }
    
    setStatus(FormStatus.LOADING_AI);
    try {
      const draftedMessage = await generateDraftMessage(formState.name, formState.interest);
      setFormState(prev => ({ ...prev, message: draftedMessage }));
    } catch (e) {
      console.error(e);
    } finally {
      setStatus(FormStatus.IDLE);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    // Simulate submission
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormState({ name: '', email: '', phone: '', interest: 'Planejamento Estratégico', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conectar Ideias?</h2>
          <p className="text-gray-400 text-lg">
            Preencha o formulário abaixo para solicitar um orçamento ou tirar dúvidas. 
            Nossa equipe responderá o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-900/50 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Telefone/WhatsApp</h4>
                <p className="text-gray-400 mt-1">+55 51 99589-6326</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-900/50 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">E-mail</h4>
                <p className="text-gray-400 mt-1">sfcomunicacao3@gmail.com</p>
              </div>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-300 italic">
                "A SF Comunicação transformou nossa visão em realidade digital."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
            {status === FormStatus.SUCCESS ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mensagem Enviada!</h3>
                <p className="text-gray-600 mt-2">Obrigado pelo contato. Retornaremos em breve.</p>
                <button 
                  onClick={() => setStatus(FormStatus.IDLE)}
                  className="mt-6 text-cyan-600 font-semibold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interesse Principal</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    >
                      <option>Assessoria de Imprensa</option>
                      <option>Gestão de Redes Sociais</option>
                      <option>Planejamento Estratégico</option>
                      <option>Criação de Conteúdo</option>
                      <option>Materiais Gráficos</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                    <button
                      type="button"
                      onClick={handleAiDraft}
                      disabled={status === FormStatus.LOADING_AI}
                      className="text-xs flex items-center gap-1 text-purple-600 hover:text-purple-800 font-semibold transition-colors disabled:opacity-50"
                    >
                      {status === FormStatus.LOADING_AI ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                      Escrever com IA
                    </button>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="Conte um pouco sobre sua necessidade..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === FormStatus.SUBMITTING}
                  className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2"
                >
                  {status === FormStatus.SUBMITTING ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      Solicite um Orçamento <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;