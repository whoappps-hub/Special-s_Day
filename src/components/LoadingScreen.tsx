import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { WaxSeal, VintageButterfly } from './VintageElements';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f7f2e7] bg-parchment px-6 text-center select-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-xs w-full flex flex-col items-center"
      >
        {/* Floating butterfly */}
        <div className="absolute -top-12 -right-2 animate-bounce" style={{ animationDuration: '3s' }}>
          <VintageButterfly size={36} />
        </div>

        {/* Vintage Embossed Wax Seal */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="mb-6 drop-shadow-xl"
        >
          <WaxSeal size="lg" icon="rose" />
        </motion.div>

        {/* Title */}
        <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#8e3e50] mb-2 font-semibold">
          A Special Birthday Memory
        </p>
        <h1 className="font-cormorant italic text-2xl sm:text-3xl text-[#4a0e17] font-semibold mb-3">
          Membuka Lembar Kenangan...
        </h1>
        <p className="font-cormorant italic text-sm text-[#74454e] max-w-[240px] mb-8 leading-relaxed">
          &ldquo;Memories become timeless, especially when spent with you.&rdquo;
        </p>

        {/* Vintage Styled Progress Bar */}
        <div className="w-full bg-[#e8dac6] h-2 rounded-full overflow-hidden p-0.5 border border-[#c5a059]/40 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#8e3e50] via-[#6b1d2f] to-[#4a0e17] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        <div className="flex justify-between items-center w-full mt-2 text-[10px] font-cinzel text-[#8e3e50] tracking-wider">
          <span>MEMUAT KASIH...</span>
          <span>{progress}%</span>
        </div>
      </motion.div>
    </div>
  );
};
