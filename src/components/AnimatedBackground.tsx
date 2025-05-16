
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    // Create sun rays animation
    const interval = setInterval(() => {
      if (svgRef.current) {
        const ray = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        
        // Random position for ray
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 60;
        
        ray.setAttribute('cx', `${randomX}%`);
        ray.setAttribute('cy', `${randomY}%`);
        ray.setAttribute('r', '0');
        ray.setAttribute('fill', 'rgba(250, 204, 21, 0.3)');
        ray.setAttribute('class', 'animate-ray');
        
        svgRef.current.appendChild(ray);
        
        // Grow the circle
        let radius = 0;
        const grow = setInterval(() => {
          radius += 0.5;
          ray.setAttribute('r', radius.toString());
          
          if (radius >= 50) {
            clearInterval(grow);
            ray.remove();
          }
        }, 50);
        
        // Remove the ray after animation completes
        setTimeout(() => {
          ray.remove();
          clearInterval(grow);
        }, 3000);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-blue-100"></div>
      
      {/* Sun rays layer */}
      <svg ref={svgRef} className="absolute inset-0 w-full h-full">
        {/* This is where dynamically created rays will appear */}
      </svg>
      
      {/* Sun */}
      <div className="absolute top-[10%] right-[10%] w-32 h-32 rounded-full bg-solar-yellow opacity-80 blur-md animate-pulse-grow"></div>
      
      {/* Clouds */}
      <div className="absolute top-[15%] left-[10%] w-40 h-14 bg-white rounded-full opacity-80 shadow-lg animate-float"></div>
      <div className="absolute top-[20%] left-[5%] w-32 h-12 bg-white rounded-full opacity-70 shadow-lg animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-[25%] left-[15%] w-24 h-10 bg-white rounded-full opacity-60 shadow-lg animate-float" style={{ animationDelay: '-1s' }}></div>
      
      <div className="absolute top-[5%] right-[30%] w-48 h-16 bg-white rounded-full opacity-80 shadow-lg animate-float" style={{ animationDelay: '-1.5s' }}></div>
      <div className="absolute top-[12%] right-[35%] w-36 h-14 bg-white rounded-full opacity-70 shadow-lg animate-float" style={{ animationDelay: '-3.5s' }}></div>
      
      {/* Abstract Solar Panel */}
      <div className="hidden lg:block absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-solar-blue bg-opacity-20 rounded-tl-[50%] border-l-8 border-t-8 border-solar-blue border-opacity-30 transform rotate-12"></div>
    </div>
  );
};

export default AnimatedBackground;
