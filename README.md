# The Living Threads

*An Interactive Editorial Documentary & Cultural Digital Initiative exploring Sumba Ikat*

---

**The Living Threads** adalah sebuah website dokumenter editorial interaktif yang dirancang sebagai ruang apresiasi digital untuk menjaga, merayakan, dan merenungkan warisan budaya tenun **Sumba Ikat**. Melalui perpaduan tata letak editorial yang bersih dan animasi berbasis waktu (GSAP ScrollTrigger), website ini mengajak pengunjung untuk memperlambat tempo membaca, mengamati detail proses pembuatan, dan mendalami filosofi spiritual di balik mahakarya leluhur Sumba.

Proyek ini dibangun sebagai representasi digital dari inisiatif pelestarian budaya yang mendukung **SDG 11: Kota dan Komunitas yang Berkelanjutan**, dengan cara mendokumentasikan pengetahuan tradisional (intangible cultural heritage) agar tetap relevan bagi generasi mendatang.

---

## 📖 Alur Narasi (Narrative Structure)

Website ini dirancang mengalir secara linier tanpa interupsi navigasi yang mengganggu konsentrasi pembaca. Seluruh perjalanan terbagi menjadi enam bab utama:

1.  **Hero (Framing & Opening):** Pengenalan awal inisiatif digital pelestarian tenun dan penegasan judul utama sebelum pengunjung memulai perjalanan editorial.
2.  **Nature (Origin of Material):** Mengamati proses paling awal di mana alam menyediakan serat kapas dan tanaman pewarna organik (seperti tarum dan mengkudu) yang diproses secara sabar.
3.  **Craft (The Process of Weaving):** Visualisasi gerakan tangan penenun saat memilin benang dan mengoperasikan alat tenun tradisional, menonjolkan energi fisik dari kerja keras manusia.
4.  **Meaning (Philosophical Silence):** Bab kontemplatif yang mengajak pengunjung melihat motif tenun secara detail untuk memahami hubungan spiritual antara penenun, alam semesta, dan leluhur.
5.  **Living Heritage (Generational Bond):** Potret nyata bagaimana pengetahuan menenun ini ditransfer dari generasi tua ke generasi muda melalui rasa percaya dan observasi harian.
6.  **Hope (Ending Without Ending):** Penutup dokumenter yang memudarkan batas visual gambar menjadi ruang putih tanpa akhir, melepaskan pembaca kembali ke rutinitas harian dengan refleksi mendalam.

---

## 🛠️ Teknologi yang Digunakan (Tech Stack)

*   **Framework Utama:** [React 19](https://react.dev/) dengan [TypeScript](https://www.typescriptlang.org/)
*   **Alat Pengembangan & Build:** [Vite 8](https://vite.dev/)
*   **Tata Letak & Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Sistem Animasi & Scroll:** [GSAP (GreenSock)](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger)
*   **Kualitas Kode:** [Oxlint](https://oxc.rs/)

---

## 🚀 Panduan Menjalankan Project (How to Run)

Karena proyek ini menggunakan React dan memiliki tahapan kompilasi, ikuti langkah-langkah di bawah ini untuk menjalankannya secara lokal:

### 1. Prasyarat (Prerequisites)
Pastikan komputer Anda telah terinstal **Node.js** (rekomendasi versi 18 ke atas) dan paket manajer **npm**. Cek instalasi dengan perintah:
```bash
node -v
npm -v
```

### 2. Mengunduh Dependensi
Buka terminal pada direktori root proyek ini, kemudian jalankan perintah untuk mengunduh semua modul yang diperlukan:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Local Development)
Untuk menjalankan website dalam mode pengembangan lokal dengan fitur *Hot Module Replacement* (HMR), jalankan perintah:
```bash
npm run dev
```
Setelah aktif, silakan buka peramban (*browser*) Anda dan akses alamat lokal yang muncul di terminal (default: `http://localhost:5173`).

### 4. Membangun Berkas Produksi (Production Build)
Untuk melakukan kompilasi kode TypeScript dan mengoptimalkan aset-aset statis ke dalam folder siap pakai, jalankan perintah:
```bash
npm run build
```
Perintah ini akan menghasilkan direktori `/dist` berisi berkas HTML, CSS, dan JavaScript statis yang siap dideploy ke berbagai layanan hosting statis (Vercel, Netlify, GitHub Pages, dll.).

### 5. Menguji Hasil Build Secara Lokal
Anda dapat mempratinjau hasil build produksi secara lokal untuk menguji performa dan kesesuaian aset sebelum benar-benar dideploy dengan menjalankan perintah:
```bash
npm run preview
```

---

## 📂 Struktur Direktori Proyek

*   `/src/app`: Mengoordinasikan seluruh alur halaman dan memuat komponen utama (`App.tsx`).
*   `/src/components`: Komponen modular dasar yang digunakan berulang kali:
    *   `layout`: Manajemen struktur section statis (`Section`) dan batas container (`Container`).
    *   `typography`: Sistem tipografi yang konsisten (`Heading`, `Text`, `Prose`).
*   `/src/sections`: Modul-modul bab dokumenter (`Hero`, `Nature`, `Craft`, `Meaning`, `LivingHeritage`, `Hope`).
*   `/src/animations`: Logika konfigurasi GSAP, *smooth scrolling*, dan manajemen performa animasi.

---

## ♿ Optimalisasi Aksesibilitas & Performa

*   **Dukungan Reduced Motion:** Sistem animasi secara otomatis dinonaktifkan jika sistem operasi pengguna mengaktifkan opsi *Reduced Motion* demi menjaga kenyamanan aksesibilitas bagi semua pengguna.
*   **Semantic HTML:** Kerangka dokumen disusun dengan struktur HTML5 semantik (`<main>`, `<section>`, `<h1>`, `<h2>`, dan `<p>`) guna memastikan pembaca layar (*screen reader*) dapat melacak struktur informasi dengan benar.
*   **Pencegahan CLS (Cumulative Layout Shift):** Setiap wadah gambar dan media penampung dirancang menggunakan rasio aspek yang eksplisit sejak awal untuk menghindari lompatan konten ketika aset sedang dimuat.
