import React, {type ReactNode } from 'react';
type BackgroundVariant = 
  | 'default' 
  | 'light' 
  | 'dark' 
  | 'blue' 
  | 'gradient';

interface MainBackgroundProps {
  children: ReactNode;
  variant?: BackgroundVariant;
  withDecorations?: boolean;
  withWaves?: boolean;
}

const MainBackground: React.FC<MainBackgroundProps> = ({
  children,
  variant = 'default',
  withDecorations = true,
  withWaves = true
}) => {
  // Configuración de variantes de fondo
  const variants: Record<BackgroundVariant, string> = {
    default: 'bg-gradient-to-br from-gray-50 to-white',
    light: 'bg-white',
    dark: 'bg-gradient-to-br from-gray-900 to-gray-800 text-white',
    blue: 'bg-gradient-to-br from-blue-50 to-white',
    gradient: 'bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200'
  };

  // Determina si mostrar efectos decorativos basado en variant y props
  const showDecorations = withDecorations && (variant === 'default' || variant === 'gradient');
  const showWaves = withWaves && (variant === 'default' || variant === 'blue');

  return (
    <div className={`relative bg-transparent w-full min-h-screen ${variants[variant]}`}>
      {/* Efectos decorativos opcionales */}
      {showDecorations && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-blob animation-delay-4000"></div>
        </>
      )}

      {/* Contenido principal */}
      <div className="relative bg-transparent z-10">
        {children}
      </div>

      {/* Efecto de ondas opcional para la parte inferior */}
      {showWaves && (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg 
            className="w-full h-24"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              className="fill-current text-blue-400"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              className="fill-current text-blue-200"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              className="fill-current text-blue-500"
            ></path>
          </svg>
        </div>
      )}

      {/* Estilos de animación */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default MainBackground;