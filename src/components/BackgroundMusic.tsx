import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Disc3, Settings2, Plus, Check } from 'lucide-react';
import { PLAYLIST } from '../data/content';
import { SongItem } from '../types';

interface BackgroundMusicProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ audioRef, isPlaying: initialPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customSongs, setCustomSongs] = useState<SongItem[]>(PLAYLIST);
  const [newSongTitle, setNewSongTitle] = useState('');
  const [newSongUrl, setNewSongUrl] = useState('');
  const isPlayingRef = useRef(initialPlaying);

  const currentSong = customSongs[currentSongIndex] || customSongs[0];

  // Sync playing state
  useEffect(() => {
    if (initialPlaying) setIsPlaying(true);
  }, [initialPlaying]);

  const playAudio = async () => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // Keep latest playing state available to effects
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Handle song change
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (el.getAttribute('src') !== currentSong.url) {
      el.src = currentSong.url;
      el.load();
    }
    if (isPlayingRef.current) {
      el.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentSongIndex, customSongs]);

  // Auto-advance to next song when current one ends
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onEnded = () => {
      setCurrentSongIndex((i) => (i + 1) % customSongs.length);
      setIsPlaying(true);
    };
    el.addEventListener('ended', onEnded);
    return () => el.removeEventListener('ended', onEnded);
  }, [customSongs]);

  // Handle volume updates
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // File upload for custom song
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newSong: SongItem = {
        id: `custom-${Date.now()}`,
        title: file.name.replace(/\.[^/.]+$/, ''),
        artist: 'Lagu Pilihanmu',
        url: url,
      };
      setCustomSongs([newSong, ...customSongs]);
      setCurrentSongIndex(0);
      setIsPlaying(true);
    }
  };

  // Add custom URL
  const handleAddUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSongUrl.trim()) {
      const newSong: SongItem = {
        id: `url-${Date.now()}`,
        title: newSongTitle.trim() || 'Lagu Tautan Khusus',
        artist: 'Web Audio',
        url: newSongUrl.trim(),
      };
      setCustomSongs([newSong, ...customSongs]);
      setCurrentSongIndex(0);
      setIsPlaying(true);
      setNewSongUrl('');
      setNewSongTitle('');
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex flex-col items-end">
      <div className="flex items-center gap-2 bg-[#F3E8D8]/95 backdrop-blur-md border-2 border-[#A88553] px-3 py-1.5 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl">
        <button
          id="music-toggle-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          className="flex items-center gap-2 text-[#4A1521] focus:outline-none"
        >
          <div
            className={`w-7 h-7 rounded-full bg-[#4A1521] text-[#A88553] flex items-center justify-center shadow-inner border border-[#A88553] ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          >
            {isPlaying ? <Disc3 size={16} /> : <Music size={14} />}
          </div>
          <div className="text-left hidden sm:block max-w-[120px] truncate">
            <p className="text-[10px] font-cinzel font-bold text-[#4A1521] truncate leading-tight">
              {currentSong.title}
            </p>
            <p className="text-[9px] text-[#2D1217] font-cormorant italic truncate">
              {isPlaying ? 'Playing...' : 'Paused'}
            </p>
          </div>
        </button>

        {/* Quick Mute */}
        <button
          id="music-mute-btn"
          onClick={() => setIsMuted(!isMuted)}
          className="text-[#4A1521] hover:text-[#2D1217] p-1 transition-colors"
          aria-label="Mute toggle"
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>

        {/* Settings / Track list */}
        <button
          id="music-settings-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#4A1521] hover:text-[#2D1217] p-1 transition-colors"
          aria-label="Music settings"
        >
          <Settings2 size={15} />
        </button>
      </div>

      {/* Music Settings & Playlist Modal Popup */}
      {isMenuOpen && (
        <div className="mt-2 w-72 bg-[#F3E8D8] border-2 border-[#A88553] rounded-xl p-4 shadow-2xl text-[#2D1217] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-[#A88553]/40 pb-2 mb-3">
            <h3 className="font-cinzel text-xs font-bold text-[#4A1521] tracking-wider flex items-center gap-1.5">
              <Music size={13} className="text-[#A88553]" />
              Musik Latar Romantis
            </h3>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-xs text-[#4A1521] hover:text-[#2D1217] font-bold"
            >
              ✕
            </button>
          </div>

          {/* Volume slider */}
          <div className="mb-3">
            <div className="flex justify-between text-[11px] text-[#4A1521] mb-1 font-sans font-semibold">
              <span>Volume</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full accent-[#4A1521] h-1.5 bg-[#E5D3BC] rounded-lg cursor-pointer"
            />
          </div>

          {/* Playlist */}
          <div className="space-y-1.5 mb-3 max-h-36 overflow-y-auto pr-1">
            <p className="text-[10px] uppercase font-cinzel text-[#4A1521] tracking-wider mb-1 font-bold">
              Pilihan Lagu
            </p>
            {customSongs.map((song, idx) => (
              <button
                key={song.id}
                onClick={() => {
                  if (idx === currentSongIndex) {
                    playAudio();
                  } else {
                    setCurrentSongIndex(idx);
                    setIsPlaying(true);
                  }
                }}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs flex items-center justify-between transition-colors ${
                  idx === currentSongIndex
                    ? 'bg-[#4A1521] text-[#F3E8D8]'
                    : 'hover:bg-[#E5D3BC] text-[#4A1521]'
                }`}
              >
                <div className="truncate pr-2">
                  <p className="font-medium truncate">{song.title}</p>
                  <p className="text-[9px] opacity-75 font-cormorant italic truncate">
                    {song.artist}
                  </p>
                </div>
                {idx === currentSongIndex && <Check size={13} className="text-[#A88553] shrink-0" />}
              </button>
            ))}
          </div>

          {/* Custom Song Upload or URL */}
          <div className="pt-2 border-t border-[#A88553]/40">
            <p className="text-[10px] uppercase font-cinzel text-[#4A1521] tracking-wider mb-1.5 font-bold">
              Ganti Lagu Khusus Kalian
            </p>

            <label className="flex items-center justify-center gap-1.5 w-full py-1.5 bg-[#E5D3BC] hover:bg-[#d9c5ac] text-[#4A1521] text-[11px] font-bold rounded border border-dashed border-[#A88553] cursor-pointer transition-colors mb-2">
              <Plus size={13} />
              Upload Audio MP3 Sendiri
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            <form onSubmit={handleAddUrl} className="flex gap-1 text-[11px]">
              <input
                type="url"
                placeholder="Atau tautan audio .mp3"
                value={newSongUrl}
                onChange={(e) => setNewSongUrl(e.target.value)}
                className="flex-1 px-2 py-1 bg-[#fffdfa] border border-[#A88553] rounded text-[10px] focus:outline-none focus:border-[#4A1521]"
              />
              <button
                type="submit"
                className="px-2 py-1 bg-[#4A1521] text-[#F3E8D8] rounded text-[10px] font-bold hover:bg-[#2D1217]"
              >
                Pakai
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
