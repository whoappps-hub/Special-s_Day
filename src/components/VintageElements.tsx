import React from 'react';

/* 
  ======================================================================
  VINTAGE, SCRAPBOOK, DARK ACADEMIA & COQUETTE / VICTORIAN UI ELEMENTS
  Color Criteria:
  - Primary Dark: #4A1521 / #2D1217 (Deep Burgundy / Maroon Brown)
  - Parchment / Paper Accent: #F3E8D8 / #E5D3BC (Vintage Beige)
  - Gold Accent: #A88553 (Warm Gold)
  ======================================================================
*/

// 1. VINTAGE FRAME / LABEL FRAME (Ukiran Victorian / Barok)
export const VintageFrame: React.FC<{
  children: React.ReactNode;
  title?: string;
  className?: string;
  id?: string;
}> = ({ children, title, className = '', id }) => {
  return (
    <div
      id={id}
      className={`relative p-5 sm:p-6 bg-[#F3E8D8] border-2 border-[#A88553] rounded-2xl shadow-xl ${className}`}
      style={{
        boxShadow: '0 12px 28px -6px rgba(45, 18, 23, 0.25), inset 0 0 30px rgba(168, 133, 83, 0.15)',
      }}
    >
      {/* Victorian Baroque Corner Filigrees */}
      <div className="absolute -top-2 -left-2 w-7 h-7 text-[#A88553] pointer-events-none">
        <svg viewBox="0 0 40 40" fill="currentColor">
          <path d="M0,0 L40,0 C30,5 25,12 25,25 C12,25 5,30 0,40 Z" />
          <circle cx="10" cy="10" r="3" fill="#4A1521" />
        </svg>
      </div>
      <div className="absolute -top-2 -right-2 w-7 h-7 text-[#A88553] pointer-events-none rotate-90">
        <svg viewBox="0 0 40 40" fill="currentColor">
          <path d="M0,0 L40,0 C30,5 25,12 25,25 C12,25 5,30 0,40 Z" />
          <circle cx="10" cy="10" r="3" fill="#4A1521" />
        </svg>
      </div>
      <div className="absolute -bottom-2 -left-2 w-7 h-7 text-[#A88553] pointer-events-none -rotate-90">
        <svg viewBox="0 0 40 40" fill="currentColor">
          <path d="M0,0 L40,0 C30,5 25,12 25,25 C12,25 5,30 0,40 Z" />
          <circle cx="10" cy="10" r="3" fill="#4A1521" />
        </svg>
      </div>
      <div className="absolute -bottom-2 -right-2 w-7 h-7 text-[#A88553] pointer-events-none rotate-180">
        <svg viewBox="0 0 40 40" fill="currentColor">
          <path d="M0,0 L40,0 C30,5 25,12 25,25 C12,25 5,30 0,40 Z" />
          <circle cx="10" cy="10" r="3" fill="#4A1521" />
        </svg>
      </div>

      {title && (
        <div className="text-center mb-3">
          <span className="font-cinzel text-xs tracking-[0.2em] font-bold text-[#4A1521] uppercase border-b border-[#A88553]/60 pb-0.5">
            {title}
          </span>
        </div>
      )}

      {children}
    </div>
  );
};

// 2. HANG TAG / GIFT TAG (Tag gantung dengan lubang dan tali rami)
export const HangTag: React.FC<{
  label: string;
  sublabel?: string;
  className?: string;
  onClick?: () => void;
  id?: string;
}> = ({ label, sublabel, className = '', onClick, id }) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`relative inline-flex flex-col items-center bg-[#E5D3BC] border border-[#A88553] px-3.5 py-2 rounded-b-md shadow-md text-[#2D1217] select-none ${
        onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''
      } ${className}`}
      style={{
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 18%, 100% 100%, 0% 100%, 0% 18%)',
        paddingTop: '1rem',
      }}
    >
      {/* Eyelet / Hole */}
      <div className="w-2.5 h-2.5 rounded-full bg-[#4A1521] border border-[#A88553] mb-1 flex items-center justify-center">
        <div className="w-1 h-1 rounded-full bg-[#F3E8D8]" />
      </div>

      <span className="font-cinzel text-[10px] sm:text-xs font-bold tracking-wider text-[#4A1521] uppercase">
        {label}
      </span>
      {sublabel && (
        <span className="font-cormorant italic text-[9px] text-[#2D1217]/80 leading-none mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
};

// 3. ENVELOPE / ENVELOPE POCKET (Amplop surat vintage pocket)
export const EnvelopePocket: React.FC<{
  isOpen?: boolean;
  onToggle?: () => void;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}> = ({ isOpen, onToggle, title = 'Surat Rahasia', subtitle = 'Ketuk untuk membuka', className = '', id }) => {
  return (
    <div
      id={id}
      onClick={onToggle}
      className={`relative bg-gradient-to-b from-[#4A1521] via-[#3a1019] to-[#2D1217] p-6 rounded-xl border-2 border-[#A88553] shadow-2xl text-center text-[#F3E8D8] cursor-pointer select-none overflow-hidden transition-transform hover:scale-[1.01] ${className}`}
    >
      {/* Envelope Flap Polygon */}
      <div
        className="absolute inset-x-0 top-0 h-28 bg-[#2D1217] border-b border-[#A88553]/60 transition-transform duration-500 origin-top"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
        }}
      />

      <div className="relative z-10 pt-4 flex flex-col items-center">
        <WaxSeal size="md" icon="rose" className="mb-2" />
        <h4 className="font-cormorant text-2xl font-bold text-[#F3E8D8] mt-1">{title}</h4>
        <p className="font-cinzel text-[10px] tracking-widest text-[#A88553] uppercase mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

// 4. VINTAGE TICKET / COUPON ("ADMIT ONE")
export const VintageTicket: React.FC<{
  number?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}> = ({ number = 'No. 05102005', title = 'ADMIT ONE: LOVE OF MY LIFE', subtitle = 'VIP ACCESS • FOREVER', className = '', id }) => {
  return (
    <div
      id={id}
      className={`relative inline-flex items-center bg-[#E5D3BC] border-2 border-[#A88553] p-2.5 rounded-lg text-[#2D1217] select-none shadow-lg ${className}`}
      style={{
        boxShadow: '0 4px 14px rgba(45, 18, 23, 0.18)',
      }}
    >
      {/* Notches on top and bottom */}
      <div className="absolute -top-2 left-1/3 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F3E8D8] border border-[#A88553]" />
      <div className="absolute -bottom-2 left-1/3 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F3E8D8] border border-[#A88553]" />

      <div className="border-r-2 border-dashed border-[#A88553] pr-3 mr-3 flex flex-col items-center text-center">
        <span className="font-cinzel text-[8px] tracking-widest text-[#4A1521] uppercase font-bold">
          COUPON
        </span>
        <span className="font-cinzel text-xs font-black text-[#4A1521]">ADMIT</span>
        <span className="font-cinzel text-sm font-black text-[#A88553]">ONE</span>
      </div>

      <div className="flex flex-col text-left">
        <span className="font-cinzel text-[10px] tracking-wider font-bold text-[#4A1521]">
          {title}
        </span>
        <span className="font-cormorant italic text-[11px] text-[#2D1217]">
          {subtitle}
        </span>
        <span className="font-mono text-[8px] text-[#A88553] tracking-widest mt-0.5">
          {number}
        </span>
      </div>
    </div>
  );
};

// 5. CLIPBOARD PAPER (Kertas catatan berklip metalik warm gold)
export const ClipboardPaper: React.FC<{
  children: React.ReactNode;
  title?: string;
  className?: string;
  id?: string;
}> = ({ children, title, className = '', id }) => {
  return (
    <div
      id={id}
      className={`relative pt-9 pb-6 px-5 sm:px-7 bg-[#F3E8D8] border-2 border-[#A88553]/70 rounded-xl shadow-2xl ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to bottom, transparent 94%, rgba(168, 133, 83, 0.18) 94%),
          radial-gradient(circle at 50% 50%, rgba(229, 211, 188, 0.4) 0%, transparent 80%)
        `,
        backgroundSize: '100% 2.1rem, 100% 100%',
        backgroundPosition: '0 0.8rem, 0 0',
      }}
    >
      {/* Metallic Gold Clipboard Clamp at top */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {/* Metal ring/hole */}
        <div className="w-5 h-3.5 border-2 border-[#A88553] rounded-t-full bg-transparent mb-[-1px]" />
        {/* Heavy clamp */}
        <div className="w-24 h-6 bg-gradient-to-r from-[#A88553] via-[#dfba73] to-[#A88553] border-2 border-[#4A1521] rounded shadow-md flex items-center justify-center">
          <div className="w-16 h-1 bg-[#4A1521]/60 rounded-full" />
        </div>
      </div>

      {title && (
        <div className="text-center mb-3">
          <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#4A1521] uppercase">
            {title}
          </h4>
        </div>
      )}

      {children}
    </div>
  );
};

// 6. VINTAGE STAMP / POSTAGE STAMP (Perangko kuno berselera Dark Academia)
export const VintageStamp: React.FC<{
  price?: string;
  title?: string;
  date?: string;
  className?: string;
  id?: string;
}> = ({ price = '10 CENTS', title = 'Love Mail', date = '05.10.2005', className = '', id }) => {
  return (
    <div
      id={id}
      className={`relative p-2 bg-[#F3E8D8] rounded-sm shadow-md inline-block select-none ${className}`}
      style={{
        boxShadow: '0 3px 10px rgba(45, 18, 23, 0.2), 0 1px 3px rgba(0,0,0,0.1)',
        border: '3px dashed #A88553',
      }}
    >
      <div className="bg-[#4A1521] text-[#F3E8D8] p-2 text-center rounded-sm border border-[#A88553] flex flex-col items-center justify-between min-w-[72px] min-h-[92px]">
        <div className="flex justify-between w-full text-[8px] font-cinzel text-[#A88553] tracking-widest border-b border-[#A88553]/40 pb-0.5">
          <span>POSTES</span>
          <span>{price}</span>
        </div>
        <div className="my-1 text-[#A88553]">
          <svg className="w-7 h-7 mx-auto opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4c-3 0-5 2-5 5 0 4 5 11 5 11s5-7 5-11c0-3-2-5-5-5z" />
            <path d="M12 9a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </div>
        <div className="text-[8px] font-cormorant italic tracking-wide text-[#E5D3BC]">
          {title}
        </div>
      </div>

      {/* Cancellation stamp mark */}
      <div className="absolute -top-1 -right-2 transform rotate-12 pointer-events-none opacity-50 text-[#4A1521]">
        <div className="w-10 h-10 border border-current rounded-full flex flex-col items-center justify-center text-[6px] font-sans">
          <span>ARCHIVE</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

// 7. WAX SEAL / STEMPEL LILIN (Segel lilin Deep Burgundy dengan lambang emas)
export const WaxSeal: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  icon?: 'rose' | 'fleur' | 'heart' | 'monogram';
  onClick?: () => void;
  className?: string;
  id?: string;
}> = ({ size = 'md', label, icon = 'rose', onClick, className = '', id }) => {
  const sizeMap = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-20 h-20 text-base',
  };

  return (
    <div
      id={id}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      className={`relative inline-flex items-center justify-center rounded-full select-none cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 ${sizeMap[size]} ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, #4A1521 0%, #2D1217 65%, #18090b 100%)',
        boxShadow:
          '0 4px 12px rgba(45, 18, 23, 0.5), inset 0 2px 4px rgba(229, 211, 188, 0.3), inset 0 -3px 6px rgba(0,0,0,0.7)',
      }}
    >
      <div className="absolute inset-[-3px] rounded-full border border-[#4A1521]/70 -z-10 opacity-75 blur-[0.5px]" />
      <div className="absolute inset-1 rounded-full border border-[#A88553]/60 pointer-events-none" />

      <div className="text-[#A88553] flex flex-col items-center justify-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
        {icon === 'rose' && (
          <svg className="w-1/2 h-1/2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.5 2 7.5 3.5 7.5 6C7.5 7.5 8.5 9 10 9.8C8.5 10.5 7 12 7 14C7 16.8 9.2 19 12 19C14.8 19 17 16.8 17 14C17 12 15.5 10.5 14 9.8C15.5 9 16.5 7.5 16.5 6C16.5 3.5 14.5 2 12 2Z" />
          </svg>
        )}
        {icon === 'fleur' && (
          <svg className="w-1/2 h-1/2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11.5 5 9 7 9 10C9 12 10.5 13 11 13C10 14.5 7 16 7 19H17C17 16 14 14.5 13 13C13.5 13 15 12 15 10C15 7 12.5 5 12 2Z" />
          </svg>
        )}
        {icon === 'heart' && (
          <svg className="w-1/2 h-1/2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )}
        {icon === 'monogram' && (
          <span className="font-cormorant font-bold italic tracking-wider text-sm">
            {label || 'S'}
          </span>
        )}
      </div>
    </div>
  );
};

// 8. RIBBON / VELVET BOW (Pita kain Coquette / Victorian untuk divider atau aksen sudut)
export const VelvetBow: React.FC<{
  color?: string;
  size?: number;
  className?: string;
}> = ({ color = '#4A1521', size = 36, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 100 75"
      fill="none"
      className={`select-none pointer-events-none drop-shadow-md ${className}`}
    >
      {/* Left loop */}
      <path
        d="M50 30 C30 10 10 15 15 35 C20 48 40 40 50 32"
        fill={color}
        stroke="#A88553"
        strokeWidth="1.5"
      />
      {/* Right loop */}
      <path
        d="M50 30 C70 10 90 15 85 35 C80 48 60 40 50 32"
        fill={color}
        stroke="#A88553"
        strokeWidth="1.5"
      />
      {/* Center knot */}
      <circle cx="50" cy="31" r="6" fill="#2D1217" stroke="#A88553" strokeWidth="1.5" />
      {/* Left ribbon tail */}
      <path
        d="M47 34 Q35 55 25 70 Q35 65 42 70 Q45 52 48 35"
        fill={color}
        opacity="0.95"
      />
      {/* Right ribbon tail */}
      <path
        d="M53 34 Q65 55 75 70 Q65 65 58 70 Q55 52 52 35"
        fill={color}
        opacity="0.95"
      />
    </svg>
  );
};

// 9. FLORAL WASHI TAPE / DECORATIVE TAPE (Pita perekat motif bunga / kotak-kotak)
export const WashiTape: React.FC<{
  color?: string;
  pattern?: 'floral' | 'stripes' | 'plaid' | 'solid';
  rotation?: number;
  className?: string;
}> = ({ color = '#4A1521', pattern = 'floral', rotation = -3, className = '' }) => {
  return (
    <div
      className={`h-4 w-18 opacity-90 shadow-sm rounded-[1px] pointer-events-none ${className}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${rotation}deg)`,
        backgroundImage:
          pattern === 'floral'
            ? 'radial-gradient(circle at 50% 50%, #A88553 1.2px, transparent 1.5px), radial-gradient(circle at 20% 40%, rgba(243,232,216,0.3) 1px, transparent 1.5px)'
            : pattern === 'stripes'
            ? 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(168,133,83,0.35) 4px, rgba(168,133,83,0.35) 8px)'
            : undefined,
        backgroundSize: pattern === 'floral' ? '10px 10px' : undefined,
        filter: 'drop-shadow(0 1px 3px rgba(45,18,23,0.25))',
        border: '1px solid rgba(168,133,83,0.4)',
      }}
    />
  );
};

// 10. VINTAGE CAMEO / OVAL FRAME (Bingkai oval berukir emas/perak untuk avatar atau featured image)
export const VintageCameoFrame: React.FC<{
  imageUrl?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}> = ({ imageUrl, alt = 'Cameo Portrait', size = 'md', className = '', id }) => {
  const sizeMap = {
    sm: 'w-24 h-32',
    md: 'w-36 h-48',
    lg: 'w-48 h-64',
  };

  return (
    <div
      id={id}
      className={`relative inline-flex items-center justify-center p-2 rounded-[50%] bg-gradient-to-b from-[#A88553] via-[#E5D3BC] to-[#A88553] shadow-2xl border-2 border-[#4A1521] ${sizeMap[size]} ${className}`}
      style={{
        boxShadow: '0 10px 25px rgba(45, 18, 23, 0.35), inset 0 0 15px rgba(74, 21, 33, 0.4)',
      }}
    >
      {/* Ornate Oval Inner Border */}
      <div className="w-full h-full rounded-[50%] overflow-hidden border-2 border-[#4A1521] bg-[#2D1217] relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover jtk-tone hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-[#A88553] p-2 text-center">
            <VelvetBow size={28} />
            <span className="font-cinzel text-[8px] uppercase tracking-widest mt-1">Cameo</span>
          </div>
        )}
      </div>

      {/* Top Baroque Crest */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#A88553] z-10">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="currentColor">
          <path d="M12 0 C9 6 3 4 0 8 C6 10 9 16 12 16 C15 16 18 10 24 8 C21 4 15 6 12 0 Z" />
        </svg>
      </div>
    </div>
  );
};

// 11. BOTANICAL ILLUSTRATION (Rose & Butterfly in Sepia/Burgundy)
export const BotanicalRose: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`text-[#4A1521] pointer-events-none drop-shadow-sm ${className}`}
    >
      <path
        d="M50 20 C42 10 30 18 30 28 C30 42 50 55 50 65 C50 55 70 42 70 28 C70 18 58 10 50 20 Z"
        fill="#4A1521"
        stroke="#A88553"
        strokeWidth="2"
      />
      <circle cx="50" cy="30" r="8" fill="#2D1217" stroke="#A88553" strokeWidth="1.5" />
      <path d="M50 65 Q45 80 48 95" stroke="#A88553" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 75 Q35 70 30 75 Q40 82 48 80" fill="#2D1217" stroke="#A88553" strokeWidth="1" />
      <path d="M49 82 Q62 78 68 84 Q58 88 49 87" fill="#2D1217" stroke="#A88553" strokeWidth="1" />
    </svg>
  );
};

export const VintageButterfly: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 28,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`text-[#4A1521] opacity-85 drop-shadow-sm select-none pointer-events-none ${className}`}
    >
      <path
        d="M50 50 C40 20 10 15 10 40 C10 60 35 65 50 55 C35 75 15 90 30 95 C45 100 50 70 50 55"
        fill="#4A1521"
        stroke="#A88553"
        strokeWidth="1.5"
        opacity="0.95"
      />
      <path
        d="M50 50 C60 20 90 15 90 40 C90 60 65 65 50 55 C65 75 85 90 70 95 C55 100 50 70 50 55"
        fill="#4A1521"
        stroke="#A88553"
        strokeWidth="1.5"
        opacity="0.95"
      />
      <path d="M48 30 Q50 20 52 30 L51 80 Q50 85 49 80 Z" fill="#2D1217" />
      <circle cx="50" cy="25" r="3" fill="#A88553" />
      <path d="M48 24 Q42 12 36 14" stroke="#A88553" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M52 24 Q58 12 64 14" stroke="#A88553" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="38" r="4" fill="#A88553" opacity="0.9" />
      <circle cx="72" cy="38" r="4" fill="#A88553" opacity="0.9" />
    </svg>
  );
};

// 12. ACE OF HEARTS PLAYING CARD (Kartu remi vintage sebagai aksen visual unik)
export const AceOfHearts: React.FC<{ className?: string; id?: string }> = ({
  className = '',
  id,
}) => {
  return (
    <div
      id={id}
      className={`w-14 h-22 bg-[#F3E8D8] rounded border-2 border-[#A88553] p-1.5 flex flex-col justify-between select-none shadow-md ${className}`}
      style={{
        boxShadow: '0 4px 10px rgba(45, 18, 23, 0.25)',
      }}
    >
      <div className="flex flex-col items-center leading-none text-[#4A1521]">
        <span className="font-cinzel font-black text-xs">A</span>
        <span className="text-[9px] text-[#4A1521]">♥</span>
      </div>
      <div className="my-auto text-center text-[#4A1521]">
        <svg className="w-5 h-5 mx-auto fill-current" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="flex flex-col items-center leading-none text-[#4A1521] rotate-180">
        <span className="font-cinzel font-black text-xs">A</span>
        <span className="text-[9px] text-[#4A1521]">♥</span>
      </div>
    </div>
  );
};

// 13. TORN PAPER / DECKLED EDGE PAPER (Sobekan kertas pinggiran natural)
export const TornPaperRippedEdge: React.FC<{
  position: 'top' | 'bottom';
  paperColor?: string;
  className?: string;
}> = ({ position, paperColor = '#F3E8D8', className = '' }) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none ${
        position === 'top' ? '-mb-1 rotate-180' : '-mt-1'
      } ${className}`}
    >
      <svg
        className="w-full h-3.5 sm:h-4.5 block"
        viewBox="0 0 1000 30"
        preserveAspectRatio="none"
        fill={paperColor}
      >
        <path d="M0,0 L0,22 Q25,8 50,18 Q80,28 110,15 Q140,5 175,20 Q210,29 250,12 Q290,6 330,22 Q370,30 410,14 Q450,4 490,19 Q530,28 570,11 Q610,6 650,23 Q690,30 730,15 Q770,5 810,21 Q850,28 890,13 Q930,7 970,22 Q985,26 1000,18 L1000,0 Z" />
      </svg>
    </div>
  );
};

// 14. VINTAGE PAPER CLIP (Klip kertas metalik warm gold)
export const VintagePaperClip: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-5 h-12 pointer-events-none ${className}`}>
      <svg viewBox="0 0 24 60" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(45,18,23,0.35)]">
        <path
          d="M8 12 V46 C8 51 12 55 17 55 C22 55 26 51 26 46 V8 C26 3 20 0 15 0 C10 0 4 4 4 10 V48 C4 54 9 59 16 59"
          stroke="#A88553"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12 V46 C8 51 12 55 17 55 C22 55 26 51 26 46 V8 C26 3 20 0 15 0 C10 0 4 4 4 10 V48 C4 54 9 59 16 59"
          stroke="#E5D3BC"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
