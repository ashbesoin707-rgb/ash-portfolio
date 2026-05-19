import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
}

export default function Section({ children, id, className = "", title }: SectionProps) {
  return (
    <section id={id} className={`relative border-b border-dashed border-gray-200 z-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32 relative">
        {title && (
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-widest">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

