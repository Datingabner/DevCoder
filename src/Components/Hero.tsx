import { ArrowRight, Code, Zap, Users, CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { BiLogoPostgresql, BiLogoSpringBoot } from 'react-icons/bi';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-yellow-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-lime-600' },
    { name: 'Spring Boot', icon: BiLogoSpringBoot, color: 'text-lime-600' },
    { name: 'PostgreSQL', icon: BiLogoPostgresql, color: 'text-sky-800' }
  ];

  const projects = [
    {
      title: 'E-Commerce Moderno',
      description: 'Plataforma completa de comercio electrónico',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Sistema Administrativo',
      description: 'Dashboard empresarial con analytics',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'API Microservicios',
      description: 'Arquitectura escalable en Java',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const processSteps = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Consulta Inicial',
      description: 'Analizamos tus necesidades y objetivos'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Desarrollo',
      description: 'Creamos tu solución con las mejores tecnologías'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Implementación',
      description: 'Desplegamos y optimizamos tu proyecto'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Soporte',
      description: 'Te acompañamos en el crecimiento continuo'
    }
  ];

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transformamos Ideas en
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Soluciones Digitales
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            En DevCoder creamos aplicaciones web, APIs y sistemas personalizados que impulsan el crecimiento de tu negocio
          </p>

          {/* Propuesta de Valor */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg animate-fade-in-delay-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">¿Por qué elegir DevCoder?</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Combinamos experiencia técnica con un enfoque centrado en resultados. Desarrollamos soluciones escalables,
              seguras y optimizadas que se adaptan perfectamente a las necesidades específicas de tu empresa.
            </p>
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <NavLink
              to={'/Servicios'}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Ver Servicios
            </NavLink>
          </div>
        </div>
      </div>

      {/* Proceso de Trabajo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestro Proceso de Trabajo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proyectos Anteriores */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tecnologías */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Tecnologías que Dominamos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white grid grid-rows-2 grid-cols-1 justify-items-center items-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
              <div className=" w-min text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                <tech.icon className={`h-13 w-auto ${tech.color} `} />
              </div>
              <p className="text-sm font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;