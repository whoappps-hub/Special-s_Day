import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { WaxSeal, VintageButterfly, VelvetBow, HangTag } from './VintageElements';

interface GiftBoxScreenProps {
  onOpen: () => void;
  onUserGesture?: () => void;
}

export const GiftBoxScreen: React.FC<GiftBoxScreenProps> = ({ onOpen, onUserGesture }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGift = () => {
    if (isOpening) return;
    setIsOpening(true);

    if (onUserGesture) onUserGesture();

    // Fire romantic confetti burst in criteria colors
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#4A1521', '#2D1217', '#A88553', '#F3E8D8', '#E5D3BC'],
      });

      // Secondary heart-style burst
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#4A1521', '#A88553', '#E5D3BC'],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#4A1521', '#A88553', '#E5D3BC'],
        });
      }, 250);
    } catch {
      // Confetti fallback
    }

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div
      id="gift-box-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F3E8D8] bg-parchment px-4 select-none text-center text-[#2D1217]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-sm w-full flex flex-col items-center"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 left-6 animate-pulse">
          <VintageButterfly size={34} />
        </div>
        <div className="absolute -top-6 right-6 animate-pulse" style={{ animationDelay: '1s' }}>
          <VintageButterfly size={28} />
        </div>

        <div className="mb-2">
          <HangTag label="KADO ULANG TAHUN" sublabel="Untuk Bidadari Tercantik" />
        </div>

        <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mb-1">
          Kotak Kado Kenangan
        </h2>
        <p className="text-xs sm:text-sm text-[#2D1217] font-cormorant italic max-w-xs mb-8">
          Sentuh kotak kado ini untuk membuka lembaran arsip cinta & musik latar kita...
        </p>

        {/* 3D-styled Interactive Velvet Deep Burgundy Gift Box with Warm Gold Ribbon */}
        <motion.div
          id="interactive-gift-box"
          onClick={handleOpenGift}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={
            isOpening
              ? { scale: [1, 1.15, 0.9], rotate: [0, -4, 4, 0] }
              : { y: [0, -8, 0] }
          }
          transition={
            isOpening
              ? { duration: 0.8 }
              : { repeat: Infinity, duration: 3, ease: 'easeInOut' }
          }
          className="relative cursor-pointer group select-none mb-8"
        >
          {/* Box Lid */}
          <motion.div
            animate={isOpening ? { y: -70, opacity: 0, rotate: -15 } : { y: 0 }}
            transition={{ duration: 0.7, ease: 'backIn' }}
            className="w-48 sm:w-56 h-14 bg-gradient-to-r from-[#4A1521] via-[#3a1019] to-[#2D1217] rounded-t-xl border-b-4 border-[#2D1217] shadow-2xl relative flex items-center justify-center z-10"
            style={{
              boxShadow: '0 10px 25px rgba(45, 18, 23, 0.45), inset 0 2px 3px rgba(229, 211, 188, 0.2)',
            }}
          >
            {/* Gold Ribbon Horizontal on Lid */}
            <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-[#A88553] via-[#dfba73] to-[#A88553] shadow-sm flex items-center justify-center border-x border-[#4A1521]/40" />

            {/* Velvet Bow on Top */}
            <div className="absolute -top-7 z-20 flex items-center justify-center">
              <VelvetBow size={42} color="#4A1521" />
            </div>
          </motion.div>

          {/* Box Body */}
          <div
            className="w-44 sm:w-52 h-36 bg-gradient-to-b from-[#4A1521] via-[#330e16] to-[#2D1217] rounded-b-xl mx-auto relative shadow-2xl overflow-hidden border border-[#A88553]/40"
            style={{
              boxShadow:
                '0 20px 35px rgba(45, 18, 23, 0.55), inset 0 2px 8px rgba(0,0,0,0.6)',
            }}
          >
            {/* Gold Ribbon Vertical */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-[#A88553] via-[#dfba73] to-[#A88553] border-x border-[#4A1521]/50 shadow-inner flex items-center justify-center">
              <Sparkles size={14} className="text-[#4A1521] animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            {/* Gold Tag Hanging */}
            <div className="absolute top-2 left-4 bg-[#E5D3BC] text-[#4A1521] px-2 py-0.5 rounded shadow text-[9px] font-cinzel font-bold border border-[#A88553]">
              Tap to Open
            </div>
          </div>
        </motion.div>

        {/* Romantic instruction */}
        <p className="font-cinzel text-xs text-[#4A1521] tracking-widest uppercase font-bold flex items-center gap-1.5 animate-bounce">
          <Heart size={12} fill="currentColor" /> Ketuk Kotak Untuk Membuka <Heart size={12} fill="currentColor" />
        </p>
      </motion.div>
    </div>
  );
};
