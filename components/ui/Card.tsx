import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  href?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  title,
  subtitle,
  image,
  href,
  className = '',
  hover = true,
}: CardProps) {
  const hoverClass = hover ? 'cursor-pointer' : '';

  const content = (
    <div className={`card ${hoverClass} ${className}`}>
      {image && (
        <div className="relative h-48 -mx-6 -mt-6 mb-4 rounded-t-lg overflow-hidden">
          <img
            src={image}
            alt={title || ''}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      )}

      {subtitle && (
        <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
      )}

      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
