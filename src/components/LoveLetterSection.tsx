import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Heart, Feather, Sparkles } from 'lucide-react';
import { DEFAULT_LOVE_LETTER, APP_CONFIG } from '../data/content';
import {
  WaxSeal,
  VintageStamp,
  WashiTape,
  TornPaperRippedEdge,
  VintagePaperClip,
  VintageButterfly,
  VelvetBow,
  HangTag,
  EnvelopePocket,
} from './VintageElements';

export const LoveLetterSection: React.FC = () => {
  // Folded envelope interaction: user clicks to unfold the letter with soft animation
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="love-letter-section"
      className="relative py-16 px-3 sm:px-4 bg-[#E5D3BC] bg-parchment text-[#2D1217] border-t-2 border-[#A88553]/60 overflow-hidden"
    >
      {/* Vintage decorative elements */}
      <div className="absolute top-8 left-2 opacity-40 pointer-events-none">
        <VintageButterfly size={42} />
      </div>
      <div className="absolute bottom-10 right-2 opacity-35 pointer-events-none rotate-45">
        <VintageButterfly size={36} />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 relative">
          <div className="flex justify-center items-center gap-2 mb-2">
            <WashiTape color="#4A1521" rotation={1.5} className="w-24" />
            <VelvetBow size={26} color="#4A1521" />
            <WashiTape color="#4A1521" rotation={-1.5} className="w-24" />
          </div>

          <div className="inline-block mb-1">
            <HangTag label="SECTION 03" sublabel="Surat Dari Opang" />
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mt-1 mb-1">
            Surat Yang Paling Dalam & Terdalam
          </h2>
          <p className="text-xs text-[#2D1217] font-cormorant italic max-w-xs mx-auto">
            {isOpen
              ? 'Detik demi detik dan ini satu momen dimana aku bisa mengucapakan ucapan selamat ulang tahun sayang tanpa adanya rasa canggung seperti sebelumnya.'
              : 'Surat ini masih terlipat rapi di dalam amplop saku. Ketuk untuk membukanya.'}
          </p>
        </div>

        {/* Unfolded Natural Parchment Paper Sheet / Folded Vintage Envelope Pocket */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="unfolded-letter"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative mx-auto my-2 select-text"
            >
              {/* Paper Clip on the top-left */}
              <div className="absolute -top-3 left-6 z-30">
                <VintagePaperClip />
              </div>

              {/* Top Washi Tape fastening */}
              <div className="absolute -top-2.5 right-10 z-20">
                <WashiTape color="#4A1521" rotation={-2} className="w-24" />
              </div>

              {/* Ripped/Deckled Paper Top Edge */}
              <TornPaperRippedEdge position="top" paperColor="#F3E8D8" />

              {/* The Natural Handwritten Paper Body */}
              <div
                className="relative bg-[#F3E8D8] px-5 sm:px-8 py-8 shadow-2xl text-[#2D1217] border-x-2 border-[#A88553]"
                style={{
                  /* Aged paper texture with subtle fiber staining and vintage lined rule */
                  backgroundImage: `
                    linear-gradient(to bottom, transparent 95%, rgba(168, 133, 83, 0.22) 95%),
                    radial-gradient(circle at 10% 20%, rgba(168, 133, 83, 0.1) 0%, transparent 40%),
                    radial-gradient(circle at 90% 80%, rgba(74, 21, 33, 0.08) 0%, transparent 40%)
                  `,
                  backgroundSize: '100% 2.35rem, 100% 100%, 100% 100%',
                  backgroundPosition: '0 1.2rem, 0 0, 0 0',
                  boxShadow:
                    '0 15px 35px -5px rgba(45, 18, 23, 0.3), inset 0 0 35px rgba(168, 133, 83, 0.15)',
                }}
              >
                {/* Red Margin Line on the left (classic vintage stationery margin) */}
                <div className="absolute top-0 bottom-0 left-9 sm:left-12 w-[1px] bg-[#4A1521]/30 pointer-events-none" />

                {/* Vintage Airmail Postage Stamp on the top-right corner */}
                <div className="absolute top-3 right-3 rotate-2 z-10">
                  <VintageStamp price="LOVE" title="Salatiga" date="05.10.2005" />
                </div>

                {/* Letter Header */}
                <div className="relative z-10 pl-6 sm:pl-8 mb-5 pr-20">
                  <div className="flex items-center gap-1.5 text-[#4A1521] font-cinzel text-[10px] tracking-widest uppercase font-bold">
                    <Feather size={12} className="text-[#A88553]" />
                    <span>All in For U • Alvianita</span>
                  </div>
                  <p className="font-caveat text-2xl sm:text-3xl text-[#4A1521] font-bold mt-0.5">
                    Untuk: {APP_CONFIG.partnerName}
                  </p>
                  <p className="font-cormorant italic text-xs text-[#2D1217]">
                    Tertanggal :24 September 2026
                  </p>
                </div>

                {/* Natural Handwriting Paragraphs directly from content */}
                <div className="relative z-10 pl-6 sm:pl-8 pr-1 space-y-3 font-handwriting text-xl sm:text-2xl text-[#2D1217] leading-[2.35rem] tracking-wide whitespace-pre-line text-left drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.1)]">
                  {DEFAULT_LOVE_LETTER}
                </div>

                {/* Letter Sign-off with Wax Seal & Signature */}
                <div className="relative z-10 mt-9 pt-5 pl-6 sm:pl-8 flex items-end justify-between border-t border-[#A88553]/40">
                  <div>
                    <p className="font-cormorant italic text-sm text-[#2D1217]">
                      Yang selalu mencintaimu setiap hari,
                    </p>
                    <p className="font-dancing text-3xl sm:text-4xl text-[#4A1521] font-bold mt-1 tracking-wide">
                      {APP_CONFIG.senderName}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <WaxSeal size="md" icon="rose" />
                    <span className="text-[8px] font-cinzel text-[#4A1521] tracking-widest uppercase font-bold">
                       with love
                    </span>
                  </div>
                </div>

                {/* Refold Button */}
                <div className="relative z-10 mt-6 pt-3 text-center border-t border-[#A88553]/40">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E5D3BC] border border-[#A88553] text-[#4A1521] text-xs font-cinzel font-bold hover:bg-[#F3E8D8] transition-all shadow-xs"
                  >
                    <Mail size={12} />
                    <span>Lipat Kembali Surat Ke Dalam Amplop</span>
                  </button>
                </div>
              </div>

              {/* Ripped/Deckled Paper Bottom Edge */}
              <TornPaperRippedEdge position="bottom" paperColor="#F3E8D8" />
            </motion.div>
          ) : (
            /* Folded Vintage Envelope Pocket with Burgundy & Gold Wax Seal */
            <motion.div
              key="folded-envelope"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-sm mx-auto my-4"
            >
              <EnvelopePocket
                isOpen={false}
                onToggle={() => setIsOpen(true)}
                title="Amplop Surat Rahasia"
                subtitle="Ketuk segel lilin untuk membuka lipatan surat"
              />

              <p className="text-center text-xs text-[#4A1521] font-cinzel tracking-wider uppercase font-bold mt-4 flex items-center justify-center gap-1.5 animate-pulse">
                <Heart size={12} fill="currentColor" /> Masih Sanggup Scroll? <Heart size={12} fill="currentColor" />
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
