import React from 'react';
import { CheckCircle, Users, Layers, Award } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a SF Comunicação?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Não somos apenas uma agência; somos parceiros estratégicos do seu negócio. 
              Nosso foco é claro: entregar resultados mensuráveis através de uma comunicação 
              informativa, profissional e vibrante.
            </p>
            
            <div className="space-y-6">
              {[
                "Experiência comprovada em comunicação B2B e digital.",
                "Estratégias personalizadas para pequenas e médias empresas.",
                "Atendimento ágil e focado em Sapucaia do Sul e todo Brasil."
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-cyan-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-cyan-600 rounded-full opacity-20"></div>
             <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-600 rounded-full opacity-20"></div>

            <h3 className="text-2xl font-bold mb-8 relative z-10">Nossa Presença Digital</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              <div className="flex flex-col p-4 bg-gray-800 rounded-xl border border-gray-700">
                <Layers className="h-8 w-8 text-cyan-400 mb-2" />
                <span className="text-4xl font-bold">314+</span>
                <span className="text-gray-400 text-sm mt-1">Posts Estratégicos</span>
              </div>
              
              <div className="flex flex-col p-4 bg-gray-800 rounded-xl border border-gray-700">
                <Users className="h-8 w-8 text-cyan-400 mb-2" />
                <span className="text-4xl font-bold">240+</span>
                <span className="text-gray-400 text-sm mt-1">Seguidores Ativos</span>
              </div>

              <div className="flex flex-col p-4 bg-gray-800 rounded-xl border border-gray-700 sm:col-span-2">
                <Award className="h-8 w-8 text-purple-400 mb-2" />
                <span className="text-lg font-semibold">Compromisso com Qualidade</span>
                <span className="text-gray-400 text-sm mt-1">Foco total no crescimento da sua marca.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;