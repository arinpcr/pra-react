import React from 'react';
import Sidebar from './tugas/pertemuan5/layout/Sidebar';
import Header from './tugas/pertemuan5/layout/Header';
import PageHeader from './tugas/pertemuan5/components/PageHeader';
import Dashboard from './tugas/pertemuan5/pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-latar font-poppins text-teks">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 xl:p-8">
          <Header />
          <div className="mt-6 space-y-6">
            <PageHeader />
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;