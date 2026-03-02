import React from 'react';

/**
 * RETOOL DESIGN FOUNDATION - REACT + TAILWIND COMPONENTS
 * These components are built upon the tokens and CSS structure extracted from Retool.com.
 * Ideal for a SaaS / Software Tech Startup.
 */

// 1. Color Palette defined for Tailwind Config (tailwind.config.js extension)
/*
  theme: {
    extend: {
      colors: {
        retool: {
          bg: '#F7F8F4',
          bgSecondary: '#E9EBDF',
          textMain: '#151515',
          textSub: '#3F403D',
          border: '#CBCCC4',
          primary: '#1B2E44', // Dark brand blue
          accentBlue: '#2D4C71',
          accentGreen: '#0E352C',
        }
      },
      fontFamily: {
        sans: ['Saans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      }
    }
  }
*/

// --- HEADINGS ---
export const HeroTitle = ({ children }: { children: React.ReactNode }) => (
    // Retool uses very large, bold sans-serif text for heroes, often tightly kerned.
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#151515] leading-tight">
        {children}
    </h1>
);

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-semibold text-[#151515] tracking-tight">
        {children}
    </h2>
);

// --- BUTTONS ---
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'outline';
};

export const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
    // Retool uses pill-shaped (rounded-full) buttons heavily for primary actions
    const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 ease-in-out active:scale-95";

    const variants = {
        primary: "bg-[#1B2E44] text-white hover:bg-[#2D4C71]", // Dark blue
        secondary: "bg-[#0E352C] text-white hover:bg-[#185849]", // Dark green accent
        outline: "bg-transparent text-[#151515] border-2 border-[#CBCCC4] hover:border-[#151515]"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

// --- CARDS & CONTAINERS ---
export const FeatureCard = ({ title, description, icon, className = '' }: { title: string, description: string, icon?: React.ReactNode, className?: string }) => (
    // Cards have moderate rounding (rounded-2xl) and soft shadows. Often sit on a light off-white background.
    <div className={`bg-white p-8 rounded-2xl shadow-sm border border-[#E9EBDF] hover:shadow-md transition-shadow duration-300 ${className}`}>
        {icon && <div className="mb-4 h-12 w-12 text-[#1B2E44]">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2 text-[#151515]">{title}</h3>
        <p className="text-[#3F403D] leading-relaxed">{description}</p>
    </div>
);

// --- FORM ELEMENTS ---
export const Input = ({ label, id, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
    <div className="flex flex-col mb-4">
        <label htmlFor={id} className="mb-2 text-sm font-medium text-[#151515]">
            {label}
        </label>
        <input
            id={id}
            className="px-4 py-3 bg-white border border-[#CBCCC4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4C71] focus:border-transparent transition-colors"
            {...props}
        />
    </div>
);

// --- HERO SECTION TEMPLATE ---
export const HeroSection = () => (
    <section className="bg-[#F7F8F4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E9EBDF] text-[#151515] text-sm font-medium mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#2D4C71] mr-2"></span>
                New Release - AI Agents
            </div>
            <HeroTitle>Build custom software, <br /> incredibly fast.</HeroTitle>
            <p className="mt-6 text-xl text-[#3F403D] max-w-3xl mx-auto">
                Stop wrestling with UI libraries, hacking together data sources, and figuring out access controls. Start shipping apps that move your business forward.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
                <Button variant="primary">Start building for free</Button>
                <Button variant="outline">Book a demo</Button>
            </div>
        </div>
    </section>
);
