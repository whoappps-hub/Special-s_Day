import { PhotoItem, ReasonItem, SongItem, FlowerItem } from '../types';

export const APP_CONFIG = {
  correctPin: '05102005',
  partnerName: 'Sayangku',
  senderName: 'Opang...',
  birthdayDateFormatted: '5 Oktober 2005',
  targetYear: 2026,
  targetMonth: 9, // 0-indexed: October is 9
  targetDay: 5,
};

// 8 Curated Aesthetic Photos for "Your Random"
export const YOUR_RANDOM_PHOTOS: PhotoItem[] = [
  {
    id: 'rnd-1',
    url: '/images/r.afternangis.jpeg',
    title: 'After Nangis',
    caption: 'Aduan pertamamu ketika kenapa-napa',
    date: '12 November 2025',
    location: 'Kamar Pondok',
    rotation: -2,
    tapeColor: '#b87d8a',
  },
  {
    id: 'rnd-2',
    url: '/images/r.manyun.jpeg',
    title: 'kyutnyooo',
    caption: 'Mirip Pio yang di Pio kan',
    date: '29 Agustus 2026',
    location: 'Kamar Kost',
    rotation: 3,
    tapeColor: '#c5a059',
  },
  {
    id: 'rnd-3',
    url: '/images/r.minom.jpeg',
    title: 'Apaniii',
    caption: 'Potret Orang Bandel Yang diomongin Jangan Minum Es.',
    date: '5 September 2026',
    location: 'Konter',
    rotation: -1.5,
    tapeColor: '#4a0e17',
  },
  {
    id: 'rnd-4',
    url: '/images/r.nguap.jpeg',
    title: 'Hoammmm',
    caption: 'Nguapnya orang pesek bikin keliatan tambah pesek 😂',
    date: '30 Desember 2025',
    location: 'PWK Time',
    rotation: 2.5,
    tapeColor: '#8e3e50',
  },
  {
    id: 'rnd-5',
    url: '/images/r.nyiumketek.jpeg',
    title: 'Harumnya',
    caption: 'Dengan aroma harum yang menyebar dan Dicium hingga ketiduran.',
    date: '11 July 2026',
    location: 'Kamar Kost',
    rotation: -3,
    tapeColor: '#c5a059',
  },
  {
    id: 'rnd-6',
    url: '/images/r.pameridung.jpeg',
    title: 'Peseknya Ilang',
    caption: 'Real life boleh pesek, tapi di filter jangan.',
    date: '17 Mei 2026',
    location: 'Kamar Kost',
    rotation: 1.5,
    tapeColor: '#b87d8a',
  },
  {
    id: 'rnd-7',
    url: '/images/r.pinkhoror.jpeg',
    title: 'Horrorable',
    caption: 'Diantara banyaknya Jumscare, ini yang paling kaget.',
    date: '10 Desember 2025',
    location: 'Kamar Pondok',
    rotation: -2,
    tapeColor: '#4a0e17',
  },
  {
    id: 'rnd-8',
    url: '/images/r.ponimiring.jpeg',
    title: 'Gabisa berkata',
    caption: 'Cuma bisa ngakak ngeliat foto ini.',
    date: '4 Februari 2026',
    location: 'Kamar Pondok',
    rotation: 2,
    tapeColor: '#c5a059',
  },
    {
    id: 'rnd-9',
    url: '/images/r.sokyut.jpeg',
    title: 'Paling Natural & 😚',
    caption: 'Saat itu waktu dibelakang dengan bulliyan orang orang dongo.',
    date: '14 Februari 2025',
    location: 'Kelas Dakwah',
    rotation: 2,
    tapeColor: '#c5a059',
  },
    {
    id: 'rnd-10',
    url: '/images/r.turu.jpeg',
    title: 'Tidurnya Pesek',
    caption: 'Tidurnya orang orang lelah bekerja dengan tatapan peseknya.',
    date: '11 July 2026',
    location: 'Kamar Kost',
    rotation: 2,
    tapeColor: '#c5a059',
  },
];

// Exactly 22 Photos for "Lika Liku Kita (22 foto - semua langsung)"
// Structured like a real scrapbook with milestone stories, dates, torn paper vibe!
export const LIKA_LIKU_KITA_PHOTOS: PhotoItem[] = [
  {
    id: 'll-1',
    url: '/images/1L-awal.jpeg',
    title: '1. Awal Cerita Kita',
    caption: 'Hari pertama kita bercanda, masih sama-sama malu dan grogi mau ngobrol apa.',
    date: '16 September 2025',
    location: 'Kelas Dakwah',
    rotation: -1.5,
  },
  {
    id: 'll-2',
    url: '/images/2L-sleepcall.jpeg',
    title: '2. SleeCall Anti Absen',
    caption: 'Detik ini aku sadar, aku bakal jatuh cinta sedalam-dalamnya sama kamu.',
    date: '5 Desember 2025',
    location: 'Kamar Masing-Masing',
    rotation: 2,
  },
  {
    id: 'll-3',
    url: '/images/3L-gandeng.jpeg',
    title: '3. Mulai Gandeng Tangan',
    caption: 'Dari saat itu, tangan kita saling berpegangan tanpa perlu berkata.',
    date: '14 Desember 2025',
    location: 'Kelas Dakwah',
    rotation: -2.5,
  },
  {
    id: 'll-4',
    url: '/images/4L-candisoba.jpeg',
    title: '4. Before diusir Satpam',
    caption: 'Candi Soba jadi tempat pertama melihat kita diusir satpam.',
    date: '17 Januari 2026',
    location: 'Candi Soba',
    rotation: 1.8,
  },
  {
    id: 'll-5',
    url: '/images/5L-afterrapatbph.jpeg',
    title: '5. Laras Asri Waktu Itu',
    caption: 'Laras asri waktu itu, saat kita duduk berdua di setelah bersama BPH FAKDA.',
    date: '09 Februari 2026',
    location: 'Hotel Laras Asri',
    rotation: -1,
  },
  {
    id: 'll-6',
    url: '/images/6L-afterundip.jpeg',
    title: '6. Kegabutan Pertama ke Undip',
    caption: 'Kegabutan pertama ke Undip, dengan pulang kepanikan motor mogok.',
    date: '15 Februari 2025',
    location: 'Didepan Alfamart Bergas',
    rotation: 2.2,
  },
  {
    id: 'll-7',
    url: '/images/7L-mixueerror.jpeg',
    title: '7. Mixue Dengan Segala Errornya',
    caption: 'Mixue dengan segala errornya, Tapi seru juga.',
    date: '1 April 2026',
    location: 'Mixue Cabang Sana gatau lupa',
    rotation: -2,
  },
  {
    id: 'll-8',
    url: '/images/8L-kotalama.jpeg',
    title: '8. Kotal Lama Waktu Itu',
    caption: 'Kotal lama waktu itu, saat kita duduk berdua di setelah bersama Seharian Bersama.',
    date: '4 April 2026',
    location: 'Kota Lama, Semarang',
    rotation: 1.5,
  },
  {
    id: 'll-9',
    url: '/images/9L-jkt.jpeg',
    title: '9. Awal Mula Drop In Jakarta',
    caption: 'Kamu memaksakan diri buat mengikuti acara, dan itu adalah waspadaku dan ngetreet pertama kali ke orang yang aku mulai sayang.',
    date: '15 April 2026',
    location: 'Jakarta',
    rotation: -1.8,
  },
  {
    id: 'll-10',
    url: '/images/10L-rs.jpeg',
    title: '10. Jaga Kesehatanmu Ya',
    caption: 'Jaga kesehatanmu ya, karena kamu penting bagiku.',
    date: '17 April 2026',
    location: 'Rumah Sakit Umum Salatiga',
    rotation: 2,
  },
  {
    id: 'll-11',
    url: '/images/11L-ps.jpeg',
    title: '11. PS Date pertama',
    caption: 'Aku gatau kalo  kamu gasuka bermain game, tapi aku suka lihat kamu bermain dan tidur waktu itu.',
    date: '24 April 2026',
    location: 'Next Level PS Salatiga',
    rotation: -2.2,
  },
  {
    id: 'll-12',
    url: '/images/12L-curug.jpeg',
    title: '12. Curug Kala Kala Itu',
    caption: 'Aku cuma bisa senyum dan diam waktu pertama kali main dengan selain orang orang dongo.',
    date: '2 Mei 2026',
    location: 'Curug Getasan',
    rotation: 1.7,
  },
  {
    id: 'll-13',
    url: '/images/13L-senjoyo.jpeg',
    title: '13. Play Aer di Senjoyo',
    caption: 'Aku suka saat kita bermain di sana, meski seringkali ikan yang didapet pada lari.',
    date: '21 Mei 2026',
    location: 'Kali Senjoyo',
    rotation: -1.6,
  },
  {
    id: 'll-14',
    url: '/images/14L-ungaran.jpeg',
    title: '14. Muncak Pertam sama orang yang aku sayang',
    caption: 'Kita berdiri di puncak, saling memandang, dan aku tahu bahwa cinta kita akan bertahan lama.',
    date: '30 Mei 2026',
    location: 'MT. Ungaran Via Mawar',
    rotation: 2.1,
  },
  {
    id: 'll-15',
    url: '/images/15L-firstflower.jpeg',
    title: '15. Bunga Pertama yang Aku Berikan',
    caption: 'Bunga yang kuinginkan untukmu, bukan karena hari spesial, tapi karena kamu adalah hari spesial bagiku.',
    date: '1 Agustus 2026',
    location: 'Depan SMANTI Salatiga',
    rotation: -2.3,
  },
  {
    id: 'll-16',
    url: '/images/16L-spideytime.jpeg',
    title: '16. Spideys Time',
    caption: 'Waktu itu kamu dengan karakter favorimu, dan kita melihatnya ke Semarang.',
    date: '4 Agustus 2026',
    location: 'Mall Semarang',
    rotation: 1.4,
  },
  {
    id: 'll-17',
    url: '/images/17L-emaktime.jpeg',
    title: '17. Makasih Ya',
    caption: 'Orang pertama yang ketemu mamah dan itu memorable menurutku.',
    date: '10 Juni 2026',
    location: 'Baloeng Gadjah',
    rotation: -1.7,
  },
  {
    id: 'll-18',
    url: '/images/18L-anakembakyul.jpeg',
    title: '18. Day 1 Ketemu Adiknya Bapak',
    caption: 'Kala itu kamu dengan ketemunya bapak pertama kali dan adiknya bapak.',
    date: '16 Agustus 2026',
    location: 'Rumah Mbak Yuli',
    rotation: 2.4,
  },
  {
    id: 'll-19',
    url: '/images/19L-kelastime.jpeg',
    title: '19. Kelas JOKO Time',
    caption: 'Dosen dengan nuanasa Joko awokawok.',
    date: '4 September 2026',
    location: 'Kelas JOKO',
    rotation: -1.9,
  },
  {
    id: 'll-20',
    url: '/images/20L-sepedatime.jpeg',
    title: '20. Basikal Time',
    caption: 'Sepeda Kala itu jadi suatu hal yang gabisa aku lupain karna pertama kalinya aku main sepeda sama pacar sendiri cieee.',
    date: '12 September 2026',
    location: 'Keliling Salatiga',
    rotation: 1.8,
  },
  {
    id: 'll-21',
    url: '/images/21L-kosttime.jpeg',
    title: '21. Pelyuk Kamu Time',
    caption: 'Peluk Kamu Adalah hal ternyaman.',
    date: '28 September 2026',
    location: 'Kost Biru',
    rotation: -2.1,
  },
  {
    id: 'll-22',
    url: '/images/22L-ketauantime.jpeg',
    title: '22. Apalah Ini',
    caption: 'Niat Surprise Malah ketauan.',
    date: '28 Oktober 2026',
    location: 'Nasi Padang Favoritmu',
    rotation: 1.5,
  },
];

// Film Strip Memories (Cinematic reel)
export const FILM_STRIP_PHOTOS: PhotoItem[] = [
  {
    id: 'film-1',
    url: '/video/senjoyomotor.mp4',
    type: 'video',
    title: 'Frame 01',
    caption: 'Ngisuk After Kokka',
    date: '27.12.25',
  },
  {
    id: 'film-2',
    url: '/video/candisoba.mp4',
    type: 'video',
    title: 'Frame 02',
    caption: 'Before Diusir Satpam',
    date: '17.01.26',
  },
    {
    id: 'film-3',
    url: '/video/kotalama.mp4',
    type: 'video',
    title: 'Frame 03',
    caption: 'Bersenja Gurau',
    date: '19.04.26',
  },
  {
    id: 'film-4',
    url: '/video/mainaer.mp4',
    type: 'video',
    title: 'Frame 04',
    caption: 'Perang Aer Sampe Encok',
    date: '25.05.26',
  },
  {
    id: 'film-5',
    url: '/video/kelas.mp4',
    type: 'video',
    title: 'Frame 05',
    caption: 'Aslinya Berempat Tapi Bedua jeeee',
    date: '05.10.24',
  },
  {
    id: 'film-6',
    url: '/video/Spidey.mp4',
    type: 'video',
    title: 'Frame 06',
    caption: 'Film Favoritmu',
    date: '04.08.26',
  },
];

// ══════════════════════════════════════════════════════════════════════════
// SECTION 02: FOTO BIDADARIKU (BISA ANDA GANTI DENGAN FOTO ANDA SENDIRI DI VS CODE)
// ══════════════════════════════════════════════════════════════════════════
export const SECTION_02_HER_PHOTO = {
  // Ganti URL ini dengan URL foto pasangan Anda atau file lokal (contoh: '/images/ayang.jpg')
  url: '/images/vvdenganflower.jpeg',
  title: 'Peseknya sapa ini?',
  subtitle: 'Senyum Sayang, no no mara mara',
  note: 'Setiap detik bersamamu adalah berkah terindah. Senyuman manismu selalu menjadi alasan terbaikku untuk bersyukur setiap hari.',
  date: '24 September 2026',
  alt: 'Potret Sayangku dengan Bunganya',
};


// Reasons Jar items
export const REASONS_LIST: ReasonItem[] = [
  {
    id: 1,
    text: 'Caramu tersenyum dan matamu yang sedikit menyipit saat kamu benar-benar bahagia.',
    category: 'sweet',
  },
  {
    id: 2,
    text: 'Kebaikan hatimu yang begitu tulus, bahkan pada kucing liar di jalanan.',
    category: 'deep',
  },
  {
    id: 3,
    text: 'Gaya bicaramu yang cerewet saat menceritakan hal kecil yang kamu sukai.',
    category: 'sweet',
  },
  {
    id: 4,
    text: 'Tanganmu yang selalu pas saat kita saling bergenggaman, hangat dan menenangkan.',
    category: 'sweet',
  },
  {
    id: 5,
    text: 'Kesabaranmu yang luar biasa saat menghadapiku yang kadang keras kepala.',
    category: 'deep',
  },
  {
    id: 6,
    text: 'Caramu ngambek lucu saat lapar atau ngantuk, bikin gemas setengah mati.',
    category: 'funny',
  },
  {
    id: 7,
    text: 'Ketulusanmu mendengarkan keluh kesahku tanpa pernah menghakimi.',
    category: 'appreciation',
  },
  {
    id: 8,
    text: 'Wangi khas rambutmu yang selalu tertinggal di jaket dan bikin kangen.',
    category: 'sweet',
  },
  {
    id: 9,
    text: 'Bagaimana kamu selalu menyemangatiku saat aku hampir menyerah pada mimpiku.',
    category: 'deep',
  },
  {
    id: 10,
    text: 'Suaramu saat mengucap "hati-hati di jalan ya sayang" yang bikin hariku aman.',
    category: 'sweet',
  },
  {
    id: 11,
    text: 'Tawa renyahmu yang bisa mengubah hari terberatku jadi terasa ringan seketika.',
    category: 'sweet',
  },
  {
    id: 12,
    text: 'Keberadaanmu yang membuat kata "rumah" bukan lagi sebuah tempat, tapi adalah kamu.',
    category: 'deep',
  },
  {
    id: 13,
    text: 'Karena di antara 8 miliar manusia di bumi, hatiku selalu memilih kamu setiap hari.',
    category: 'appreciation',
  },
  {
    id: 14,
    text: 'Caramu memesan makanan favorit dengan antusiasme anak kecil yang menggemaskan.',
    category: 'funny',
  },
  {
    id: 15,
    text: 'Karena mencintaimu adalah hal paling alami dan terindah yang pernah terjadi di hidupku.',
    category: 'deep',
  },
];

// Romantic Song options (3 requested songs with custom synth melodies and user MP3 upload support)
export const PLAYLIST: SongItem[] = [
  {
    id: 'song-1',
    title: 'Kota Ini Tak Sama Tanpamu',
    artist: 'Nadhif Basalamah',
    url: '/music/kotainitak.mp3',
  },
  {
    id: 'song-2',
    title: 'Penjaga Hati',
    artist: 'Nadhif Basalamah',
    url: '/music/penjagahati.mp3',
  },
  {
    id: 'song-3',
    title: 'Shape of My Heart',
    artist: 'Backstreet Boys',
    url: '/music/shapeofmyheart.mp3',
  },
];

export const DEFAULT_LOVE_LETTER = `Untuk Pesek Kesayanganku,

Selamat ulang tahun yang paling membahagiakan di dunia, sayangku.

Hari ini, tanggal 5 Oktober 2026, bukan sekadar pergantian angka usia. Hari ini adalah hari di mana semesta menghadiahkan sosok yang paling luar biasa ke dunia ini—sosok yang beberapa tahun kemudian datang dan mengubah seluruh duniaku menjadi penuh warna, kehangatan, dan arti yang sesungguhnya.

Melihat kembali lika-liku perjalanan kita, dari hari pertama kita yang kikuk, tawa saat kehujanan, sampai saat-saat kita saling menguatkan di tengah air mata, aku menyadari satu hal pasti: tidak ada satu detik pun yang ingin aku tukar. Bersamamu, hal-hal sederhana berubah jadi keajaiban. Menatap matamu selalu terasa seperti pulang ke rumah.

Terima kasih sudah lahir ke dunia ini. Terima kasih sudah memilihku untuk menjadi teman jalanmu, pendengar ceritamu, dan orang yang beruntung memanggilmu sebagai cinta hidupku.

Di usiamu yang baru ini, doaku melangit untukmu: semoga hatimu selalu dipenuhi damai, langkahmu selalu diiringi kemudahan, senyum indahmu tidak pernah pudar, dan semua mimpi-mimpi hebatmu terwujud satu per satu. Dan semoga, di setiap ulang tahunmu yang berikutnya, aku tetap berada di sini—menggenggam tanganmu seerat ini.

Aku mencintaimu hari ini, esok, dan di setiap lembar kisah kita yang takkan pernah usai.

Dengan segenap cintaku yang paling tulus,
Yang selalu mencintaimu selamanya ❤️`;
