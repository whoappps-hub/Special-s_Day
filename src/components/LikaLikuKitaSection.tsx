import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookHeart,
  ZoomIn,
  X,
  Calendar,
  MapPin,
  Camera,
  Heart,
  Sparkles,
} from 'lucide-react';
import { LIKA_LIKU_KITA_PHOTOS } from '../data/content';
import { PhotoItem } from '../types';
import {
  WashiTape,
  VintageStamp,
  VintageButterfly,
  TornPaperRippedEdge,
  VintagePaperClip,
  VelvetBow,
  HangTag,
} from './VintageElements';

export const LikaLikuKitaSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  // 22 photos listed directly
  const photos = LIKA_LIKU_KITA_PHOTOS;

  return (
    <section
      id="lika-liku-section"
      className="relative py-16 px-3 sm:px-4 bg-[#E5D3BC] bg-parchment text-[#2D1217] border-t-2 border-[#A88553]/60 overflow-hidden"
    >
      {/* Floating Vintage Butterfly and Museum Accents */}
      <div className="absolute top-10 left-3 opacity-35 pointer-events-none">
        <VintageButterfly size={46} />
      </div>
      <div className="absolute top-1/3 right-2 opacity-30 pointer-events-none rotate-45">
        <VintageButterfly size={38} />
      </div>
      <div className="absolute top-2/3 left-2 opacity-25 pointer-events-none -rotate-12">
        <VintageButterfly size={42} />
      </div>
      <div className="absolute bottom-12 right-4 opacity-30 pointer-events-none">
        <VintageButterfly size={36} />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 relative">
          <div className="flex justify-center items-center gap-2 mb-2">
            <WashiTape color="#4A1521" rotation={2} className="w-24" />
            <VelvetBow size={26} color="#4A1521" />
            <WashiTape color="#4A1521" rotation={-2} className="w-24" />
          </div>

          <div className="inline-block mb-1">
            <HangTag label="SECTION 06" sublabel="Diary Scrapbook • 22 Lembar Kenangan" />
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mt-1 mb-1">
            Lika Liku Perjalanan Kita
          </h2>
          <p className="text-xs text-[#2D1217] font-cormorant italic max-w-xs mx-auto">
            Nuansa buku harian museum klasik: 22 lembar catatan abstrak yang dibungkus sobekan kertas kusut, ditemani ornamen vintage & warna JTK hangat.
          </p>
        </div>

        {/* 22 Scrapbook Diary Entries: Abstract Organic Layout with Torn Paper Framing */}
        <div className="space-y-6">
          {photos.map((photo, index) => {
            const isEven = index % 2 === 0;
            const rotationDegree = isEven ? (index % 4 === 0 ? -1.8 : -1.2) : (index % 4 === 1 ? 1.6 : 1.2);
            const tapeColors = ['#4A1521', '#A88553', '#2D1217', '#4A1521', '#A88553'];
            const chosenTape = tapeColors[index % tapeColors.length];

            return (
              <motion.div
                key={photo.id}
                id={`diary-card-${photo.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="group relative cursor-pointer select-none mx-1"
                style={{
                  transform: `rotate(${rotationDegree}deg)`,
                }}
                onClick={() => setActivePhoto(photo)}
              >
                {/* Vintage Washi Tape or Paper Clip */}
                {index % 4 === 0 ? (
                  <div className="absolute -top-3 left-6 z-30">
                    <VintagePaperClip />
                  </div>
                ) : index % 4 === 2 ? (
                  <div className="absolute -top-3.5 right-6 z-30">
                    <VintagePaperClip />
                  </div>
                ) : (
                  <div
                    className={`absolute -top-2.5 z-20 ${
                      isEven ? 'left-6' : 'right-6'
                    }`}
                  >
                    <WashiTape
                      color={chosenTape}
                      rotation={isEven ? -3 : 3}
                      className="w-16"
                    />
                  </div>
                )}

                {/* Torn Paper Deckled Top Edge */}
                <TornPaperRippedEdge position="top" paperColor="#F3E8D8" />

                {/* Scrapbook Sheet Body - Crumpled Kraft & Lined Paper Texture */}
                <div
                  className="relative bg-[#F3E8D8] p-4 sm:p-5 shadow-xl border-x-2 border-[#A88553] transition-all"
                  style={{
                    backgroundImage: `
                      radial-gradient(ellipse at 15% 20%, rgba(168, 133, 83, 0.15) 0%, transparent 40%),
                      radial-gradient(ellipse at 85% 80%, rgba(74, 21, 33, 0.1) 0%, transparent 40%),
                      linear-gradient(to bottom, transparent 94%, rgba(168, 133, 83, 0.22) 94%)
                    `,
                    backgroundSize: '100% 100%, 100% 100%, 100% 2.1rem',
                    backgroundPosition: '0 0, 0 0, 0 0.6rem',
                    boxShadow:
                      '0 12px 25px -4px rgba(45, 18, 23, 0.25), inset 0 0 25px rgba(168, 133, 83, 0.15)',
                  }}
                >
                  {/* Stamp or Vintage Camera Icon Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-[#4A1521] font-cinzel text-[10px] font-bold tracking-widest uppercase">
                      <Camera size={12} className="text-[#A88553]" />
                      <span>Lembar #{index + 1} • Arsip Alur Kita</span>
                    </div>

                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#E5D3BC] text-[#4A1521] font-bold border border-[#A88553]/60">
                      {photo.date || 'Kenangan Indah'}
                    </span>
                  </div>

                  {/* Photo Container with Organic Deckled Framing */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden bg-[#2D1217] mb-3 border border-[#A88553] shadow-md">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover jtk-gallery-tone group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#4A1521]/15 group-hover:bg-transparent transition-colors" />

                    <div className="absolute bottom-2 right-2 bg-[#2D1217]/85 text-[#A88553] p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={14} />
                    </div>
                  </div>

                  {/* Title & Handwritten Diary Reflection */}
                  <div>
                    <h3 className="font-caveat text-2xl sm:text-3xl font-bold text-[#4A1521] leading-tight">
                      {photo.title}
                    </h3>
                    <p className="font-handwriting text-lg sm:text-xl text-[#2D1217] leading-relaxed mt-0.5">
                      &ldquo;{photo.caption}&rdquo;
                    </p>

                    {/* Footer Info & Location */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#A88553]/40 text-xs text-[#4A1521] font-semibold">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-[#A88553]" /> {photo.date}
                        </span>
                        {photo.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="text-[#A88553]" /> {photo.location}
                          </span>
                        )}
                      </div>

                      <span className="font-caveat text-sm text-[#4A1521] flex items-center gap-1 font-bold">
                        <Heart size={11} fill="currentColor" /> Selalu
                      </span>
                    </div>
                  </div>
                </div>

                {/* Torn Paper Deckled Bottom Edge */}
                <TornPaperRippedEdge position="bottom" paperColor="#F3E8D8" />
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-[10px] text-[#4A1521] font-sans mt-8 font-semibold">
          Semua 22 kenangan tertata rapi dalam lembaran buku harian cinta kita 📖
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-[#2D1217]/90 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-[#F3E8D8] rounded-2xl p-4 sm:p-5 border-2 border-[#A88553] shadow-2xl text-[#2D1217]"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute -top-3 -right-3 w-8 h-8 bg-[#4A1521] text-[#F3E8D8] rounded-full flex items-center justify-center border border-[#A88553] shadow-lg hover:bg-[#2D1217]"
              >
                <X size={16} />
              </button>

              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-[#2D1217] border border-[#A88553]">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover jtk-gallery-tone"
                />
              </div>

              <div className="text-center">
                <span className="text-[9px] font-cinzel uppercase tracking-widest text-[#4A1521] font-bold">
                  Buku Harian Arsip Museum
                </span>
                <h3 className="font-caveat text-3xl text-[#4A1521] font-bold mt-0.5">
                  {activePhoto.title}
                </h3>
                <p className="font-handwriting text-2xl text-[#2D1217] mt-1 mb-3 leading-snug">
                  &ldquo;{activePhoto.caption}&rdquo;
                </p>

                <div className="flex justify-center items-center gap-4 text-xs text-[#4A1521] font-sans border-t border-[#A88553]/40 pt-2 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#A88553]" /> {activePhoto.date}
                  </span>
                  {activePhoto.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#A88553]" /> {activePhoto.location}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
