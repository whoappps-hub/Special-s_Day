import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, ZoomIn, X, Calendar, MapPin, Play, Pause } from 'lucide-react';
import { FILM_STRIP_PHOTOS } from '../data/content';
import { PhotoItem } from '../types';
import { WashiTape, VintageButterfly, VelvetBow, HangTag } from './VintageElements';

export const FilmStripSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const stripRef = useRef<HTMLDivElement>(null);

  // Auto-scroll loop effect replicating a vintage movie film reel
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.75; // Smooth continuous crawl speed

    const step = () => {
      if (isAutoScrolling && el) {
        el.scrollLeft += speed;
        // If scrolled past half (where duplicated content begins), seamlessly loop back
        if (el.scrollLeft >= (el.scrollWidth - el.clientWidth) / 2) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animId);
  }, [isAutoScrolling]);

  // Duplicate photos array for continuous seamless infinite reel
  const extendedPhotos = [...FILM_STRIP_PHOTOS, ...FILM_STRIP_PHOTOS];

  return (
    <section
      id="film-strip-section"
      className="relative py-16 px-2 sm:px-4 bg-[#E5D3BC] bg-parchment text-[#2D1217] border-t-2 border-[#A88553]/60 overflow-hidden"
    >
      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-2">
            <WashiTape color="#4A1521" rotation={-1.5} className="w-24" />
            <VelvetBow size={26} color="#4A1521" />
            <WashiTape color="#4A1521" rotation={1.5} className="w-24" />
          </div>

          <div className="inline-block mb-1">
            <HangTag label="SECTION 04" sublabel="Rol Film Kenangan Nostalgia" />
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mt-1 mb-1">
            Film Strip Kita
          </h2>
          <p className="text-xs text-[#2D1217] font-cormorant italic max-w-xs mx-auto">
            Meskipun hanya beberapa frame, tapi setiap momen di rol film ini selalu bikin tersenyum dan berkata "hug me".
          </p>

          {/* Pause / Play Auto-scroll toggle */}
          <div className="mt-3 flex justify-center">
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F3E8D8] border border-[#A88553] text-[10px] font-cinzel text-[#4A1521] font-bold shadow-xs hover:bg-[#E5D3BC] transition-colors"
            >
              {isAutoScrolling ? <Pause size={11} /> : <Play size={11} />}
              <span>{isAutoScrolling ? 'Jeda Rol Film' : 'Putar Otomatis Rol Film'}</span>
            </button>
          </div>
        </div>

        {/* Cinematic Film Strip Container with continuous horizontal scroll */}
        <div
          ref={stripRef}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
          onTouchStart={() => setIsAutoScrolling(false)}
          onTouchEnd={() => setTimeout(() => setIsAutoScrolling(true), 2000)}
          className="relative -mx-2 sm:mx-0 overflow-x-auto pb-4 scrollbar-none select-none cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="inline-flex flex-col bg-[#2D1217] p-3 sm:p-4 rounded-xl shadow-2xl border-2 border-[#A88553]">
            {/* Top Film Sprocket Holes */}
            <div className="w-full h-3 mb-3 flex items-center justify-between opacity-85">
              <div className="w-full h-2.5 film-perforations rounded-sm" />
            </div>

            {/* Frames Row */}
            <div className="flex items-center gap-3.5 px-2">
              {extendedPhotos.map((photo, index) => (
                <div
                  key={`${photo.id}-${index}`}
                  onClick={() => setActivePhoto(photo)}
                  className="group relative flex-shrink-0 w-44 sm:w-52 bg-[#1b090d] p-2 rounded cursor-pointer transition-transform duration-300 hover:scale-[1.03] border border-[#A88553]/60 shadow-lg"
                >
                  {/* Frame Counter */}
                  <div className="flex items-center justify-between text-[8px] font-mono text-[#A88553] mb-1.5 px-0.5 font-bold">
                    <span>ARCHIVE NOSTALGIA</span>
                    <span>▶ FRAME #{String((index % FILM_STRIP_PHOTOS.length) + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Photo Frame with JTK Vintage Tone */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded bg-black border border-[#4A1521]">
                    {photo.type === 'video' ? (
                      <video
                        src={photo.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover jtk-tone group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover jtk-tone group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-[#4A1521]/20 group-hover:bg-transparent transition-colors" />
                    {photo.type === 'video' && (
                      <div className="absolute top-1.5 left-1.5 bg-[#4A1521]/80 text-[#F3E8D8] p-1 rounded-full">
                        <Play size={10} fill="currentColor" />
                      </div>
                    )}
                    <div className="absolute bottom-1.5 right-1.5 bg-[#2D1217]/80 text-[#A88553] p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={12} />
                    </div>
                  </div>

                  {/* Caption & Date under frame */}
                  <div className="mt-2 text-center">
                    <p className="text-[12px] font-caveat text-[#F3E8D8] truncate font-bold">
                      {photo.title}
                    </p>
                    <p className="text-[8px] font-mono text-[#A88553] tracking-widest mt-0.5">
                      {photo.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Film Sprocket Holes */}
            <div className="w-full h-3 mt-3 flex items-center justify-between opacity-85">
              <div className="w-full h-2.5 film-perforations rounded-sm" />
            </div>
          </div>
        </div>

        <p className="text-center text-[10px] text-[#4A1521] font-sans mt-2 font-semibold">
          Sedikit demi sedikit, setiap frame di rol film ini adalah kenangan kita yang tak ternilai. 
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
              className="relative max-w-sm w-full bg-[#F3E8D8] rounded-2xl p-4 border-2 border-[#A88553] shadow-2xl text-[#2D1217]"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute -top-3 -right-3 w-8 h-8 bg-[#4A1521] text-[#F3E8D8] rounded-full flex items-center justify-center border border-[#A88553] shadow-lg hover:bg-[#2D1217]"
              >
                <X size={16} />
              </button>

              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-black border border-[#A88553]">
                {activePhoto.type === 'video' ? (
                  <video
                    src={activePhoto.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover jtk-tone"
                  />
                ) : (
                  <img
                    src={activePhoto.url}
                    alt={activePhoto.title}
                    className="w-full h-full object-cover jtk-tone"
                  />
                )}
              </div>

              <div className="text-center">
                <h3 className="font-caveat text-3xl text-[#4A1521] font-bold">
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
