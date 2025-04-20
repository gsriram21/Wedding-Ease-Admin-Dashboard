
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/fbd00771-b6db-4f65-b93d-b3b20da2632f.png" 
        alt="Wedding Ease Logo" 
        style={{ width: size, height: size }}
        className="object-contain"
      />
    </div>
  );
}
