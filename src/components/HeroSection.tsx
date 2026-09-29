import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown, Heart } from 'lucide-react';
import { APP_CONFIG } from '../data/content';
import {
  WaxSeal,
  VintageStamp,
  VintageButterfly,
  VintageTicket,
  VelvetBow,
  HangTag,
  WashiTape,
  AceOfHearts,
  BotanicalRose,
} from './VintageElements';

export const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('bouquet-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col items-center justify-between px-4 pt-14 pb-10 text-center overflow-hidden bg-[#F3E8D8] bg-parchment text-[#2D1217]"
    >
      {/* Decorative corners and floating accents with Dark Academia & Coquette style */}
      <div className="absolute top-4 left-3 pointer-events-none opacity-85">
        <VintageButterfly size={38} />
      </div>
      <div className="absolute top-6 right-3 pointer-events-none opacity-90 rotate-6">
        <VintageStamp price="05 OCT" title="Birthday Mail" date="05.10.2005" />
      </div>
      <div className="absolute bottom-16 left-2 pointer-events-none opacity-80 -rotate-6">
        <AceOfHearts />
      </div>
      <div className="absolute bottom-20 right-3 pointer-events-none opacity-70">
        <BotanicalRose size={38} />
      </div>

      <div className="w-full max-w-md mx-auto my-auto flex flex-col items-center relative z-10">
        {/* Coquette Ribbon Bow and Vintage Ticket */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 flex flex-col items-center gap-1.5"
        >
          <VelvetBow size={36} color="#4A1521" />
          <VintageTicket
            number="NO. 05102005"
            title="ADMIT ONE: MY BELOVED"
            subtitle="SPECIAL's days"
          />
        </motion.div>

        {/* Vintage Ornate Plaque Frame in Dark Academia Palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full bg-[#E5D3BC] p-6 sm:p-8 rounded-2xl border-2 border-[#A88553] shadow-2xl text-[#2D1217]"
          style={{
            boxShadow:
              '0 15px 35px -5px rgba(45, 18, 23, 0.35), inset 0 0 25px rgba(168, 133, 83, 0.18)',
          }}
        >
          {/* Ornate corner flourishes */}
          <div className="absolute top-2 left-2 text-[#A88553] text-sm">❤️</div>
          <div className="absolute top-2 right-2 text-[#A88553] text-sm">❤️</div>
          <div className="absolute bottom-2 left-2 text-[#A88553] text-sm">❤️</div>
          <div className="absolute bottom-2 right-2 text-[#A88553] text-sm">❤️</div>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-[#A88553]" />
            <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#4A1521] uppercase font-bold">
              Happy Birthday, Ma Lup
            </p>
            <span className="h-[1px] w-8 bg-[#A88553]" />
          </div>

          {/* Main Title */}
          <h1 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#4A1521] leading-tight mb-2">
            Selamat Ulang Tahun,
            <span className="block font-caveat text-4xl sm:text-5xl text-[#2D1217] mt-1 font-bold">
              {APP_CONFIG.partnerName} ♥
            </span>
          </h1>

          {/* Romantic quote */}
          <p className="font-cormorant italic text-sm sm:text-base text-[#2D1217] leading-relaxed max-w-xs mx-auto mb-5">
            &ldquo;Hari ini hari kamu. Aku cuma bisa bilang: semoga senyummu seindah yang kamu kirim ke aku pas lagi ngambek.&rdquo;
          </p>

          {/* Special Date highlight */}
          <div className="inline-flex items-center gap-2 bg-[#F3E8D8] border border-[#A88553] px-4 py-1.5 rounded-full shadow-sm text-xs font-cinzel text-[#4A1521]">
            <Sparkles size={13} className="text-[#A88553]" />
            <span className="font-bold tracking-wider">{APP_CONFIG.birthdayDateFormatted}</span>
            <Sparkles size={13} className="text-[#A88553]" />
          </div>

          {/* Wax seal accent */}
          <div className="mt-5 flex justify-center">
            <WaxSeal size="md" icon="rose" />
          </div>
        </motion.div>

        {/* Small sweet note tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 flex items-center gap-1.5 text-xs text-[#4A1521] font-cormorant italic font-semibold"
        >
          <Heart size={13} className="fill-[#4A1521] text-[#4A1521]" />
          <span>Di Scroll Sayang </span>
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="relative z-10 mt-6 inline-flex flex-col items-center text-[#4A1521] hover:text-[#2D1217] focus:outline-none transition-colors"
        aria-label="Scroll ke bagian potret bunga"
      >
        <span className="text-[10px] font-cinzel tracking-widest uppercase mb-1 font-bold">
          Jelajahi Arsip Kita❤️
        </span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
};
