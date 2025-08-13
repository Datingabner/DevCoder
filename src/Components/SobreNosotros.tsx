import { Target, Eye, Heart, Award, Users, Code2 } from 'lucide-react';

const SobreNosotros = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Orientados a Resultados',
      description: 'Cada línea de código tiene un propósito: hacer crecer tu negocio.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Pasión por la Tecnología',
      description: 'Amamos lo que hacemos y se refleja en la calidad de nuestro trabajo.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Colaboración Estrecha',
      description: 'Trabajamos contigo como un equipo, no solo como proveedores.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excelencia Técnica',
      description: 'Utilizamos las mejores prácticas y tecnologías más actuales.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Proyectos Completados' },
    { number: '3+', label: 'Años de Experiencia' },
    { number: '100%', label: 'Clientes Satisfechos' },
    { number: '24/7', label: 'Soporte Disponible' }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre DevCoder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo apasionado por crear soluciones tecnológicas que transforman negocios
          </p>
        </div>

        {/* Historia y Trayectoria */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Nuestra Historia</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              DevCoder nació de la visión de democratizar el acceso a tecnología de calidad empresarial. 
              Comenzamos como un pequeño equipo de desarrolladores apasionados y hemos crecido hasta 
              convertirnos en un socio tecnológico confiable para empresas de todos los tamaños.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestra experiencia abarca desde startups innovadoras hasta empresas establecidas que 
              buscan modernizar sus sistemas. Cada proyecto es una oportunidad para aplicar nuestra 
              experiencia y crear soluciones que realmente marquen la diferencia.
            </p>
            <div className="flex items-center space-x-4">
              <Code2 className="h-12 w-12 text-blue-600" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Tecnología de Vanguardia</h4>
                <p className="text-gray-600">Siempre actualizados con las últimas tendencias</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Equipo DevCoder trabajando"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visión y Valores */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ser el socio tecnológico preferido para empresas que buscan innovar y crecer a través de 
              soluciones digitales excepcionales, construyendo un futuro donde la tecnología sea 
              accesible y transformadora para todos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Elementos que humanizan la marca */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué trabajar con nosotros?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Transparencia Total</h4>
              <p className="text-gray-600">
                Mantenemos comunicación constante y clara sobre el progreso de tu proyecto. 
                Sin sorpresas, sin costos ocultos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Equipo Dedicado</h4>
              <p className="text-gray-600">
                Cada proyecto tiene un equipo asignado que conoce tu negocio y se compromete 
                con tu éxito a largo plazo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Garantía de Calidad</h4>
              <p className="text-gray-600">
                Respaldamos nuestro trabajo con garantías sólidas y soporte post-lanzamiento 
                para asegurar tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;