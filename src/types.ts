export type ScreenStep = 'loading' | 'pin' | 'gift' | 'main';

export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  date?: string;
  location?: string;
  rotation?: number;
  tapeColor?: string;
  type?: 'image' | 'video';
}

export interface ReasonItem {
  id: number;
  text: string;
  category: 'sweet' | 'funny' | 'deep' | 'appreciation';
}

export interface SongItem {
  id: string;
  title: string;
  artist: string;
  url: string;
  isCustom?: boolean;
}

export interface FlowerItem {
  id: string;
  name: string;
  meaning: string;
  color: string;
  message: string;
  imageUrl?: string;
  tag?: string;
}
