import React from 'react';

const CatTable = ({ cats }) => {
  return (
    <div className="bg-white rounded-[2rem] shadow-md border-2 border-white overflow-hidden overflow-x-auto">
      <table className="w-full text-left text-sm min-w-[600px]">
        <thead className="bg-pink-400 text-white font-black uppercase text-[10px] tracking-widest">
          <tr>
            <th className="p-4">Kucing</th>
            <th className="p-4">General Info</th>
            <th className="p-4">Kesehatan</th>
            <th className="p-4">Karakter</th>
            <th className="p-4">Jadwal</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {cats.map(cat => (
            <tr key={cat.id} className="hover:bg-pink-50/30 transition-all text-[11px]">
              <td className="p-4 flex items-center gap-3">
                <img src={cat.gambar} className="w-8 h-8 rounded-full object-cover border border-pink-100" />
                <span className="font-bold text-gray-800">{cat.nama}</span>
              </td>
              <td className="p-4 text-gray-500">{cat.ras} | {cat.gender}</td>
              <td className="p-4 text-gray-400">
                {cat.kesehatan.status} | {cat.kesehatan.berat}
              </td>
              <td className="p-4 text-gray-400">
                {cat.karakter.sifat}
              </td>
              <td className="p-4 text-gray-400 italic">
                {cat.jadwal.makan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CatTable;