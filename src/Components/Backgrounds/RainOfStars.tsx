import React, { type ReactNode, useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface StarryBackgroundProps {
  children: ReactNode;
  starCount?: number;
  starColor?: string;
  baseOpacity?: number;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({
  children,
  starCount = 100,
  starColor = 'slate-900',
  baseOpacity = 0.7
}) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const newStars: Star[] = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 5.5 + 5.5,
      opacity: Math.random() * baseOpacity + 0.1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }));

    setStars(newStars);
  }, [dimensions, starCount, baseOpacity]);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Estrellas */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-${starColor}`}
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite alternate`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {/* Contenido */}
      <div className="relative z-10">{children}</div>

      {/* Animación */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: ${baseOpacity * 0.5}; }
          100% { opacity: ${baseOpacity}; }
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;