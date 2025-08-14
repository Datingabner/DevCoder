import { ArrowLeft, CheckCircle, Clock, Users, Star, Phone, Mail, Wrench, Shield, TrendingUp, AlertTriangle } from 'lucide-react';
import { NavLink } from 'react-router-dom';



const MantenimientoSoporte=()=> {
  const features = [
    'Monitoreo 24/7 de sistemas y aplicaciones',
    'Backup automático diario con retención',
    'Actualizaciones de seguridad prioritarias',
    'Soporte técnico especializado',
    'Reportes mensuales de rendimiento',
    'Hotfixes y parches de emergencia',
    'Optimización continua de rendimiento',
    'Gestión de certificados SSL',
    'Monitoreo de uptime y disponibilidad',
    'Análisis de logs y detección de errores',
    'Escalado automático de recursos',
    'Gestión de base de datos',
    'Actualizaciones de dependencias',
    'Testing de regresión automático',
    'Documentación técnica actualizada',
    'Capacitación del equipo interno'
  ];

  const supportPlans = [
    {
      name: 'Básico',
      price: '$300',
      period: '/mes',
      description: 'Ideal para aplicaciones pequeñas',
      features: [
        'Monitoreo básico de uptime',
        'Backup semanal automático',
        'Soporte por email (48h)',
        'Actualizaciones menores',
        'Reporte mensual básico',
        '2 horas de soporte incluidas'
      ],
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      name: 'Profesional',
      price: '$600',
      period: '/mes',
      description: 'Para aplicaciones en producción',
      features: [
        'Monitoreo 24/7 completo',
        'Backup diario automático',
        'Soporte prioritario (4h)',
        'Todas las actualizaciones',
        'Reportes semanales detallados',
        'Hotfixes de emergencia',
        '8 horas de soporte incluidas',
        'Optimización mensual'
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,200',
      period: '/mes',
      description: 'Para aplicaciones críticas',
      features: [
        'Monitoreo avanzado con alertas',
        'Backup en tiempo real',
        'Soporte dedicado (1h)',
        'Actualizaciones inmediatas',
        'Reportes personalizados',
        'SLA 99.9% garantizado',
        'Horas de soporte ilimitadas',
        'Consultoría técnica incluida',
        'Escalado automático',
        'Disaster recovery'
      ],
      color: 'from-green-500 to-green-600',
      popular: false
    }
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Seguridad Continua',
      description: 'Actualizaciones de seguridad, parches y monitoreo de vulnerabilidades'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Optimización de Rendimiento',
      description: 'Análisis continuo y mejoras para mantener el mejor rendimiento'
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: 'Respuesta a Incidentes',
      description: 'Resolución rápida de problemas con tiempos de respuesta garantizados'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Mantenimiento Preventivo',
      description: 'Actualizaciones proactivas para prevenir problemas antes de que ocurran'
    }
  ];

  const process = [
    'Auditoría inicial del sistema actual',
    'Configuración de monitoreo y alertas',
    'Establecimiento de rutinas de backup',
    'Implementación de métricas de rendimiento',
    'Configuración de canales de comunicación',
    'Documentación de procedimientos',
    'Inicio del monitoreo 24/7',
    'Reportes regulares y optimizaciones'
  ];

  const technologies = ['Prometheus', 'Grafana', 'Docker', 'Kubernetes', 'AWS CloudWatch', 'New Relic', 'Datadog'];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón Volver */}
        <NavLink
        to={'/Servicios/Adicionales'}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a Servicios Adicionales
        </NavLink>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Wrench className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Mantenimiento y Soporte</h1>
              </div>
              <p className="text-xl text-blue-600 mb-4">Tu aplicación siempre funcionando</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ofrecemos servicios completos de mantenimiento y soporte técnico para mantener tus aplicaciones 
                funcionando de manera óptima. Monitoreo 24/7, actualizaciones de seguridad y soporte especializado.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Desde $300/mes</span>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-medium">Soporte 24/7</span>
                </div>
              </div>

              <div className="flex gap-4">
                <NavLink
                  to={"/Contacto"}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Solicitar Plan
                </NavLink>
                <NavLink
                  to={"/Contacto"}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Consulta Gratuita
                </NavLink>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mantenimiento y soporte técnico"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
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
                      Más Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
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
                  to={"/Contacto"}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transform hover:scale-105`}
                >
                  Seleccionar Plan
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Servicios Incluidos */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Servicios de Mantenimiento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                      <div className="text-blue-600">{service.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funcionalidades Incluidas */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué incluye el mantenimiento?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proceso de Implementación */}
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

            {/* Herramientas de Monitoreo */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Herramientas de Monitoreo</h2>
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
                "Desde que contratamos el mantenimiento, no hemos tenido ni un solo problema. El monitoreo 24/7 nos da total tranquilidad."
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">Patricia López</div>
                <div className="text-sm text-gray-500">Gerente IT, RetailMax</div>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Nuestros Resultados</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Uptime promedio:</span>
                  <span className="font-bold">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>Tiempo de respuesta:</span>
                  <span className="font-bold">&lt;2 horas</span>
                </div>
                <div className="flex justify-between">
                  <span>Problemas prevenidos:</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Clientes satisfechos:</span>
                  <span className="font-bold">100%</span>
                </div>
              </div>
            </div>

            {/* Servicios de Emergencia */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios de Emergencia</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Respuesta inmediata 24/7
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Hotfixes de emergencia
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Recuperación de desastres
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  Escalado de recursos urgente
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">¿Tu aplicación necesita cuidado?</h3>
              <p className="mb-4 opacity-90">
                Mantén tu sistema funcionando perfectamente con nuestro soporte especializado.
              </p>
              <NavLink
                to={"/Contacto"}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Evaluar mi Sistema
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MantenimientoSoporte;