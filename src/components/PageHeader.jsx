import React from 'react';

// KONSEP PROPS DESTRUCTURING:
// Sintaks ({ title, breadcrumb, children }) adalah cara modern memecah objek 'props' dari komponen induk (Parent).
// Jadi kita tidak perlu repot menulis props.title, props.breadcrumb, dll.
export default function PageHeader({ title, breadcrumb, children }) {
    
    // PENJELASAN KONSEP REACT & TAILWIND PADA KODE DI BAWAH:
    // 
    // 1. PROP 'children' (KOMPOSISI KOMPONEN):
    //    'children' adalah prop spesial bawaan React. Ini memungkinkan komponen <PageHeader> 
    //    untuk menerima elemen HTML atau komponen tombol apapun yang disisipkan di antara 
    //    tag pembuka <PageHeader> dan penutup </PageHeader> saat dipanggil di halaman lain.
    // 
    // 2. PENGECEKAN TIPE DATA BREADCRUMB (Ternary Operator):
    //    Sintaks: {Array.isArray(breadcrumb) ? breadcrumb.join(" / ") : breadcrumb}
    //    - React mengecek: "Apakah data breadcrumb ini berbentuk Array (daftar/list)?"
    //    - Jika IYA (true): Gabungkan semua isi array tersebut menggunakan kata pembatas " / ". 
    //      (Misal: ['Rooms', 'Detail'] berubah menjadi "Rooms / Detail").
    //    - Jika TIDAK (false): Langsung tampilkan teks string aslinya saja.
    // 
    // 3. TAILWIND IMPORTANT MODIFIER (!flex):
    //    Menambahkan tanda seru (!) di depan class Tailwind seperti '!flex' setara dengan 
    //    menuliskan 'display: flex !important;' di CSS murni. Ini digunakan untuk memaksa 
    //    elemen tersebut menjadi flexbox dan menimpa/mengalahkan aturan class lain yang mungkin menyembunyikannya.
    
    return (
        <div id="pageheader-container" className="flex justify-between items-center mb-8 px-2">
            <div id="pageheader-left">
                <span id="page-title" className="text-3xl font-bold block text-gray-800">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center gap-2 text-sm text-gray-400 mt-1 font-medium">
                    <span>Home</span>
                    <span id="breadcrumb-separator">/</span>
                    <span id="breadcrumb-current" className="text-hijau font-semibold">
                        {Array.isArray(breadcrumb) ? breadcrumb.join(" / ") : breadcrumb}
                    </span>
                </div>
            </div>

            {/* Kita paksa tampil dengan !flex agar menimpa CSS yang hidden */}
            <div id="action-button" className="!flex items-center justify-end">
                {children}
            </div>
        </div>
    );
}