import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Delete, Sparkles, KeyRound } from 'lucide-react';
import { APP_CONFIG } from '../data/content';
import { WaxSeal, VintageStamp, WashiTape, VelvetBow, HangTag } from './VintageElements';

interface PinLockScreenProps {
  onSuccess: () => void;
}

export const PinLockScreen: React.FC<PinLockScreenProps> = ({ onSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const targetPin = APP_CONFIG.correctPin; // 05102005
  const pinLength = targetPin.length; // 8 digits (DDMMYYYY: 05102005)

  const handleKeyPress = (num: string) => {
    if (pin.length < pinLength && !isUnlocked) {
      const nextPin = pin + num;
      setPin(nextPin);
      setError(false);

      if (nextPin.length === pinLength) {
        verifyPin(nextPin);
      }
    }
  };

  const handleDelete = () => {
    if (pin.length > 0 && !isUnlocked) {
      setPin(pin.slice(0, -1));
      setError(false);
    }
  };

  const handleClear = () => {
    if (!isUnlocked) {
      setPin('');
      setError(false);
    }
  };

  const verifyPin = (inputPin: string) => {
    if (inputPin === targetPin) {
      setIsUnlocked(true);
      setTimeout(() => {
        onSuccess();
      }, 700);
    } else {
      setError(true);
      setTimeout(() => {
        setPin('');
        setError(false);
      }, 900);
    }
  };

  // Physical Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin, isUnlocked]);

  return (
    <div
      id="pin-lock-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F3E8D8] bg-parchment px-4 select-none overflow-y-auto py-6 text-[#2D1217]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm flex flex-col items-center text-center bg-[#E5D3BC] p-6 sm:p-8 rounded-3xl border-2 border-[#A88553] shadow-2xl relative"
        style={{
          boxShadow: '0 20px 40px -10px rgba(45, 18, 23, 0.4), inset 0 0 30px rgba(168, 133, 83, 0.15)',
        }}
      >
        {/* Coquette Bow on top */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <VelvetBow size={38} color="#4A1521" />
        </div>

        {/* Wax seal with lock icon */}
        <div className="relative mb-3 mt-1">
          <WaxSeal size="md" icon="fleur" />
          <div className="absolute -bottom-1 -right-1 bg-[#4A1521] text-[#A88553] p-1.5 rounded-full border border-[#A88553] shadow">
            {isUnlocked ? <Unlock size={14} /> : <Lock size={14} />}
          </div>
        </div>

        <p className="font-cinzel text-[11px] uppercase tracking-[0.22em] text-[#4A1521] font-bold">
          KUNCI RAHASIA ARSIP CINTA
        </p>
        <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#4A1521] mt-0.5 mb-1">
          Masukkan Kode Tanggal Spesial
        </h2>
        <p className="text-xs text-[#2D1217] font-cormorant italic mb-4">
          CLUE: PIN LAPTOPKU(OPANG)
        </p>

        {/* PIN Indicators (8 digits) */}
        <motion.div
          animate={error ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 mb-5 flex-wrap"
        >
          {Array.from({ length: pinLength }).map((_, index) => {
            const isFilled = index < pin.length;
            return (
              <div
                key={index}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 flex items-center justify-center border ${
                  isFilled
                    ? 'bg-[#4A1521] border-[#4A1521] scale-110 shadow-md ring-1 ring-[#A88553]'
                    : 'bg-[#F3E8D8] border-[#A88553]/70'
                } ${error ? 'bg-red-800 border-red-800' : ''}`}
              >
                {isFilled && (
                  <span className="text-[8px] text-[#A88553] font-bold leading-none">♥</span>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-[#4A1521] font-bold mb-3"
            >
              Kode salah sayang, coba masukkan tanggal lahirmu ya! ❤️
            </motion.p>
          )}
        </AnimatePresence>

        {/* Numeric Keypad in Vintage Dark Academia / Gold Palette */}
        <div className="grid grid-cols-3 gap-2.5 w-full max-w-[280px] mb-4">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
            <button
              key={digit}
              onClick={() => handleKeyPress(digit)}
              className="h-12 sm:h-13 rounded-full bg-[#F3E8D8] border border-[#A88553] shadow-sm hover:border-[#4A1521] hover:bg-[#E5D3BC] active:scale-95 transition-all flex flex-col items-center justify-center text-xl font-cinzel font-bold text-[#4A1521]"
            >
              {digit}
            </button>
          ))}

          <button
            onClick={handleClear}
            className="h-12 sm:h-13 rounded-full bg-transparent hover:bg-[#F3E8D8]/50 text-[#4A1521] active:scale-95 transition-all flex items-center justify-center text-xs font-cinzel tracking-wider font-bold"
          >
            Hapus
          </button>

          <button
            onClick={() => handleKeyPress('0')}
            className="h-12 sm:h-13 rounded-full bg-[#F3E8D8] border border-[#A88553] shadow-sm hover:border-[#4A1521] hover:bg-[#E5D3BC] active:scale-95 transition-all flex flex-col items-center justify-center text-xl font-cinzel font-bold text-[#4A1521]"
          >
            0
          </button>

          <button
            onClick={handleDelete}
            className="h-12 sm:h-13 rounded-full bg-transparent hover:bg-[#F3E8D8]/50 text-[#4A1521] active:scale-95 transition-all flex items-center justify-center"
            aria-label="Hapus digit"
          >
            <Delete size={20} />
          </button>
        </div>

        {/* Romantic Hint Button */}
        <div className="mt-0.5">
          <button
            onClick={() => setShowHint(!showHint)}
            className="inline-flex items-center gap-1.5 text-xs text-[#4A1521] hover:text-[#2D1217] underline decoration-dotted font-medium transition-colors"
          >
            <KeyRound size={13} className="text-[#A88553]" />
            {showHint ? 'Sembunyikan Petunjuk' : 'Lupa PIN? Klik petunjuk di sini'}
          </button>

          {showHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-2 p-2.5 bg-[#F3E8D8] border border-[#A88553] rounded-lg text-xs text-[#2D1217] max-w-xs text-center shadow-sm"
            >
              <p className="font-semibold flex items-center justify-center gap-1 text-[#4A1521]">
                <Sparkles size={12} className="text-[#A88553]" />
                Petunjuk: Tanggal Lahir Kamu (05-10-2005)
              </p>
              <p className="text-[11px] text-[#2D1217] mt-0.5">
                Ketik: <span className="font-bold font-mono tracking-widest text-[#4A1521]">05102005</span>
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
