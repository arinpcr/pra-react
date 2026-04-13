import React, { useState, useEffect } from 'react';
import catData from './data/cats.json';
import "./custom.css";

const CatManagement = () => {
  const [viewMode, setViewMode] = useState("guest");
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedRas: "",
    selectedStatus: "",
  });

  // Cursor Glow Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  // Filter Logic
  const filteredCats = catData.filter((cat) => {
    const matchesSearch = cat.nama.toLowerCase().includes(dataForm.searchTerm.toLowerCase());
    const matchesRas = dataForm.selectedRas ? cat.ras === dataForm.selectedRas : true;
    const matchesStatus = dataForm.selectedStatus ? cat.kesehatan.status === dataForm.selectedStatus : true;
    return matchesSearch && matchesRas && matchesStatus;
  });

  const allRas = [...new Set(catData.map((cat) => cat.ras))];
  const allStatus = [...new Set(catData.map((cat) => cat.kesehatan.status))];

  return (
    <div className="cat-body-wrapper">
      {/* Cursor Glow Element */}
      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }}></div>

      <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 className="cat-name" style={{ fontSize: '3.5rem' }}>Meow <span style={{ color: '#ffb6c1' }}>Archive.</span></h1>
          <p style={{ color: '#8d6e63', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '10px' }}>Digital Cat Directory | PCR</p>
        </div>

        {/* FILTER BOX */}
        <div style={{ background: 'white', padding: '25px', borderRadius: '35px', border: '3px dashed #ffb6c1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '50px', width: '90%' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '10px', fontWeight: '800', color: '#ffb6c1', textTransform: 'uppercase', marginBottom: '5px' }}>Search Anabul</label>
            <input name="searchTerm" type="text" placeholder="Cari nama..." value={dataForm.searchTerm} onChange={handleChange} style={{ padding: '10px', borderRadius: '15px', border: '2px solid #fff5f8', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '10px', fontWeight: '800', color: '#ffb6c1', textTransform: 'uppercase', marginBottom: '5px' }}>Filter Ras</label>
            <select name="selectedRas" value={dataForm.selectedRas} onChange={handleChange} style={{ padding: '10px', borderRadius: '15px', border: '2px solid #fff5f8', outline: 'none' }}>
              <option value="">Semua Ras</option>
              {allRas.map(ras => <option key={ras} value={ras}>{ras}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ fontSize: '10px', fontWeight: '800', color: '#ffb6c1', textTransform: 'uppercase', marginBottom: '5px' }}>Filter Status</label>
            <select name="selectedStatus" value={dataForm.selectedStatus} onChange={handleChange} style={{ padding: '10px', borderRadius: '15px', border: '2px solid #fff5f8', outline: 'none' }}>
              <option value="">Semua Status</option>
              {allStatus.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* CONTENT AREA */}
        {viewMode === "guest" ? (
          <div className="grid-container">
            {filteredCats.map((cat) => (
              <div key={cat.id} className="photocard-container">
                <div className="profile-pic-frame">
                  <img src={cat.gambar} alt={cat.nama} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h1 className="cat-name">{cat.nama}</h1>
                <p className="cat-info">{cat.ras} • {cat.gender}</p>
                <div className="cat-tag">{cat.umur} Years Old 🐾</div>
                <hr className="dashed-line" />
                <div className="hobi-box">
                  <h3>Special Traits ✨</h3>
                  <div className="hobi-list">
                    <span className="hobi-item">{cat.karakter.sifat}</span>
                    <span className="hobi-item">{cat.karakter.level_aktif}</span>
                  </div>
                </div>
                <div className="footer-inside">
                  <p style={{fontWeight: '800', fontSize: '12px', margin: 0}}>Status: {cat.kesehatan.status} ❤️</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ADMIN VIEW TABLE */
          <div style={{ background: 'white', borderRadius: '35px', overflow: 'hidden', border: '15px solid #ffb6c1', width: '90%', marginBottom: '30px' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#1B1A17', color: '#ffb6c1' }}>
                <tr>
                  <th style={{ padding: '20px' }}>Anabul</th>
                  <th style={{ padding: '20px' }}>Details</th>
                  <th style={{ padding: '20px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCats.map(cat => (
                  <tr key={cat.id} style={{ borderBottom: '1px solid #ffe4e1' }}>
                    <td style={{ padding: '20px', fontWeight: '800' }}>{cat.nama}</td>
                    <td style={{ padding: '20px' }}>{cat.ras} • {cat.gender}</td>
                    <td style={{ padding: '20px' }}>
                      <span style={{ color: '#16A34A', fontWeight: '800' }}>{cat.kesehatan.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TOGGLE BUTTON */}
        <button className="admin-btn" onClick={() => setViewMode(viewMode === "guest" ? "admin" : "guest")}>
          {viewMode === "guest" ? "Open Admin Vault 🗝️" : "Back to Gallery 📸"}
        </button>

      </div>
    </div>
  );
};

export default CatManagement;