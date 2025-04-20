
interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="23" fill="white" stroke="hsl(var(--primary))" strokeWidth="2" />
        <path
          d="M15 25C15 25 19 15 25 15C31 15 35 25 35 25C35 25 31 35 25 35C19 35 15 25 15 25Z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="25" r="3" fill="hsl(var(--primary))" />
        <path
          d="M14 34L36 16"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
