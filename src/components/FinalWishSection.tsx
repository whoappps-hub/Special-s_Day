import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, RotateCcw } from 'lucide-react';
import { APP_CONFIG } from '../data/content';
import {
  WaxSeal,
  VintageStamp,
  VintageButterfly,
  WashiTape,
  TornPaperRippedEdge,
  VintagePaperClip,
  VelvetBow,
  HangTag,
  AceOfHearts,
} from './VintageElements';

export const FinalWishSection: React.FC = () => {
  const [candleBlown, setCandleBlown] = useState(false);
  const [isFiringFireworks, setIsFiringFireworks] = useState(false);

  const launchFireworks = () => {
    setIsFiringFireworks(true);

    const end = Date.now() + 3000;
    const colors = ['#4A1521', '#2D1217', '#A88553', '#F3E8D8', '#E5D3BC'];

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        setIsFiringFireworks(false);
      }
    };

    frame();
  };

  const handleBlowCandle = () => {
    if (!candleBlown) {
      setCandleBlown(true);
      launchFireworks();
    } else {
      setCandleBlown(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="final-wish-section"
      className="relative py-20 px-4 bg-[#E5D3BC] bg-parchment text-[#2D1217] border-t-2 border-[#A88553]/60 overflow-hidden"
    >
      <div className="max-w-md mx-auto relative z-10 text-center">
        {/* Top elements */}
        <div className="mb-4 flex justify-center items-center gap-3">
          <VelvetBow size={32} color="#4A1521" />
          <VintageStamp price="05 OCT" title="Eternal Love" date="05.10.2005" />
          <VelvetBow size={32} color="#4A1521" />
        </div>

        <div className="mb-2">
          <HangTag label="SECTION 09" sublabel="Harapan Terakhir & Doa Ulang Tahun" />
        </div>

        <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mt-1 mb-2">
          Make a Wish, Sayangku 🎂
        </h2>
        <p className="text-xs text-[#2D1217] font-cormorant italic max-w-xs mx-auto mb-8">
          Pejamkan matamu sejenak, buat satu permohonan tulus dalam hati, lalu tiup lilin ini...
        </p>

        {/* Interactive Birthday Cake with Candle */}
        <motion.div
          id="birthday-cake-card"
          onClick={handleBlowCandle}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative bg-[#F3E8D8] p-6 rounded-2xl border-2 border-[#A88553] shadow-2xl max-w-xs mx-auto mb-8 cursor-pointer select-none"
        >
          {/* Cake Illustration */}
          <div className="relative h-44 flex flex-col items-center justify-end pb-2">
            {/* Candle */}
            <div className="relative flex flex-col items-center mb-1">
              {/* Flame */}
              <AnimatePresence>
                {!candleBlown ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 1.15, 0.95, 1.1, 1],
                      y: [0, -1, 1, 0],
                    }}
                    exit={{ opacity: 0, scale: 0, y: -10 }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="w-4 h-6 rounded-full bg-gradient-to-t from-[#4A1521] via-orange-400 to-[#A88553] shadow-[0_0_15px_#A88553] relative flex items-center justify-center -mb-0.5"
                  >
                    <div className="w-1.5 h-2 rounded-full bg-white/90" />
                  </motion.div>
                ) : (
                  /* Smoke puff when blown */
                  <motion.div
                    initial={{ opacity: 0.8, y: 0, scale: 0.8 }}
                    animate={{ opacity: 0, y: -25, scale: 1.8 }}
                    transition={{ duration: 1.2 }}
                    className="text-xs text-gray-500 font-bold"
                  >
                    ☁️
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Candle Stick */}
              <div className="w-2.5 h-10 bg-gradient-to-r from-[#A88553] via-[#F3E8D8] to-[#A88553] rounded-t-sm shadow-sm border border-[#4A1521]/30" />
            </div>

            {/* Cake Top Layer (Velvet Deep Burgundy Frosting) */}
            <div className="w-28 h-10 bg-gradient-to-r from-[#4A1521] via-[#3a1019] to-[#2D1217] rounded-t-xl border-x border-t border-[#2D1217] shadow-md relative flex items-center justify-around px-2">
              <span className="text-[9px] text-[#A88553]">🌷</span>
              <span className="text-[9px] text-[#A88553]">✨</span>
              <span className="text-[9px] text-[#A88553]">🌷</span>
            </div>

            {/* Cake Middle Cream */}
            <div className="w-36 h-3 bg-[#E5D3BC] border-x border-[#A88553] shadow-inner" />

            {/* Cake Base Layer */}
            <div className="w-40 h-14 bg-gradient-to-r from-[#4A1521] via-[#3a1019] to-[#2D1217] rounded-b-xl border border-[#2D1217] shadow-lg relative flex items-center justify-center">
              <span className="font-cinzel text-[9px] tracking-widest text-[#A88553] font-black">
                HAPPY BIRTHDAY
              </span>
            </div>

            {/* Gold Cake Plate */}
            <div className="w-48 h-3 bg-gradient-to-r from-[#A88553] via-[#E5D3BC] to-[#A88553] rounded-full shadow-md mt-0.5 border border-[#4A1521]/40" />
          </div>

          <p className="text-xs font-cinzel text-[#4A1521] font-bold mt-2 flex items-center justify-center gap-1">
            {candleBlown ? (
              <span className="text-[#4A1521]">Lilin Telah Ditiup! Permohonan Terkabul ✨</span>
            ) : (
              <span>Ketuk untuk Meniup Lilin 🕯️</span>
            )}
          </p>
          <p className="text-[10px] text-[#2D1217] font-sans mt-0.5">
            {candleBlown ? 'Ketuk lagi jika ingin menyalakan kembali' : 'Make your wish now'}
          </p>
        </motion.div>

        {/* Birthday Prayers & Blessings - Natural Parchment Paper with Real Handwriting */}
        <div className="relative my-8 max-w-sm mx-auto">
          {/* Paper Clip */}
          <div className="absolute -top-3.5 left-6 z-20">
            <VintagePaperClip />
          </div>

          {/* Washi Tape */}
          <div className="absolute -top-2.5 right-8 z-20">
            <WashiTape color="#4A1521" rotation={2} className="w-16" />
          </div>

          {/* Ripped Edge Top */}
          <TornPaperRippedEdge position="top" paperColor="#F3E8D8" />

          {/* Paper Sheet Body */}
          <div
            className="relative bg-[#F3E8D8] px-6 py-6 shadow-2xl text-center border-x-2 border-[#A88553]"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, transparent 94%, rgba(168, 133, 83, 0.22) 94%),
                radial-gradient(circle at 50% 30%, rgba(168, 133, 83, 0.1) 0%, transparent 60%)
              `,
              backgroundSize: '100% 2.2rem, 100% 100%',
              backgroundPosition: '0 0.8rem, 0 0',
              boxShadow: '0 12px 25px -4px rgba(45, 18, 23, 0.25), inset 0 0 30px rgba(168, 133, 83, 0.15)',
            }}
          >
            <div className="flex justify-center mb-2">
              <WaxSeal size="md" icon="rose" />
            </div>
            <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#4A1521] uppercase mb-2">
              Secarik Doa Tulus Untukmu
            </h3>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#2D1217] leading-[2.2rem] tracking-wide mb-3">
              &ldquo;Semoga di usia yang baru ini, setiap tetes lelahmu berbuah manis, hatimu selalu dilapangkan, dan senyum terindahmu tetap bersinar menerangi duniaku. Aku berjanji akan selalu ada di sampingmu dalam suka maupun duka.&rdquo;
            </p>
            <p className="font-dancing text-2xl sm:text-3xl text-[#4A1521] font-bold mt-3">
              I love you today, tomorrow, and forever and ever. ♥
            </p>
          </div>

          {/* Ripped Edge Bottom */}
          <TornPaperRippedEdge position="bottom" paperColor="#F3E8D8" />
        </div>

        {/* Action Button (Fireworks Celebration) */}
        <div className="flex flex-col gap-3 max-w-xs mx-auto mb-10">
          {/* Fireworks Button */}
          <motion.button
            id="fireworks-btn"
            onClick={launchFireworks}
            disabled={isFiringFireworks}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3.5 px-6 rounded-full bg-[#4A1521] text-[#F3E8D8] hover:bg-[#2D1217] active:scale-95 shadow-xl border-2 border-[#A88553] font-cinzel text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Sparkles size={16} className="text-[#A88553] animate-spin" style={{ animationDuration: '4s' }} />
            <span>Nyalakan Kembang Api Cinta 🎆</span>
          </motion.button>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-[#4A1521] hover:text-[#2D1217] font-cinzel font-bold transition-colors"
        >
          <RotateCcw size={13} />
          <span>Kembali ke Halaman Paling Atas</span>
        </button>

        <p className="text-[10px] text-[#4A1521] font-cormorant italic mt-6 font-semibold">
          Dibuat dengan sepenuh hati khusus untuk hari ulang tahun bidadari tersayang • 2026
        </p>
      </div>
    </section>
  );
};
