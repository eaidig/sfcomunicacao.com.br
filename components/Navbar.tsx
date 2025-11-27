import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/95 text-white border-b border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Globe className="h-8 w-8 text-cyan-500" />
              <span className="font-bold text-xl tracking-wider">SF COMUNICAÇÃO</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</a>
              <a href="#services" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Soluções</a>
              <a href="#about" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre</a>
              <a href="#contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                Solicite Orçamento
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-400">Início</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400">Soluções</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400">Sobre</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-cyan-600 text-white hover:bg-cyan-500">
              Solicite Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;