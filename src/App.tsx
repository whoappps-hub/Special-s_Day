import React, { useRef, useState, useCallback } from 'react';
import { ScreenStep } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { PinLockScreen } from './components/PinLockScreen';
import { GiftBoxScreen } from './components/GiftBoxScreen';
import { BackgroundMusic } from './components/BackgroundMusic';
import { HeroSection } from './components/HeroSection';
import { BouquetSection } from './components/BouquetSection';
import { LoveLetterSection } from './components/LoveLetterSection';
import { FilmStripSection } from './components/FilmStripSection';
import { YourRandomSection } from './components/YourRandomSection';
import { LikaLikuKitaSection } from './components/LikaLikuKitaSection';
import { VintageCalendarSection } from './components/VintageCalendarSection';
import { ReasonsJarSection } from './components/ReasonsJarSection';
import { FinalWishSection } from './components/FinalWishSection';
import { PLAYLIST } from './data/content';

export default function App() {
  const [currentStep, setCurrentStep] = useState<ScreenStep>('loading');
  const [musicAutoStart, setMusicAutoStart] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleLoadingComplete = () => {
    setCurrentStep('pin');
  };

  const handlePinSuccess = () => {
    setCurrentStep('gift');
  };

  const triggerMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().then(() => {
        setMusicAutoStart(true);
      }).catch(() => {
        setMusicAutoStart(true);
      });
    }
  }, []);

  const handleGiftOpen = useCallback(() => {
    setCurrentStep('main');
  }, []);

  return (
    <div className="min-h-screen bg-[#F3E8D8] text-[#2D1217] font-sans selection:bg-[#4A1521] selection:text-[#F3E8D8] relative">
      {/* Global audio element — always mounted */}
      <audio ref={audioRef} src={PLAYLIST[0].url} preload="auto" />

      {/* 1. Loading (auto) */}
      {currentStep === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* 2. PIN Lock (input: 05102005) */}
      {currentStep === 'pin' && (
        <PinLockScreen onSuccess={handlePinSuccess} />
      )}

      {/* 3. Gift Box (tap to open) */}
      {currentStep === 'gift' && (
        <GiftBoxScreen onOpen={handleGiftOpen} onUserGesture={triggerMusic} />
      )}

      {/* ════ SCROLL MULAI (Step Main) ════ */}
      {currentStep === 'main' && (
        <main className="w-full max-w-lg mx-auto bg-[#F3E8D8] shadow-2xl relative min-h-screen border-x-2 border-[#A88553]/60">
          {/* Persistent Background Music Widget */}
          <BackgroundMusic audioRef={audioRef} isPlaying={musicAutoStart} />

          {/* 1. Hero */}
          <HeroSection />

          {/* 2. Bouquet */}
          <BouquetSection />

          {/* 3. Love Letter */}
          <LoveLetterSection />

          {/* 4. Film Strip */}
          <FilmStripSection />

          {/* 5. Your Random (8 foto) */}
          <YourRandomSection />

          {/* 6. Lika Liku Kita (22 foto - semua langsung) */}
          <LikaLikuKitaSection />

          {/* 7. Vintage Calendar (5 Oktober 2026) */}
          <VintageCalendarSection />

          {/* 8. Reasons Jar */}
          <ReasonsJarSection />

          {/* 9. Final Wish + Fireworks */}
          <FinalWishSection />
        </main>
      )}
    </div>
  );
}
