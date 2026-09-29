import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Heart, Sparkles, Feather } from 'lucide-react';
import { APP_CONFIG } from '../data/content';
import {
  WaxSeal,
  VintageStamp,
  WashiTape,
  VintageButterfly,
  TornPaperRippedEdge,
  VintagePaperClip,
  VelvetBow,
  HangTag,
} from './VintageElements';

export const VintageCalendarSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(5); // Default 5 Oktober (her birthday)

  // October 2026 constants
  const daysInMonth = 31;
  const startDayOffset = 4; // Thursday

  const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  // Romantic interactive notes for selected dates in October
  const getDateNote = (day: number) => {
    if (day === 5) {
      return {
        title: '5 Oktober 2026 • Hari Kelahiran Bidadariku',
        text: 'Tidak ada tanggal di kalender mana pun yang lebih aku syukuri selain hari kelahiranmu. Di hari ini, semesta mengirimkan anugerah terindah untuk hidupku!',
        isBirthday: true,
      };
    } else if (day === 1) {
      return {
        title: `${day} Oktober 2026 • Awal Bulan Penuh Berkah`,
        text: 'Bulan Oktober selalu menjadi bulan paling istimewa karena di bulan inilah manusia paling manis yang aku cintai lahir ke dunia.',
        isBirthday: false,
      };
    } else if (day === 10) {
      return {
        title: `${day} Oktober 2026 • Jejak Manis Hari Kita`,
        text: 'Setiap tanggal dan detik bersamamu selalu terasa seperti kencan pertama yang penuh debaran manis.',
        isBirthday: false,
      };
    } else if (day === 31) {
      return {
        title: `${day} Oktober 2026 • Akhir Bulan Yang Tetap Manis`,
        text: 'Bulan boleh berganti, musim boleh berlalu, tapi cintaku padamu tidak akan pernah berkurang sedikit pun.',
        isBirthday: false,
      };
    } else {
      return {
        title: `${day} Oktober 2026 • Hari Bahagia Bersamamu`,
        text: `Hari ke-${day} di bulan kelahiranmu. Semoga senyuman manismu selalu merekah dan hari-harimu dipenuhi berkah tiada henti!`,
        isBirthday: false,
      };
    }
  };

  const activeNote = getDateNote(selectedDate);

  return (
    <section
      id="calendar-section"
      className="relative py-16 px-3 sm:px-4 bg-[#E5D3BC] bg-parchment text-[#2D1217] border-t-2 border-[#A88553]/60 overflow-hidden"
    >
      {/* Vintage decorative elements */}
      <div className="absolute top-6 right-3 opacity-35 pointer-events-none">
        <VintageButterfly size={40} />
      </div>
      <div className="absolute bottom-10 left-2 opacity-30 pointer-events-none rotate-12">
        <VintageButterfly size={34} />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 relative">
          <div className="flex justify-center items-center gap-2 mb-2">
            <WashiTape color="#4A1521" rotation={-1.5} className="w-24" />
            <VelvetBow size={26} color="#4A1521" />
            <WashiTape color="#4A1521" rotation={1.5} className="w-24" />
          </div>

          <div className="inline-block mb-1">
            <HangTag label="SECTION 07" sublabel="Kalender Bersejarah • 5 Oktober 2026" />
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#4A1521] mt-1 mb-1">
            Vintage Calendar
          </h2>
          <p className="text-xs text-[#2D1217] font-cormorant italic max-w-xs mx-auto">
            Bulan Oktober 2026 yang diabadikan dalam kertas arsip antik. Ketuk setiap tanggal untuk membaca pesan cinta tersembunyi.
          </p>
        </div>

        {/* Vintage Calendar Sheet Container with Organic Parchment Style */}
        <div className="relative bg-[#F3E8D8] p-5 sm:p-6 rounded-2xl border-2 border-[#A88553] shadow-2xl mb-6 select-none">
          {/* Calendar Header Band */}
          <div className="flex items-center justify-between border-b-2 border-[#A88553]/50 pb-3 mb-4">
            <div>
              <span className="font-cinzel text-[10px] tracking-widest text-[#4A1521] uppercase font-bold">
                Kalender Abadi Cinta
              </span>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#4A1521] leading-none mt-0.5">
                Oktober 2026
              </h3>
            </div>

            {/* Vintage Stamp on top-right */}
            <div className="rotate-2">
              <VintageStamp price="05 OCT" title="Special Day" date="2026" />
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 text-center font-cinzel text-[10px] sm:text-xs text-[#4A1521] font-bold pb-2 border-b border-[#A88553]/40">
            {dayNames.map((d, i) => (
              <div key={d} className={i === 0 ? 'text-red-700' : ''}>
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid - Fully Interactive */}
          <div className="grid grid-cols-7 gap-1.5 pt-3">
            {/* Empty slots before Oct 1 */}
            {Array.from({ length: startDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="h-9" />
            ))}

            {/* Dates 1 to 31 */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dateNumber = i + 1;
              const isSpecialDay = dateNumber === 5; // 5 Oktober
              const isSelected = selectedDate === dateNumber;

              return (
                <motion.button
                  key={`day-${dateNumber}`}
                  id={`cal-date-${dateNumber}`}
                  onClick={() => setSelectedDate(dateNumber)}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.94 }}
                  className={`h-9 sm:h-10 rounded-lg relative text-xs font-cinzel transition-all flex flex-col items-center justify-center cursor-pointer ${
                    isSpecialDay
                      ? 'bg-gradient-to-b from-[#4A1521] to-[#2D1217] text-[#A88553] font-black shadow-lg ring-2 ring-[#A88553] scale-105 z-10'
                      : isSelected
                      ? 'bg-[#E5D3BC] text-[#4A1521] font-bold ring-2 ring-[#4A1521] shadow-sm'
                      : 'text-[#2D1217] hover:bg-[#E5D3BC]/60'
                  }`}
                >
                  <span className={isSpecialDay ? 'text-xs font-black' : ''}>{dateNumber}</span>

                  {/* Special Highlight for 5th of October (Birthday) */}
                  {isSpecialDay && (
                    <>
                      <div className="absolute -top-1 -right-1 text-[#A88553] animate-ping opacity-75">
                        <Sparkles size={10} />
                      </div>
                      <div className="text-[7px] text-[#A88553] font-bold leading-none -mt-0.5">
                        ♥
                      </div>
                    </>
                  )}
                </motion.button>
              );
            })}
          </div>

          <p className="text-center text-[10px] text-[#4A1521] font-sans mt-4 font-semibold">
            Ketuk tanggal mana saja untuk membuka catatan hari tersebut ✨
          </p>

          {/* Natural Handwritten Memo inside Calendar - Interactive with Selected Date */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDate}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="relative mt-5 mb-1 text-left"
            >
              <div className="absolute -top-3 left-4 z-20">
                <VintagePaperClip />
              </div>
              <div className="absolute -top-2 right-6 z-10">
                <WashiTape
                  color={activeNote.isBirthday ? '#4A1521' : '#A88553'}
                  rotation={-1.5}
                  className="w-16"
                />
              </div>

              <TornPaperRippedEdge position="top" paperColor="#E5D3BC" />

              <div
                className="bg-[#E5D3BC] px-5 py-4 border-x-2 border-[#A88553] shadow-sm"
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent 94%, rgba(168, 133, 83, 0.22) 94%)`,
                  backgroundSize: '100% 2.1rem',
                  backgroundPosition: '0 0.8rem',
                }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Heart
                    size={13}
                    className={
                      activeNote.isBirthday
                        ? 'text-[#4A1521] fill-[#4A1521] animate-pulse'
                        : 'text-[#4A1521]'
                    }
                  />
                  <span className="font-cinzel text-[11px] font-bold text-[#4A1521] uppercase tracking-wider">
                    {activeNote.title}
                  </span>
                </div>

                <p className="font-handwriting text-2xl text-[#2D1217] leading-[2.1rem] tracking-wide">
                  &ldquo;{activeNote.text}&rdquo;
                </p>
              </div>

              <TornPaperRippedEdge position="bottom" paperColor="#E5D3BC" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
