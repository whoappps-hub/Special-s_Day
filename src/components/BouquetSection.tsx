import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Feather, Camera } from 'lucide-react';
import { SECTION_02_HER_PHOTO } from '../data/content';
import {
  VintageFrame,
  HangTag,
  VintageCameoFrame,
  VelvetBow,
  WashiTape,
  VintageButterfly,
  BotanicalRose,
  TornPaperRippedEdge,
  VintagePaperClip,
  VintageStamp,
  AceOfHearts,
} from './VintageElements';

export const BouquetSection: React.FC = () => {
  const photo = SECTION_02_HER_PHOTO;

  return (
    <section
      id="bouquet-section"
      className="relative py-16 px-3 sm:px-4 bg-[#E5D3BC] bg-parchment text-[#2D1217] border-t-2 border-[#A88553]/60 overflow-hidden"
    >
      {/* Dark Academia & Coquette accents: Butterflies & Velvet Bows */}
      <div className="absolute top-6 left-3 opacity-40 pointer-events-none">
        <VintageButterfly size={42} />
      </div>
      <div className="absolute top-10 right-3 opacity-45 pointer-events-none rotate-12">
        <VelvetBow size={40} />
      </div>
      <div className="absolute bottom-8 left-2 opacity-35 pointer-events-none -rotate-12">
        <BotanicalRose size={36} />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Section Header with Victorian Hang Tag */}
        <div className="text-center mb-7 relative">
          <div className="flex justify-center items-center gap-3 mb-2">
            <WashiTape color="#4A1521" rotation={-2} className="w-24" />
            <VelvetBow size={28} />
            <WashiTape color="#4A1521" rotation={2} className="w-24" />
          </div>

          <div className="inline-block mb-1">
            <HangTag label="SECTION 02" sublabel="Ini Harimu, Sayang...." />
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mt-1 mb-1">
            Hai Sayang 👋
          </h2>
          <p className="text-xs text-[#2D1217]/85 font-cormorant italic max-w-xs mx-auto">
            Satu Potret Spesialmu yang aku Favoritkan dari sekian banyak momen kita berdua.
          </p>
        </div>

        {/* 1 Foto Tunggal Utama dalam Victorian Vintage Frame / Cameo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative my-2"
        >
          {/* Top Brass Clip & Washi Tape */}
          <div className="absolute -top-4 left-6 z-30">
            <VintagePaperClip />
          </div>
          <div className="absolute -top-3 right-8 z-30 rotate-6">
            <VintageStamp price="LOVE" title="Salatiga" date="05.10.2005" />
          </div>

          {/* Torn Paper Deckled Edge Top */}
          <TornPaperRippedEdge position="top" paperColor="#F3E8D8" />

          {/* Main Scrapbook Body Frame */}
          <div
            className="relative bg-[#F3E8D8] px-5 sm:px-7 py-7 shadow-2xl border-x-2 border-[#A88553]/70 text-center"
            style={{
              backgroundImage: `
                radial-gradient(circle at 10% 20%, rgba(168, 133, 83, 0.12) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(74, 21, 33, 0.08) 0%, transparent 40%),
                linear-gradient(to bottom, transparent 95%, rgba(168, 133, 83, 0.2) 95%)
              `,
              backgroundSize: '100% 100%, 100% 100%, 100% 2.2rem',
              backgroundPosition: '0 0, 0 0, 0 0.8rem',
              boxShadow:
                '0 15px 35px -5px rgba(45, 18, 23, 0.3), inset 0 0 35px rgba(168, 133, 83, 0.15)',
            }}
          >
            {/* Victorian Frame Container around the Single Photo */}
            <div className="relative mx-auto max-w-xs p-3.5 bg-[#E5D3BC] rounded-2xl border-2 border-[#A88553] shadow-lg mb-5">
              {/* Corner Filigrees */}
              <div className="absolute top-1.5 left-1.5 text-[#A88553] text-[10px]">⚜</div>
              <div className="absolute top-1.5 right-1.5 text-[#A88553] text-[10px]">⚜</div>
              <div className="absolute bottom-1.5 left-1.5 text-[#A88553] text-[10px]">⚜</div>
              <div className="absolute bottom-1.5 right-1.5 text-[#A88553] text-[10px]">⚜</div>

              {/* The Single Focal Photo with JTK Tone & Vintage Vignette */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#2D1217] border-2 border-[#4A1521] shadow-inner">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover jtk-tone hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#4A1521]/15 pointer-events-none" />

                {/* Floating Coquette Bow Accent on top center of frame */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
                  <VelvetBow size={32} />
                </div>

                {/* Bottom Photo Title Badge */}
                <div className="absolute bottom-2 inset-x-2 bg-[#2D1217]/85 backdrop-blur-xs p-2 rounded-lg border border-[#A88553]/60 text-center">
                  <p className="font-cinzel text-xs font-bold text-[#F3E8D8] tracking-widest uppercase">
                    {photo.title}
                  </p>
                  <p className="font-cormorant italic text-[11px] text-[#A88553] leading-none mt-0.5">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Note & Handwritten Love Message on Paper */}
            <div className="text-left px-2 sm:px-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-cinzel text-[10px] font-bold tracking-wider text-[#4A1521] uppercase flex items-center gap-1">
                  <Feather size={12} className="text-[#A88553]" />
                  Catatan Hari Ini awokawok
                </span>
                <span className="text-[9px] font-mono text-[#4A1521] bg-[#E5D3BC] px-2 py-0.5 rounded border border-[#A88553]/50">
                  {photo.date}
                </span>
              </div>

              <p className="font-handwriting text-2xl sm:text-3xl text-[#2D1217] leading-[2.2rem] tracking-wide my-2">
                &ldquo;{photo.note}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#A88553]/40 text-xs mt-3">
                <span className="font-cormorant italic text-[#4A1521] flex items-center gap-1">
                  <Sparkles size={11} className="text-[#A88553]" />
                  Jangan Lupakan Gala-gala itu
                </span>
                <span className="font-caveat font-bold text-[#4A1521] flex items-center gap-1 text-sm">
                  <Heart size={12} fill="currentColor" /> Mwehehe
                </span>
              </div>
            </div>

            {/* Hint for VS Code customization (subtle and helpful) */}
            <div className="mt-5 pt-3 border-t border-dashed border-[#A88553]/40 text-center">
              <p className="text-[9px] font-mono text-[#4A1521]/70 bg-[#E5D3BC]/60 py-1 px-2 rounded inline-block">
                masih panjang jangan salting dulu <code className="font-bold text-[#4A1521]">Tcihuy😊</code>
              </p>
            </div>
          </div>

          {/* Torn Paper Deckled Edge Bottom */}
          <TornPaperRippedEdge position="bottom" paperColor="#F3E8D8" />
        </motion.div>
      </div>
    </section>
  );
};
