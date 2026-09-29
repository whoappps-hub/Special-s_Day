import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, RefreshCw, Feather } from 'lucide-react';
import { REASONS_LIST } from '../data/content';
import { ReasonItem } from '../types';
import {
  WaxSeal,
  WashiTape,
  TornPaperRippedEdge,
  VintagePaperClip,
  VintageButterfly,
  VelvetBow,
  HangTag,
} from './VintageElements';

export const ReasonsJarSection: React.FC = () => {
  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);
  const [openedCount, setOpenedCount] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [flyingPaper, setFlyingPaper] = useState(false);

  // Pick a specific folded note from jar or random
  const drawSpecificReason = (index: number) => {
    if (isDrawing) return;
    setIsDrawing(true);
    setFlyingPaper(true);

    setTimeout(() => {
      setCurrentReasonIndex(index);
      setOpenedCount((prev) => prev + 1);
      setIsDrawing(false);
      setFlyingPaper(false);
    }, 550);
  };

  const drawNextReason = () => {
    const nextIdx = (currentReasonIndex + 1) % REASONS_LIST.length;
    drawSpecificReason(nextIdx);
  };

  const currentReason = REASONS_LIST[currentReasonIndex];

  // Visual folded colorful parchment scrolls inside the glass mason jar in criteria colors
  const jarScrolls = [
    { color: '#4A1521', label: 'Scroll 1', rot: -12, top: 40, left: 15 },
    { color: '#A88553', label: 'Scroll 2', rot: 15, top: 35, left: 45 },
    { color: '#2D1217', label: 'Scroll 3', rot: -8, top: 55, left: 28 },
    { color: '#4A1521', label: 'Scroll 4', rot: 22, top: 70, left: 12 },
    { color: '#E5D3BC', label: 'Scroll 5', rot: -18, top: 72, left: 52 },
    { color: '#A88553', label: 'Scroll 6', rot: 8, top: 90, left: 32 },
    { color: '#4A1521', label: 'Scroll 7', rot: -5, top: 105, left: 18 },
    { color: '#2D1217', label: 'Scroll 8', rot: 14, top: 110, left: 48 },
  ];

  return (
    <section
      id="reasons-jar-section"
      className="relative py-16 px-3 sm:px-4 bg-[#F3E8D8] bg-parchment text-[#2D1217] border-t-2 border-[#A88553]/60 overflow-hidden"
    >
      {/* Vintage decorative elements */}
      <div className="absolute top-8 left-2 opacity-35 pointer-events-none">
        <VintageButterfly size={42} />
      </div>
      <div className="absolute bottom-12 right-2 opacity-30 pointer-events-none rotate-45">
        <VintageButterfly size={36} />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-7 relative">
          <div className="flex justify-center items-center gap-2 mb-2">
            <WashiTape color="#4A1521" rotation={1.5} className="w-24" />
            <VelvetBow size={26} color="#4A1521" />
            <WashiTape color="#4A1521" rotation={-1.5} className="w-24" />
          </div>

          <div className="inline-block mb-1">
            <HangTag label="SECTION 08" sublabel="Reasons Jar • Toples Kaca Cinta" />
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mt-1 mb-1">
            Reasons Jar
          </h2>
          <p className="text-xs text-[#2D1217] font-cormorant italic max-w-xs mx-auto">
            Toples kaca antik berisi gulungan carik kertas tulisan tangan. Ketuk toples kaca atau gulungan di dalamnya untuk mencabut alasan cintaku padamu.
          </p>
        </div>

        {/* Real Glass Mason Jar Presentation in Dark Academia & Gold */}
        <div className="relative bg-[#E5D3BC] p-5 sm:p-6 rounded-2xl border-2 border-[#A88553] shadow-2xl text-center mb-6 overflow-hidden">
          {/* Top Label */}
          <div className="flex justify-between items-center mb-3">
            <span className="font-cinzel text-[10px] tracking-wider text-[#4A1521] font-bold flex items-center gap-1">
              <Sparkles size={11} className="text-[#A88553]" />
              INTERACTIVE GLASS MASON JAR
            </span>
            <span className="text-[9px] font-mono text-[#4A1521] bg-[#F3E8D8] px-2 py-0.5 rounded-full font-bold border border-[#A88553]/50">
              Ketuk Gulungan Kertas
            </span>
          </div>

          {/* Interactive Mason Jar Container */}
          <div className="relative w-56 h-64 mx-auto mb-4 flex flex-col items-center justify-center select-none">
            {/* Wooden / Copper Jar Lid */}
            <div className="w-28 h-6 bg-gradient-to-r from-[#4A1521] via-[#3a1019] to-[#2D1217] rounded-t-lg border-2 border-[#2D1217] shadow-md relative z-30 flex items-center justify-center">
              <div className="w-24 h-1 bg-[#A88553] rounded-full opacity-90" />
            </div>
            <div className="w-32 h-3 bg-[#2D1217] border-x-2 border-[#18090b] relative z-30 shadow-xs" />

            {/* Glass Jar Body with Real Reflections */}
            <motion.div
              onClick={drawNextReason}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={isDrawing ? { rotate: [-3, 3, -3, 3, 0], y: [-2, 2, -2, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="w-48 h-52 bg-gradient-to-b from-[#ffffff]/70 via-[#F3E8D8]/60 to-[#E5D3BC]/80 rounded-b-[40px] border-2 border-[#A88553] shadow-2xl relative p-3 cursor-pointer overflow-hidden backdrop-blur-xs"
              style={{
                boxShadow:
                  'inset 0 0 35px rgba(255,255,255,0.85), inset 0 0 15px rgba(168, 133, 83, 0.35), 0 15px 30px rgba(45,18,23,0.25)',
              }}
            >
              {/* Natural Glass Highlights */}
              <div className="absolute top-2 left-2.5 w-2 h-44 bg-white/75 rounded-full blur-[0.75px] pointer-events-none" />
              <div className="absolute top-4 right-2.5 w-1.5 h-24 bg-white/50 rounded-full blur-[0.5px] pointer-events-none" />

              {/* Jar Vintage Kraft Paper Label in Middle */}
              <div className="relative z-20 mt-3 mx-auto bg-[#F3E8D8] px-3.5 py-1.5 rounded border border-[#A88553] shadow-sm text-center max-w-[135px]">
                <p className="font-cinzel text-[8px] tracking-widest text-[#4A1521] uppercase font-bold">
                  REASONS JAR
                </p>
                <p className="font-caveat text-lg text-[#4A1521] leading-none font-bold">
                  Kenapa Aku Cinta Kamu
                </p>
              </div>

              {/* Floating Folded Parchment Scrolls Inside Jar */}
              <div className="absolute inset-0 pt-16 px-4 pointer-events-auto">
                {jarScrolls.map((scr, idx) => (
                  <motion.div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      drawSpecificReason(idx % REASONS_LIST.length);
                    }}
                    whileHover={{ scale: 1.25, rotate: 0 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2 + idx * 0.3,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      top: `${scr.top}px`,
                      left: `${scr.left}px`,
                      transform: `rotate(${scr.rot}deg)`,
                      backgroundColor: scr.color,
                    }}
                    className="w-8 h-5 rounded-[3px] shadow-md border border-[#A88553]/50 flex items-center justify-center text-[9px] text-white font-bold cursor-pointer hover:ring-2 hover:ring-[#A88553] transition-all"
                  >
                    📜
                  </motion.div>
                ))}
              </div>

              {/* Flying paper note escaping from jar animation */}
              {flyingPaper && (
                <motion.div
                  initial={{ opacity: 1, scale: 0.4, y: 30, rotate: 0 }}
                  animate={{ opacity: 0, scale: 1.2, y: -60, rotate: 20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-x-0 top-6 mx-auto w-12 h-8 bg-[#F3E8D8] border border-[#A88553] rounded shadow-lg flex items-center justify-center text-xs text-[#4A1521] z-40"
                >
                  💌
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Action Button */}
          <button
            id="draw-reason-btn"
            onClick={drawNextReason}
            disabled={isDrawing}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A1521] text-[#F3E8D8] hover:bg-[#2D1217] active:scale-95 shadow-lg border border-[#A88553] font-cinzel text-xs font-bold tracking-wider transition-all"
          >
            <RefreshCw size={13} className={isDrawing ? 'animate-spin' : ''} />
            <span>{isDrawing ? 'Membuka Secarik Kertas...' : 'Cabut Gulungan Cinta 💌'}</span>
          </button>

          <p className="text-[10px] text-[#4A1521] font-sans mt-2 font-semibold">
            Sudah membaca {openedCount} carik kertas penuh kasih sayang
          </p>
        </div>

        {/* Unfolded Natural Note Paper (Real paper strip look with torn edge and handwriting) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReason.id}
            initial={{ opacity: 0, scale: 0.92, y: 15, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -15, rotate: 1 }}
            transition={{ duration: 0.35 }}
            className="relative mx-auto my-3"
          >
            {/* Top Washi Tape Sticking Note */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <WashiTape color="#4A1521" rotation={-2} className="w-20" />
            </div>

            {/* Deckled Edge Top */}
            <TornPaperRippedEdge position="top" paperColor="#F3E8D8" />

            <div
              className="relative bg-[#F3E8D8] px-6 py-5 shadow-2xl text-left border-x-2 border-[#A88553]"
              style={{
                backgroundImage: `
                  linear-gradient(to bottom, transparent 94%, rgba(168, 133, 83, 0.22) 94%),
                  radial-gradient(circle at 50% 50%, rgba(168, 133, 83, 0.1) 0%, transparent 60%)
                `,
                backgroundSize: '100% 2.1rem, 100% 100%',
                backgroundPosition: '0 0.8rem, 0 0',
                boxShadow: '0 12px 25px -4px rgba(45, 18, 23, 0.25), inset 0 0 25px rgba(168, 133, 83, 0.15)',
              }}
            >
              {/* Paper Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-cinzel text-[10px] font-bold text-[#4A1521] uppercase tracking-widest flex items-center gap-1">
                  <Feather size={11} className="text-[#A88553]" />
                  Secarik Kertas #{currentReason.id}
                </span>
                <span className="text-[9px] font-sans px-2 py-0.5 rounded-full bg-[#E5D3BC] text-[#4A1521] uppercase tracking-wider font-bold border border-[#A88553]/50">
                  {currentReason.category}
                </span>
              </div>

              {/* Natural Handwritten Reason */}
              <p className="font-handwriting text-2xl sm:text-3xl text-[#2D1217] leading-[2.1rem] tracking-wide my-2">
                &ldquo;{currentReason.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-[#A88553]/40 text-[11px] font-caveat">
                <span className="text-[#2D1217] italic">Tertulis dari lubuk hati terdalam</span>
                <span className="font-bold text-[#4A1521] flex items-center gap-1 text-sm">
                  <Heart size={12} fill="currentColor" /> Love you always
                </span>
              </div>
            </div>

            {/* Deckled Edge Bottom */}
            <TornPaperRippedEdge position="bottom" paperColor="#F3E8D8" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
