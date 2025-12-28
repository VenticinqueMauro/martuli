import React from 'react';

interface SVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export const CameraIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="8" width="16" height="11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="6" y="6" width="12" height="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
    <circle cx="12" cy="13.5" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="13.5" r="1.5" fill="currentColor"/>
    <circle cx="17" cy="10" r="0.5" fill="currentColor"/>
  </svg>
);

export const StorkIcon: React.FC<SVGProps> = ({ width = 64, height = 64, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 3C18 3 16 4 14 6C12 4 10 3 10 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <ellipse cx="14" cy="8" rx="2.5" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M14 11L14 16M14 16L12 18M14 16L16 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M16 8C16.5 7.5 18 7 19 8C19.5 8.5 19.5 9.5 19 10C18.5 10.5 17 10 16.5 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="14.5" cy="7.5" r="0.5" fill="currentColor"/>
  </svg>
);

export const TopHatIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="6" y="12" width="12" height="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="4" y="18" width="16" height="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
    <rect x="8" y="7" width="8" height="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="8" y1="12" x2="8" y2="7" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="16" y1="12" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const FlowerIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={width} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
    <ellipse cx="12" cy="7" rx="1.5" ry="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <ellipse cx="15" cy="10" rx="1.5" ry="2" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(90 15 10)"/>
    <ellipse cx="12" cy="13" rx="1.5" ry="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <ellipse cx="9" cy="10" rx="1.5" ry="2" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(90 9 10)"/>
    <line x1="12" y1="13" x2="12" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 15C10 15 9 16 8 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M14 17C14 17 15 18 16 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export const TreeIcon: React.FC<SVGProps> = ({ width = 72, height = 72, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="11" y="14" width="2" height="6" fill="currentColor"/>
    <path d="M12 5L8 10H16L12 5Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M12 8L9 12H15L12 8Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M12 11L10 14H14L12 11Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <circle cx="7" cy="9" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="17" cy="11" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="16" cy="7" r="1" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

export const CakeIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="6" y="13" width="12" height="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="7" y="16" width="10" height="1" fill="currentColor"/>
    <line x1="12" y1="8" x2="12" y2="13" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6C12 6 11 7 11 8C11 8.5 11.5 9 12 9C12.5 9 13 8.5 13 8C13 7 12 6 12 6Z" fill="currentColor"/>
    <line x1="5" y1="20" x2="19" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const HeartIcon: React.FC<SVGProps> = ({ width = 32, height = 32, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21C12 21 3 15 3 9C3 6 5 4 7 4C9 4 11 5 12 7C13 5 15 4 17 4C19 4 21 6 21 9C21 15 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const TelegramIcon: React.FC<SVGProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="7" width="18" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="3" y1="11" x2="8" y2="13" stroke="currentColor" strokeWidth="1"/>
    <line x1="21" y1="11" x2="16" y2="13" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export const SunIcon: React.FC<SVGProps> = ({ width = 32, height = 32, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="22" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="5" y1="12" x2="2" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="19" y1="5" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="7" y1="17" x2="5" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="19" y1="19" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="7" y1="7" x2="5" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const WeddingRingsIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="9" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="15" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="15" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

export const CompassIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 4L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 18L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <polygon points="12,9 14,14 9,12" fill="currentColor"/>
  </svg>
);

export const OrnamentDivider: React.FC<SVGProps> = ({ width = 120, height = 24, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 120 24" fill="none" className={className}>
    <circle cx="60" cy="12" r="3" fill="currentColor"/>
    <circle cx="50" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="70" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="42" cy="12" r="1" fill="currentColor"/>
    <circle cx="78" cy="12" r="1" fill="currentColor"/>
    <line x1="10" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="1"/>
    <line x1="82" y1="12" x2="110" y2="12" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export const ArrowLeftIcon: React.FC<SVGProps> = ({ width = 32, height = 32, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon: React.FC<SVGProps> = ({ width = 32, height = 32, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlusIcon: React.FC<SVGProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const PlateIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
  </svg>
);

export const UtensilsIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Fork */}
    <path d="M7 3L7 10M7 10L7 21M7 10C5.5 10 5 8 5 6L5 3M7 10C8.5 10 9 8 9 6L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Knife */}
    <path d="M17 3C17 3 15 5 15 8L15 21M15 8C15 8 17 10 19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ChefHatIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 10C6 10 6 6 9 6C9 4 10 3 12 3C14 3 15 4 15 6C18 6 18 10 18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="6" y="10" width="12" height="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1"/>
    <line x1="8" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="1"/>
    <path d="M6 19L6 20C6 20.5 6.5 21 7 21L17 21C17.5 21 18 20.5 18 20L18 19" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const SpoonIcon: React.FC<SVGProps> = ({ width = 40, height = 40, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="7" rx="3" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="12" y1="11" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const CalendarIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="5" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="8" y1="3" x2="8" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="16" y1="3" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="13" r="0.8" fill="currentColor"/>
    <circle cx="12" cy="13" r="0.8" fill="currentColor"/>
    <circle cx="16" cy="13" r="0.8" fill="currentColor"/>
    <circle cx="8" cy="17" r="0.8" fill="currentColor"/>
    <circle cx="12" cy="17" r="0.8" fill="currentColor"/>
    <circle cx="16" cy="17" r="0.8" fill="currentColor"/>
  </svg>
);

export const CloudIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18 15C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9C17.8 9 17.6 9.02 17.41 9.06C17.14 6.74 15.23 5 13 5C10.52 5 8.5 7.02 8.5 9.5C8.5 9.67 8.51 9.84 8.53 10C6.57 10.16 5 11.84 5 14C5 16.21 6.79 18 9 18H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M12 11L12 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M10 13L12 11L14 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export const DocumentIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 3H14L18 7V21H6V3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M14 3V7H18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1"/>
    <line x1="9" y1="14" x2="15" y2="14" stroke="currentColor" strokeWidth="1"/>
    <line x1="9" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1"/>
    <rect x="8" y="18" width="2" height="2" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const LightningBoltIcon: React.FC<SVGProps> = ({ width = 48, height = 48, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <path d="M13 2L11 22" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
  </svg>
);
