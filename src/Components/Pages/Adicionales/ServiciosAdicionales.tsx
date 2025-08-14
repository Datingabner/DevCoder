import React from 'react';
import { Users, Wrench, TrendingUp, BookOpen, Bot, ArrowRight, CheckCircle, Clock, Star, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  timeline: string;
  price: string;
  popular?: boolean;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  timeline, 
  price, 
  popular = false,
  onLearnMore 
}) => (
  <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 relative ${
    popular ? 'ring-2 ring-purple-500' : ''
  }`}>
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
          <Star className="h-4 w-4 mr-1" />
          Más Popular
        </span>
      </div>
    )}
    
    <div className="text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
    
    <div className="space-y-3 mb-6">
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="h-4 w-4 mr-2" />
        <span>{timeline}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <Award className="h-4 w-4 mr-2" />
        <span>{price}</span>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold text-gray-900 mb-2">Incluye:</h4>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>

    <button
      onClick={onLearnMore}
      className={`w-full py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center ${
        popular 
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
      }`}
    >
      Más Información
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  </div>
);



const AdditionalServices = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para la transformación digital de tu empresa y optimización de procesos.',
      features: [
        'Auditoría tecnológica completa',
        'Roadmap de transformación digital',
        'Análisis de arquitectura actual',
        'Recomendaciones de mejora',
        'Plan de migración detallado',
        'ROI y análisis de costos'
      ],
      timeline: 'Consulta inicial gratuita',
      price: 'Desde $150/hora',
      popular: false,
      id: 'consultoria'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Mantenimiento y Soporte',
      description: 'Soporte técnico continuo y actualizaciones para mantener tu sistema funcionando de manera óptima.',
      features: [
        'Monitoreo 24/7 de sistemas',
        'Actualizaciones de seguridad',
        'Backup automático diario',
        'Soporte técnico prioritario',
        'Reportes mensuales de rendimiento',
        'Hotfixes y parches urgentes'
      ],
      timeline: 'Planes mensuales',
      price: 'Desde $300/mes',
      popular: true,
      id: 'mantenimiento'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Optimización de Rendimiento',
      description: 'Mejoramos la velocidad, eficiencia y escalabilidad de tus aplicaciones y sistemas existentes.',
      features: [
        'Análisis de rendimiento profundo',
        'Optimización de base de datos',
        'Mejora de tiempos de carga',
        'Optimización de consultas SQL',
        'Implementación de cache',
        'Monitoreo de métricas clave'
      ],
      timeline: '2-4 semanas',
      price: 'Desde $1,200',
      popular: false,
      id: 'optimizacion'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Capacitación Técnica',
      description: 'Formación especializada para tu equipo en las tecnologías y sistemas implementados.',
      features: [
        'Sesiones de capacitación personalizadas',
        'Material didáctico incluido',
        'Ejercicios prácticos',
        'Certificados de participación',
        'Seguimiento post-capacitación',
        'Modalidad presencial o virtual'
      ],
      timeline: '1-2 semanas',
      price: 'Desde $800',
      popular: false,
      id: 'capacitacion'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Integración de IA',
      description: 'Próximamente: Soluciones de inteligencia artificial para automatizar procesos y mejorar la experiencia del usuario.',
      features: [
        'Chatbots inteligentes',
        'Análisis predictivo',
        'Procesamiento de lenguaje natural',
        'Automatización de procesos',
        'Machine Learning personalizado',
        'Integración con APIs de IA'
      ],
      timeline: 'Próximamente',
      price: 'En desarrollo',
      popular: false,
      id: 'integracion-ia'
    }
  ];

  const supportPlans = [
    {
      name: 'Básico',
      price: '$300',
      period: '/mes',
      features: [
        'Monitoreo básico',
        'Backup semanal',
        'Soporte por email',
        'Actualizaciones menores',
        'Reporte mensual'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Profesional',
      price: '$600',
      period: '/mes',
      features: [
        'Monitoreo 24/7',
        'Backup diario',
        'Soporte prioritario',
        'Actualizaciones completas',
        'Reporte semanal',
        'Hotfixes incluidos'
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,200',
      period: '/mes',
      features: [
        'Monitoreo avanzado',
        'Backup en tiempo real',
        'Soporte dedicado',
        'Todas las actualizaciones',
        'Reportes personalizados',
        'SLA garantizado',
        'Consultoría incluida'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Servicios Adicionales</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios complementarios que aseguran el éxito continuo de tu proyecto tecnológico. 
            Desde consultoría estratégica hasta soporte técnico especializado.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Garantizado</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Soporte Disponible</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Proyectos Mantenidos</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">2h</div>
            <div className="text-gray-600">Tiempo de Respuesta</div>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              timeline={service.timeline}
              price={service.price}
              popular={service.popular}
              onLearnMore={() => window.location.href = `/Servicios/Adicionales/${service.id}`}
            />
          ))}
        </div>

        {/* Planes de Soporte */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Planes de Mantenimiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recomendado
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <NavLink
                to={"/"}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transform hover:scale-105`}
                >
                  Seleccionar Plan
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas un servicio personalizado?</h2>
          <p className="mb-6 opacity-90">
            Cada negocio es único. Contáctanos para crear un plan de servicios adaptado a tus necesidades específicas.
          </p>
          <NavLink
            to="/Contacto"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Solicitar Consulta Personalizada
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;