import React from 'react';
import { Mic2, Share2, TrendingUp, PenTool, Layout } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: 'assessoria',
    title: 'Assessoria de Imprensa',
    description: 'Aumente sua autoridade e visibilidade na mídia espontânea com estratégias que colocam sua marca em destaque.',
    iconName: 'Mic2'
  },
  {
    id: 'redes',
    title: 'Gerenciamento de Redes Sociais',
    description: 'Gestão completa do seu perfil para gerar conexão real com seguidores e transformar likes em clientes.',
    iconName: 'Share2'
  },
  {
    id: 'planejamento',
    title: 'Planejamento Estratégico',
    description: 'Pare de atirar no escuro. Criamos um roteiro detalhado focado nos seus objetivos comerciais e KPIs.',
    iconName: 'TrendingUp'
  },
  {
    id: 'conteudo',
    title: 'Geração de Conteúdo',
    description: 'Textos persuasivos e relevantes que educam seu mercado e conduzem o cliente pela jornada de compra.',
    iconName: 'PenTool'
  },
  {
    id: 'grafico',
    title: 'Materiais Gráficos',
    description: 'Design profissional que transmite credibilidade e fortalece a identidade visual da sua marca.',
    iconName: 'Layout'
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Mic2, Share2, TrendingUp, PenTool, Layout
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas para o Digital
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Da estratégia à execução, oferecemos tudo o que sua marca precisa para se destacar no mercado competitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = IconMap[service.iconName];
            return (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;