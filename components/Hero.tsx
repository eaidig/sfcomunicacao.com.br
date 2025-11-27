import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-black text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-cyan-400 font-bold tracking-wide uppercase text-sm mb-4">
            SF Comunicação
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            Conectando Ideias para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Sucesso da Sua Marca</span>.
          </h1>
          <p className="mt-4 text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Transforme a presença digital da sua empresa com estratégias que geram resultados reais, economizam seu tempo e engajam seu público alvo de verdade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-black bg-cyan-500 hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-lg font-medium rounded-full text-white hover:bg-gray-900 transition-colors">
              Conhecer Soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;