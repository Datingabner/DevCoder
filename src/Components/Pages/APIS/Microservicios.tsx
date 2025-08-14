import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, Code, Cpu,Box,  Network, GitBranch, Cloud } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Microservicios = () => {
  const features = [
    'Arquitectura de microservicios escalable',
    'Service discovery (Eureka, Consul)',
    'Load balancing inteligente',
    'API Gateway (Spring Cloud Gateway)',
    'Containerización con Docker optimizada',
    'Orquestación con Kubernetes',
    'Distributed tracing (Jaeger/Zipkin)',
    'Logging centralizado (ELK Stack)',
    'Circuit breakers (Resilience4j)',
    'Configuración centralizada',
    'Autenticación distribuida (OAuth2)',
    'Event sourcing (Kafka, RabbitMQ)',
    'CQRS implementado',
    'Pruebas de contracto (Pact)',
    'CI/CD pipeline multietapa',
    'Autoescalado configurado'
  ];

  const process = [
    'Workshop de diseño de arquitectura',
    'Definición de bounded contexts',
    'Configuración de infraestructura cloud',
    'Implementación de servicios base',
    'Desarrollo de core services',
    'Configuración de API Gateway',
    'Implementación de comunicación asíncrona',
    'Configuración de service mesh',
    'Implementación de observabilidad',
    'Pruebas de resiliencia y carga',
    'Despliegue en staging',
    'Optimización de recursos',
    'Documentación técnica',
    'Capacitación del equipo'
  ];

  const technologies = ['Java/Spring Boot', 'Kubernetes', 'Docker', 'Kafka', 'Prometheus', 'Grafana', 'Istio', 'Helm', 'AWS/GCP/Azure'];

  const architectureBenefits = [
    'Escalabilidad independiente por servicio',
    'Despliegues sin downtime',
    'Tolerancia a fallos mejorada',
    'Tecnología heterogénea',
    'Actualizaciones graduales',
    'Mejor aislamiento de fallos'
  ];

  const architectureFeatures = [
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: 'Arquitectura Distribuida',
      description: 'Servicios independientes con responsabilidades bien definidas'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Native',
      description: 'Diseñada para escalar en entornos cloud'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Alta Disponibilidad',
      description: 'Replicación y auto-recuperación de servicios'
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Comunicación Flexible',
      description: 'Síncrona (REST/gRPC) y asíncrona (Eventos)'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón Volver */}
        <NavLink
          to={"/Servicios/Apis"}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a Desarrollo de Servicios
        </NavLink>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Box className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Microservicios</h1>
              </div>
              <p className="text-xl text-blue-600 mb-4">Arquitecturas distribuidas escalables</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Diseñamos e implementamos arquitecturas de microservicios que permiten escalar, actualizar y mantener 
                componentes de forma independiente, acelerando tu time-to-market y mejorando la resiliencia de tus sistemas.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Desde $4,000</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">8-12 semanas</span>
                </div>
                <div className="flex items-center bg-red-50 px-4 py-2 rounded-lg">
                  <Code className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-red-800 font-medium">Complejidad Muy Alta</span>
                </div>
              </div>

              <div className="flex gap-4">
                <NavLink
                  to={"/Contacto"}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Solicitar Cotización
                </NavLink>
                <NavLink
                  to={"/Contacto"}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Consulta Arquitectónica
                </NavLink>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Arquitectura de microservicios"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Beneficios de Arquitectura */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios Clave</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {architectureBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Características de Arquitectura */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Arquitectura de Microservicios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {architectureFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <div className="text-blue-600">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funcionalidades Técnicas */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Componentes Incluidos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proceso de Desarrollo */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Implementación</h2>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tecnologías */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Stack Tecnológico</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Testimonial */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "La migración a microservicios que realizaron nos permitió reducir tiempos de despliegue de 2 horas a 15 minutos y escalar nuestra plataforma para manejar 10x más tráfico."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                <div className="text-sm text-gray-500">CTO, FinTech ScaleUp</div>
              </div>
            </div>

            {/* Esquema de Comunicación */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Patrones de Comunicación</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-purple-300" />
                  <span>Síncrona (HTTP/REST, gRPC)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-purple-300" />
                  <span>Asíncrona (Eventos/Mensajes)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-purple-300" />
                  <span>Saga Pattern para transacciones</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-purple-300" />
                  <span>CQRS para consultas complejas</span>
                </div>
              </div>
            </div>

            {/* Servicios Adicionales */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios Adicionales</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Migración monolito → MS</span>
                  <span className="font-medium text-gray-900">+$5,000</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Service Mesh (Istio)</span>
                  <span className="font-medium text-gray-900">+$3,500</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Multi-cloud setup</span>
                  <span className="font-medium text-gray-900">+$4,000</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">SRE y monitoring 24/7</span>
                  <span className="font-medium text-gray-900">+$2,500/mes</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Necesitas escalar tu arquitectura?</h3>
              <p className="mb-4 opacity-90">
                Agenda una consulta de arquitectura con nuestros expertos.
              </p>
              <NavLink
                to={"/Contacto"}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Consultoría de Arquitectura
              </NavLink>
            </div>

            {/* Garantías */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Nuestros Compromisos</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Documentación arquitectónica completa
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Entrenamiento para tu equipo DevOps
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Ambiente de staging idéntico a producción
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Plan de escalabilidad a 3 años
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Soporte prioritario por 6 meses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microservicios;