import React, { useState } from 'react';
import FormInput from './components/FormInput';

const CatCafe = () => {
  const [formData, setFormData] = useState({
    nama: '', noHp: '', pesan: '', area: '', paket: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    let errorMsg = '';
    if (name === 'nama' && value.length < 3) errorMsg = 'Nama minimal 3 huruf ya!';
    if (name === 'noHp' && !/^\d+$/.test(value)) errorMsg = 'Hanya boleh angka!';
    setErrors({ ...errors, [name]: errorMsg });
    setIsSubmitted(false);
  };

  const isFormValid = formData.nama && !errors.nama && formData.noHp && !errors.noHp && formData.area && formData.paket;

  // ... (bagian atas CatCafe.jsx tetap sama ya sayang)

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 font-sans"
         style={{ 
           backgroundColor: '#f0f9ff',
           backgroundImage: 'linear-gradient(#e0f2fe 2px, transparent 2px), linear-gradient(90deg, #e0f2fe 2px, transparent 2px)',
           backgroundSize: '40px 40px' 
         }}>
      
      <div className="w-full max-w-[450px] bg-white rounded-[3rem] border-[12px] border-[#ffc1cc] shadow-2xl overflow-hidden p-10 flex flex-col items-center">
        
        {/* AVATAR ICON */}
        <div className="w-20 h-20 bg-[#ffdeeb] rounded-full flex items-center justify-center text-4xl mb-4 border-4 border-white shadow-sm">
          🐈
        </div>
        
        <h1 className="text-3xl font-black text-[#ff85a1] mb-1 tracking-tighter italic">Cat Cafe Order</h1>
        <p className="text-[#ffc1cc] text-[10px] font-black uppercase tracking-[0.3em] mb-8">Pekanbaru, Riau 📍</p>

        {/* 📝 AREA FORM (DASHED BOX) */}
        <div className="w-full border-4 border-dashed border-[#ffdeeb] rounded-[2.5rem] p-6 mb-8 bg-[#fffafa]">
          <h3 className="text-[#ff85a1] font-black text-xs mb-5 text-center uppercase tracking-widest italic">Reservation Details ✨</h3>
          
          <form className="space-y-4">
            <FormInput label="Full Name" type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Ketik nama kamu..." errorMessage={errors.nama} />
            <FormInput label="WhatsApp" type="text" name="noHp" value={formData.noHp} onChange={handleChange} placeholder="Contoh: 0812..." errorMessage={errors.noHp} />
            
            <div className="flex gap-3">
               <div className="w-1/2">
                 <label className="block text-[10px] font-extrabold text-[#ff85a1] mb-1 ml-2 uppercase">Area</label>
                 <select name="area" value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} className="w-full p-3 rounded-2xl bg-white text-[#ff85a1] text-xs font-bold border-2 border-[#ffdeeb] outline-none text-center cursor-pointer shadow-sm">
                    <option value="">-- Pilih --</option>
                    <option value="Indoor">Indoor 🏠</option>
                    <option value="Outdoor">Outdoor 🌳</option>
                 </select>
               </div>
               <div className="w-1/2">
                 <label className="block text-[10px] font-extrabold text-[#ff85a1] mb-1 ml-2 uppercase">Pack</label>
                 <select name="paket" value={formData.paket} onChange={(e) => setFormData({...formData, paket: e.target.value})} className="w-full p-3 rounded-2xl bg-white text-[#ff85a1] text-xs font-bold border-2 border-[#ffdeeb] outline-none text-center cursor-pointer shadow-sm">
                    <option value="">-- Pilih --</option>
                    <option value="1H">1 Jam ⏳</option>
                    <option value="2H">2 Jam ⏳</option>
                 </select>
               </div>
            </div>
          </form>
        </div>

        {/* 💖 BUTTON AREA */}
        <div className="w-full bg-[#ffcada] rounded-[2.5rem] p-8 flex flex-col items-center gap-4 shadow-inner">
          <p className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1">Ready to play? 💌</p>
          
          {isFormValid ? (
            <button onClick={() => setIsSubmitted(true)} className="w-full bg-[#ff85a1] text-white font-black py-4 rounded-2xl shadow-lg hover:bg-[#ff66b2] transition-all uppercase text-sm tracking-widest transform active:scale-95">
              Confirm Order 🐾
            </button>
          ) : (
            <div className="text-[10px] text-pink-700 font-bold italic animate-pulse">
              * Please fill all fields first...
            </div>
          )}
        </div>

        {isSubmitted && (
          <div className="mt-6 p-4 bg-[#fff0f3] rounded-2xl border-2 border-[#ffc1cc]">
            <p className="text-[#ff85a1] font-black text-[10px] italic text-center">
              ✨ Order confirmed! See you, Arin! ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatCafe;