import { Globe, ShoppingCart, Settings, Smartphone, FileText, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  timeline: string;
  price: string;
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  timeline, 
  price,
  id
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

    <NavLink
      to={"/Servicios/Web/" + id}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
    >
      Ver Detalles
      <ArrowRight className="ml-2 h-4 w-4" />
    </NavLink>
  </div>
);



const WebDevelopment = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Sitios Web Informativos',
      description: 'Páginas web profesionales que comunican efectivamente tu marca, servicios y valores empresariales.',
      features: [
        'Diseño responsive y moderno',
        'Optimización SEO básica',
        'Formulario de contacto',
        'Integración con redes sociales',
        'Panel de administración',
        'Certificado SSL incluido'
      ],
      timeline: '2-3 semanas',
      price: '$800',
      id: 'sitios-informativos'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Sitios Web de Catálogo',
      description: 'Plataformas para mostrar productos o servicios con funcionalidades de búsqueda y filtrado avanzado.',
      features: [
        'Catálogo de productos/servicios',
        'Sistema de búsqueda y filtros',
        'Galería de imágenes optimizada',
        'Comparador de productos',
        'Sistema de categorías',
        'Exportación de catálogos'
      ],
      timeline: '3-4 semanas',
      price: '$1,200',
      id: 'sitios-catalogo'
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'E-Commerce',
      description: 'Tiendas online completas con pasarelas de pago, gestión de inventario y panel administrativo.',
      features: [
        'Carrito de compras avanzado',
        'Múltiples pasarelas de pago',
        'Gestión de inventario',
        'Sistema de cupones y descuentos',
        'Panel de administración completo',
        'Reportes de ventas y analytics'
      ],
      timeline: '6-8 semanas',
      price: '$2,500',
      id: 'ecommerce'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Aplicaciones Administrativas',
      description: 'Sistemas de gestión empresarial personalizados para optimizar procesos internos y aumentar productividad.',
      features: [
        'Dashboard con métricas clave',
        'Gestión de usuarios y roles',
        'Módulos personalizables',
        'Reportes y exportación de datos',
        'Integración con sistemas existentes',
        'Notificaciones en tiempo real'
      ],
      timeline: '8-12 semanas',
      price: '$3,500',
      id: 'apps-administrativas'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Aplicaciones Personalizadas',
      description: 'Desarrollo a medida según las necesidades específicas de tu negocio y objetivos particulares.',
      features: [
        'Análisis de requerimientos detallado',
        'Arquitectura personalizada',
        'Funcionalidades específicas',
        'Integración con APIs externas',
        'Escalabilidad garantizada',
        'Soporte técnico especializado'
      ],
      timeline: '10-16 semanas',
      price: '$5,000',
      id: 'apps-personalizadas'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Desarrollo Web</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creamos experiencias web modernas, funcionales y optimizadas que impulsan el crecimiento de tu negocio. 
            Desde sitios informativos hasta complejas aplicaciones empresariales.
          </p>
        </div>

        {/* Beneficios Generales */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">¿Por qué elegir nuestro desarrollo web?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Tecnología Moderna</h3>
              <p className="text-sm opacity-90">React, TypeScript, Node.js y las mejores prácticas del mercado</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Totalmente Personalizable</h3>
              <p className="text-sm opacity-90">Adaptamos cada proyecto a tus necesidades específicas</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Soporte Garantizado</h3>
              <p className="text-sm opacity-90">3 meses de soporte gratuito y mantenimiento disponible</p>
            </div>
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
              id={service.id}
            />
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-gray-600 mb-6">
            Nosotros lo sabemos, cada proyecto es único. Contáctanos para identificar tu necesidades y asi ofrecerte la mejor solución.
          </p>
          <NavLink
            to="/Contacto"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Solicitar Consulta Gratuita
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;