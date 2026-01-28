import { ReactNode } from 'react';

interface Section5050Props {
  title?: string;
  subtitle?: string;
  content: ReactNode;
  image: ReactNode;
  reversed?: boolean;
  id?: string;
  className?: string;
}

export default function Section5050({
  title,
  subtitle,
  content,
  image,
  reversed = false,
  id,
  className = '',
}: Section5050Props) {
  const layoutClass = reversed ? 'layout-50-50-reversed' : 'layout-50-50';

  return (
    <section
      id={id}
      className={`space-section ${className}`}
    >
      <div className="container">
        {title && (
          <div className="mb-12">
            {subtitle && (
              <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            <h2>{title}</h2>
          </div>
        )}

        <div className={layoutClass}>
          {/* Content Column */}
          <div className="flex flex-col justify-center">
            {content}
          </div>

          {/* Image Column */}
          <div className="flex items-center justify-center">
            {image}
          </div>
        </div>
      </div>
    </section>
  );
}
