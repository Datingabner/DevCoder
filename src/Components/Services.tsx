import { Globe, Server, Wrench, Code, Database, Smartphone, ShoppingCart, Settings, Zap, Users, TrendingUp, BookOpen } from 'lucide-react';
import { LuCircleArrowRight } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const Services = () => {
  const webServices = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Páginas Web Informativas',
      description: 'Sitios web profesionales que comunican efectivamente tu marca y servicios.'
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'E-Commerce',
      description: 'Tiendas online completas con pasarelas de pago y gestión de inventario.'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Aplicaciones Administrativas',
      description: 'Sistemas de gestión empresarial personalizados para optimizar procesos.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Aplicaciones Personalizadas',
      description: 'Desarrollo a medida según las necesidades específicas de tu negocio.'
    }
  ];

  const apiServices = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Java API Rest',
      description: 'APIs robustas y escalables desarrolladas con Spring Boot y mejores prácticas.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Java API Soap',
      description: 'Servicios web empresariales para integración con sistemas legacy.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Integración de APIs Externas',
      description: 'Conectamos tu sistema con servicios de terceros de forma segura.'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Microservicios',
      description: 'Arquitecturas distribuidas para aplicaciones de alta disponibilidad.'
    }
  ];

  const additionalServices = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para la transformación digital de tu empresa.'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Mantenimiento y Soporte',
      description: 'Soporte técnico continuo y actualizaciones para mantener tu sistema óptimo.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Optimización de Rendimiento',
      description: 'Mejoramos la velocidad y eficiencia de tus aplicaciones existentes.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Capacitación Técnica',
      description: 'Formación para tu equipo en las tecnologías implementadas.'
    }
  ];

  const ServiceCard = ({ service, index }: { service: any, index: number }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
      <div className="text-blue-600 mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  );

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar el crecimiento de tu negocio
          </p>
        </div>

        {/* Desarrollo Web */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className='flex text-center justify-center mb-2 '>
              <div className='flex border-2 border-white border-b-gray-300 hover:border-2 hover:border-t-cyan-300 hover:border-r-blue-400 hover:border-l-blue-400 hover:border-b-blue-500 hover:bg-gradient-to-r hover:from-cyan-200/50 hover:to-blue-300/80 hover:backdrop-blur-sm shadow-lg 
               hover:shadow-blue-500 p-1 pl-3 pr-3 transition-all duration-100 rounded-lg'>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Desarrollo Web</h3>
              <NavLink to={"/Servicios/Web"} className='h-10 w-15 rounded-lg mx-1 '>
                <LuCircleArrowRight className='text-blue-700 ml-4 h-10 w-auto hover:scale-110' />
              </NavLink>
              </div>
            </div>
            <p className="text-lg text-gray-600">Creamos experiencias web modernas y funcionales</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Desarrollo de Servicios */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className='flex text-center justify-center mb-2 '>
              <div className='flex border-2 border-transparent border-b-gray-300 hover:border-2 hover:border-t-cyan-300 hover:border-r-blue-400 hover:border-l-blue-400 hover:border-b-blue-500 hover:bg-gradient-to-r hover:from-cyan-200/50 hover:to-blue-300/80 hover:backdrop-blur-sm shadow-lg 
               hover:shadow-blue-500 p-1 pl-3 pr-3 transition-all duration-100 rounded-lg'>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Desarrollo de Servicios</h3>
              <NavLink to={"/Servicios/Apis"} className='h-10 w-15 rounded-lg mx-1 '>
                <LuCircleArrowRight className='text-blue-700 ml-4 h-10 w-auto hover:scale-110' />
              </NavLink>
              </div>
            </div>
            <p className="text-lg text-gray-600">APIs y microservicios robustos para tu infraestructura</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Servicios Adicionales */}
        <div>
          <div className="text-center mb-12">
            <div className='flex text-center justify-center mb-2 '>
              <div className='flex border-2 border-white border-b-gray-300 hover:border-2 hover:border-t-cyan-300 hover:border-r-blue-400 hover:border-l-blue-400 hover:border-b-blue-500 hover:bg-gradient-to-r hover:from-cyan-200/50 hover:to-blue-300/80 hover:backdrop-blur-sm shadow-lg 
               hover:shadow-blue-500 p-1 pl-3 pr-3 transition-all duration-100 rounded-lg'>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Servicios Adicionales</h3>
              <NavLink to={"/Servicios/Adicionales"} className='h-10 w-15 rounded-lg mx-1 '>
                <LuCircleArrowRight className='text-blue-700 ml-4 h-10 w-auto hover:scale-110' />
              </NavLink>
              </div>
            </div>
            <p className="text-lg text-gray-600">Soporte integral para el éxito de tu proyecto</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Próximamente */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">🤖 Próximamente: Integración de IA</h3>
            <p className="text-lg opacity-90">
              Estamos trabajando en soluciones de inteligencia artificial para potenciar aún más tus proyectos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;