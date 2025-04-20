
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      <img 
        src="/lovable-uploads/fbd00771-b6db-4f65-b93d-b3b20da2632f.png" 
        alt="Admin Portal Logo" 
        className="w-full max-h-40 object-contain"
      />
      <span className="text-xs font-medium text-primary mt-2">Admin Portal</span>
    </div>
  );
}
