import React from 'react';
import { Server, Database, Zap, Code, ArrowRight, CheckCircle, Clock, Users, Shield, Cpu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  timeline: string;
  price: string;
  complexity: string;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  timeline, 
  price, 
  complexity,
  onLearnMore 
}) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6">
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
        <Users className="h-4 w-4 mr-2" />
        <span>Desde {price}</span>
      </div>
      <div className="flex items-center text-sm">
        <Cpu className="h-4 w-4 mr-2 text-purple-600" />
        <span className="text-purple-600 font-medium">{complexity}</span>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="font-semibold text-gray-900 mb-2">Características técnicas:</h4>
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
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
    >
      Ver Especificaciones
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  </div>
);


const ServiceDevelopment = () => {
  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'API REST de Java',
      description: 'APIs robustas y escalables desarrolladas con Spring Boot siguiendo las mejores prácticas de arquitectura REST.',
      features: [
        'Spring Boot + Spring Security',
        'Documentación automática con Swagger',
        'Validación de datos y manejo de errores',
        'Autenticación JWT',
        'Rate limiting y throttling',
        'Logging y monitoreo integrado'
      ],
      timeline: '4-6 semanas',
      price: '$2,000',
      complexity: 'Complejidad Media-Alta',
      id: 'java-api-rest'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'API SOAP de Java',
      description: 'Servicios web empresariales robustos para integración con sistemas legacy y aplicaciones corporativas.',
      features: [
        'JAX-WS y Apache CXF',
        'WSDL generado automáticamente',
        'WS-Security para autenticación',
        'Manejo de transacciones',
        'Compatibilidad con sistemas legacy',
        'Versionado de servicios'
      ],
      timeline: '5-7 semanas',
      price: '$2,500',
      complexity: 'Complejidad Alta',
      id: 'java-api-soap'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Integración de APIs Externas',
      description: 'Conectamos tu sistema con servicios de terceros de forma segura y eficiente, optimizando el flujo de datos.',
      features: [
        'Integración con múltiples APIs',
        'Manejo de diferentes protocolos',
        'Cache inteligente de respuestas',
        'Retry logic y circuit breakers',
        'Transformación de datos',
        'Monitoreo de APIs externas'
      ],
      timeline: '3-5 semanas',
      price: '$1,500',
      complexity: 'Complejidad Media',
      id: 'integracion-apis'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Microservicios',
      description: 'Arquitecturas distribuidas escalables que permiten desarrollo independiente y despliegue flexible de servicios.',
      features: [
        'Arquitectura de microservicios',
        'Service discovery y load balancing',
        'API Gateway centralizado',
        'Containerización con Docker',
        'Orquestación con Kubernetes',
        'Distributed tracing y logging'
      ],
      timeline: '8-12 semanas',
      price: '$4,000',
      complexity: 'Complejidad Muy Alta',
      id: 'microservicios'
    }
  ];

  const technologies = [
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'Java 17+', icon: '☕' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Apache Kafka', icon: '📨' },
    { name: 'Elasticsearch', icon: '🔍' }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Desarrollo de Servicios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construimos APIs robustas, microservicios escalables y soluciones backend de nivel empresarial 
            utilizando Java y las tecnologías más avanzadas del ecosistema.
          </p>
        </div>

        {/* Tecnologías */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Stack Tecnológico</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="text-xs font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Ventajas de nuestros servicios backend</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Seguridad Empresarial</h3>
              <p className="text-sm opacity-90">Implementamos los más altos estándares de seguridad y encriptación</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Alto Rendimiento</h3>
              <p className="text-sm opacity-90">Optimización para manejar miles de requests por segundo</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Código Limpio</h3>
              <p className="text-sm opacity-90">Seguimos principios SOLID y patrones de diseño establecidos</p>
            </div>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              timeline={service.timeline}
              price={service.price}
              complexity={service.complexity}
              onLearnMore={() => window.location.href = `/Servicios/DesarrolloAPIs#${service.id}`}
            />
          ))}
        </div>

        {/* Proceso de Desarrollo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestro Proceso de Desarrollo</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Análisis</h3>
              <p className="text-sm text-gray-600">Definimos arquitectura y especificaciones técnicas</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Desarrollo</h3>
              <p className="text-sm text-gray-600">Implementación con metodologías ágiles</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-sm text-gray-600">Pruebas unitarias, integración y carga</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Deploy</h3>
              <p className="text-sm text-gray-600">Despliegue y monitoreo en producción</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas una arquitectura personalizada?</h2>
          <p className="text-gray-600 mb-6">
            Nuestros arquitectos de software pueden diseñar la solución perfecta para tu caso de uso específico.
          </p>
          <NavLink
            to="/Contacto"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Consulta de Arquitectura Gratuita
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceDevelopment;