import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, ZoomIn, X, Calendar, MapPin, Sparkles, Heart } from 'lucide-react';
import { YOUR_RANDOM_PHOTOS } from '../data/content';
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

export const YourRandomSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  return (
    <section
      id="your-random-section"
      className="relative py-16 px-3 sm:px-4 bg-[#F3E8D8] bg-parchment text-[#2D1217] border-t-2 border-[#A88553]/60 overflow-hidden"
    >
      {/* Vintage decorative elements */}
      <div className="absolute top-4 right-3 opacity-40 pointer-events-none">
        <VintageButterfly size={44} />
      </div>
      <div className="absolute bottom-8 left-2 opacity-35 pointer-events-none -rotate-12">
        <VintageButterfly size={36} />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Header - Vintage Art Gallery */}
        <div className="text-center mb-8 relative">
          <div className="flex justify-center items-center gap-2 mb-2">
            <WashiTape color="#4A1521" rotation={-1.5} className="w-24" />
            <VelvetBow size={26} color="#4A1521" />
            <WashiTape color="#4A1521" rotation={1.5} className="w-24" />
          </div>

          <div className="inline-block mb-1">
            <HangTag label="SECTION 05" sublabel="Kerandoman My Binni Gweh" />
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mt-1 mb-1">
            Fav Ekspresi Pesek
          </h2>
          <p className="text-xs text-[#2D1217] font-cormorant italic max-w-xs mx-auto">
            Sejuta Ekspresimu dalam 8 pin Terfavorit menurut orang yang buat semua ini.
          </p>
        </div>

        {/* Vintage Art Gallery Wall - 8 Crumpled Torn Paper Exhibits */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {YOUR_RANDOM_PHOTOS.map((photo, index) => {
            const rot = photo.rotation || (index % 2 === 0 ? -1.5 : 1.5);

            return (
              <motion.div
                key={photo.id}
                id={`random-photo-${photo.id}`}
                onClick={() => setActivePhoto(photo)}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group relative cursor-pointer select-none"
                style={{
                  transform: `rotate(${rot}deg)`,
                }}
              >
                {/* Washi Tape / Clip on top of paper */}
                {index % 3 === 0 ? (
                  <div className="absolute -top-3 left-3 z-30">
                    <VintagePaperClip />
                  </div>
                ) : (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20">
                    <WashiTape
                      color={photo.tapeColor || '#4A1521'}
                      rotation={index % 2 === 0 ? -3 : 3}
                      className="w-14"
                    />
                  </div>
                )}

                {/* Torn Paper Deckled Top */}
                <TornPaperRippedEdge position="top" paperColor="#E5D3BC" />

                {/* Wrinkled Textured Paper Body with Crumpled Stain & Vintage Border */}
                <div
                  className="relative bg-[#E5D3BC] p-2.5 sm:p-3 shadow-xl border-x-2 border-[#A88553] transition-all"
                  style={{
                    backgroundImage: `
                      radial-gradient(ellipse at 30% 25%, rgba(168, 133, 83, 0.16) 0%, transparent 50%),
                      radial-gradient(ellipse at 75% 80%, rgba(74, 21, 33, 0.1) 0%, transparent 50%),
                      linear-gradient(to bottom, transparent 94%, rgba(168, 133, 83, 0.22) 94%)
                    `,
                    backgroundSize: '100% 100%, 100% 100%, 100% 1.8rem',
                    backgroundPosition: '0 0, 0 0, 0 0.4rem',
                    boxShadow:
                      '0 12px 20px -4px rgba(45, 18, 23, 0.25), inset 0 0 20px rgba(168, 133, 83, 0.15)',
                  }}
                >
                  {/* Photo Canvas with Vintage Art Frame & JTK Tone */}
                  <div className="relative aspect-square overflow-hidden rounded bg-[#2D1217] mb-2 border border-[#A88553] shadow-inner">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover jtk-gallery-tone group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#4A1521]/15 group-hover:bg-transparent transition-colors" />

                    {/* Museum Exhibit Badge */}
                    <div className="absolute top-1.5 left-1.5 bg-[#4A1521]/90 text-[#A88553] text-[8px] font-cinzel font-bold px-1.5 py-0.5 rounded shadow border border-[#A88553]/50">
                      EXHIBIT #{index + 1}
                    </div>

                    <div className="absolute bottom-1 right-1 bg-black/60 text-[#A88553] p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={11} />
                    </div>
                  </div>

                  {/* Exhibit Caption in Natural Handwriting */}
                  <div className="text-center px-0.5">
                    <p className="font-caveat text-xl sm:text-2xl font-bold text-[#4A1521] leading-tight truncate">
                      {photo.title}
                    </p>
                    <p className="font-handwriting text-base text-[#2D1217] line-clamp-2 mt-0.5 leading-snug">
                      {photo.caption}
                    </p>

                    <div className="flex items-center justify-between text-[8px] font-cinzel text-[#4A1521] mt-1.5 pt-1 border-t border-[#A88553]/50 font-bold">
                      <span className="truncate max-w-[70px]">{photo.date}</span>
                      <span className="text-[#4A1521] flex items-center gap-0.5">
                        <Heart size={8} fill="currentColor" /> Candid
                      </span>
                    </div>
                  </div>
                </div>

                {/* Torn Paper Deckled Bottom */}
                <TornPaperRippedEdge position="bottom" paperColor="#E5D3BC" />
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-[10px] text-[#4A1521] font-sans mt-6 font-semibold">
          Jangan mara mara yak, ini yang bisa aku  lakuin buat hari ultahmu jauh jauh hari.
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

              <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-[#E5D3BC] border-2 border-[#A88553]">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover jtk-gallery-tone"
                />
              </div>

              <div className="text-center">
                <span className="text-[9px] font-cinzel uppercase tracking-widest text-[#4A1521] font-bold">
                  Arsip Galeri Seni • Candid Spesial
                </span>
                <h3 className="font-caveat text-3xl text-[#4A1521] font-bold mt-0.5">
                  {activePhoto.title}
                </h3>
                <p className="font-handwriting text-2xl text-[#2D1217] mt-1 mb-3 leading-snug">
                  &ldquo;{activePhoto.caption}&rdquo;
                </p>

                <div className="flex justify-center items-center gap-4 text-xs text-[#4A1521] font-sans border-t border-[#A88553]/40 pt-2 font-semibold">
                  {activePhoto.date && (
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar size={12} className="text-[#A88553]" /> {activePhoto.date}
                    </span>
                  )}
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
