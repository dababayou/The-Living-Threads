# TENUNA: The Living Threads 🪡✨

**An Interactive Editorial Documentary & Cultural Digital Initiative exploring Sumba Ikat**

[![Live Demo](https://img.shields.io/badge/View%20Live%20Demo-TENUNA-8A3324?style=for-the-badge&logo=vercel)](https://dababayou.github.io/The-Living-Threads/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](#)

---

**TENUNA: The Living Threads** adalah sebuah website dokumenter editorial interaktif yang dirancang sebagai ruang apresiasi digital untuk menjaga, merayakan, dan merenungkan warisan budaya tenun **Sumba Ikat**. Melalui perpaduan tata letak editorial yang bersih dan animasi berbasis waktu (GSAP ScrollTrigger), website ini mengajak pengunjung untuk memperlambat tempo membaca, mengamati detail proses pembuatan, dan mendalami filosofi spiritual di balik mahakarya leluhur Sumba.

Proyek ini dibangun sebagai representasi digital dari inisiatif pelestarian budaya yang mendukung **SDG 11: Kota dan Komunitas yang Berkelanjutan**, dengan cara mendokumentasikan pengetahuan tradisional (intangible cultural heritage) agar tetap relevan bagi generasi mendatang.

---

## ✨ Fitur Utama (Key Features)

*   **🌐 Sistem Multi-bahasa Terpusat (Bilingual Context):** Mendukung Bahasa Indonesia dan Bahasa Inggris yang diatur melalui *Context API* yang terpusat dan *Stack Switcher* interaktif (berbasis bendera).
*   **📜 Storytelling Imersif Berbasis Scroll:** Penggunaan GSAP dan ScrollTrigger mengontrol transisi masuk elemen tulisan, efek *parallax*, serta pemudaran gambar latar secara tersinkronisasi dan elegan seiring laju *scroll*.
*   **🧵 Global Thread SVG Animation:** Elemen visual benang dinamis yang terus membentang dari awal hingga akhir halaman, berubah ketebalan, warna (mengkudu), dan pola (ikat), merepresentasikan perjalanan sehelai kapas menjadi kain.
*   **🍱 Bento Grid UI (Meaning Section):** Layout modern eksplorasi filosofi motif utama tenun Sumba (Ruha, Habaku) melalui grid asimetris yang rapi dan kartu pop-up detail interaktif.
*   **⚡ Optimasi Performa (WebP & Jitter Fix):** Gambar-gambar beresolusi tinggi (ratusan megapiksel) telah dikompresi menggunakan format `.webp` yang sangat ringan, memastikan *First Contentful Paint* (FCP) yang instan. Masalah pergeseran *layout (Layout Shift)* pada transisi telah dieliminasi.

---

## 📖 Alur Narasi (Narrative Structure)

Website ini dirancang mengalir secara linier tanpa interupsi navigasi yang mengganggu konsentrasi pembaca. 

1.  **Hero (Framing & Opening):** Pengenalan awal inisiatif digital pelestarian tenun dan penegasan judul utama, dengan efek *scrim glow* memukau yang menyinari teks di atas *background* imersif.
2.  **Nature (Origin of Material):** Mengamati proses paling awal di mana alam menyediakan serat kapas dan tanaman pewarna organik yang diproses secara sabar.
3.  **Craft (The Process of Weaving):** Visualisasi gerakan tangan penenun saat memilin benang dan mengoperasikan alat tenun tradisional, menonjolkan energi fisik dari kerja keras manusia.
4.  **Meaning (Philosophical Silence):** Mengeksplorasi makna setiap goresan motif tenun melalui kartu interaktif dalam struktur *Bento Grid*.
5.  **Living Heritage & Hope:** Potret nyata bagaimana pengetahuan menenun ini ditransfer antar-generasi, dilengkapi dengan video dokumenter lapangan eksklusif.

---

## 🛠️ Teknologi yang Digunakan (Tech Stack)

*   **Core Framework:** [React 19](https://react.dev/) dengan [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite 8](https://vite.dev/)
*   **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation Engine:** [GSAP](https://gsap.com/) & ScrollTrigger
*   **Micro-interactions:** [Framer Motion](https://motion.dev/) (Untuk efek lempar kartu interaktif)
*   **Documentation:** *Playwright* & Node.js scripts untuk ekstraksi otomatis PDF dokumentasi.

---

## 🚀 Panduan Menjalankan Project Lokal (How to Run)

Ikuti langkah-langkah di bawah ini untuk menjalankan repositori ini secara lokal:

### 1. Prasyarat
Pastikan komputer Anda telah terinstal **Node.js** (rekomendasi versi 18 ke atas) dan paket manajer **npm**.
```bash
node -v
npm -v
```

### 2. Instalasi & Menjalankan
Buka terminal pada direktori root proyek ini, kemudian jalankan:
```bash
# Mengunduh semua dependensi
npm install

# Menjalankan server pengembangan (Local Development)
npm run dev
```
Setelah aktif, silakan buka *browser* Anda pada alamat `http://localhost:5173`.

### 3. Membangun Berkas Produksi (Production Build)
Untuk melakukan kompilasi kode TypeScript dan mengoptimalkan aset untuk *deploy*:
```bash
npm run build
```

---

## 📂 Dokumentasi Pembuatan (PDF & DOCX)
Semua dokumen persyaratan berupa wireframe, konsep, alur kerja situs, dan detail fungsi telah disatukan di dalam folder `/docs` pada root repositori ini dengan nama **`Dokumentasi_Pembuatan_TENUNA_Fin.pdf`** dan file DOCX-nya.

---

> *"Setiap benang menyimpan cerita, setiap pola berbicara tentang kosmos."* 
> — **The Living Threads Initiative** 
