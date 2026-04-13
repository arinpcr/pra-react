import React from 'react';

const CatCard = ({ cat }) => {
  return (
    // Kunci lebar maksimal card di 280px agar tidak melebar
    <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 flex flex-col w-full max-w-[280px] mx-auto">
      
      {/* Kunci TINGGI gambar secara paksa di 180px */}
      <div className="relative w-full rounded-[1.5rem] overflow-hidden mb-4 bg-gray-50" style={{ height: '180px' }}>
        <img 
          src={cat.gambar} 
          alt={cat.nama} 
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-3 left-3 bg-orange-400 text-black text-[8px] font-black px-3 py-1 rounded-full uppercase italic">
          {cat.ras}
        </span>
      </div>

      <div className="px-1 flex-grow">
        <p className="text-orange-800 text-[10px] font-black italic mb-1 uppercase leading-none">{cat.umur} Year Old</p>
        <h3 className="text-xl font-black text-gray-800 mb-4 leading-tight italic">{cat.nama}</h3>

        <div className="bg-gray-50 rounded-xl p-3 text-[9px] space-y-2 mb-4 border border-gray-100">
          <div className="flex justify-between text-gray-400 font-black uppercase">
            <span>Special Sifat:</span>
            <span className="text-gray-800">{cat.karakter.sifat}</span>
          </div>
          <div className="flex justify-between text-gray-400 font-black uppercase">
            <span>Health Status:</span>
            <span className="text-green-600">{cat.kesehatan.status}</span>
          </div>
        </div>

        <div className="flex gap-1.5 mb-4">
          <span className="px-2 py-0.5 border border-gray-100 rounded text-[8px] text-gray-400 font-bold uppercase">#Anabul</span>
          <span className="px-2 py-0.5 border border-gray-100 rounded text-[8px] text-gray-400 font-bold uppercase">#{cat.gender}</span>
        </div>

        <hr className="border-gray-100 mb-3" />
        <p className="text-[9px] text-gray-400 italic">📍 {cat.karakter.level_aktif}</p>
      </div>
    </div>
  );
};

export default CatCard;