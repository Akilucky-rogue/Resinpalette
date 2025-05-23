import React from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-2xl md:text-3xl font-medium text-neutral-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-neutral-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;