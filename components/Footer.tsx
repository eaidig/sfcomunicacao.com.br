import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-white font-bold text-lg">SF COMUNICAÇÃO</span>
          <p className="text-xs mt-1">Conectando Ideias.</p>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} SF Comunicação. Todos os direitos reservados.</p>
          <p className="mt-1">Sapucaia do Sul, RS - Brasil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;