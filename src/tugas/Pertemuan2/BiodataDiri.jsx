import React, { useState, useEffect } from 'react';
import "./custom.css";
import ProfileImage from './components/ProfileImage';
import Header from './components/Header';
import Location from './components/Location';
import Hobby from './components/Hobby';
import Contact from './components/Contact';
import SocialLink from './components/SocialLink';

// IMPORT FOTO KAMU DI SINI
import FotoArin from '../../assets/profile.jpg'; 

const BiodataDiri = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const data = {
    nama: "Arini Zahira Putri",
    foto: FotoArin, 
    status: "Mahasiswa Sistem Informasi",
    kampus: "Politeknik Caltex Riau",
    domisili: "Pekanbaru, Riau 📍",
    hobi: ["Menggambar 🎨", "Bermain Gitar 🎸"],
    sosmed: {
      ig: "0.79990",
      github: "https://github.com/arinpcr/pra-react.git",
      linkedin: "arini-zahira-putri-268407394",
      email: "arin24si@mahasiswa.pcr.ac.id"
    }
  };

  return (
    <div>
      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }}></div>

      <div className="photocard-container">
        
        <ProfileImage imageUrl={data.foto} />
        
        <Header nama={data.nama} status={data.status} kampus={data.kampus} />
        <Location domisili={data.domisili} />
        
        {/* Garis putus-putus separator */}
        <hr className="dashed-line" />

        <div className="hobi-box">
          <h3>Hobi Aku ✨</h3>
          {/* GUNAKAN KELAS BARU UNTUK HOBI BERJEJER */}
          <ul className="hobi-list">
            {data.hobi.map((item, index) => (
              <li key={index} className="hobi-item">{item}</li>
            ))}
          </ul>
        </div>

        {/* Ini bagian Footer & Sosmed - Nempel ke hobi */}
        <div className="footer-inside">
          <h3>Let's Connect! 💌</h3>
          <Contact email={data.sosmed.email} ig={data.sosmed.ig} />
          <SocialLink github={data.sosmed.github} linkedin={data.sosmed.linkedin} />
        </div>
      </div>
    </div>
  );
};

export default BiodataDiri;