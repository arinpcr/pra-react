// Mengimpor React dan komponen Suspense. Suspense adalah fitur bawaan React 
// yang berfungsi untuk menangani status "menunggu" (asynchronous) saat komponen sedang dimuat.
import React, { Suspense } from "react";
// Route dan Routes adalah inti dari React Router Dom. 
// Routes = Bungkus utama untuk semua jalur. Route = Definisi masing-masing jalur (URL).
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// KONSEP REACT LAZY (CODE SPLITTING):
// Normalnya, React akan membundel semua file menjadi satu file besar (bundle.js), yang membuat web lambat saat pertama kali dibuka.
// React.lazy memecah file tersebut. File komponen hanya akan di-download oleh browser saat rutenya benar-benar dikunjungi oleh user.
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Bookings = React.lazy(() => import("./pages/Bookings"));
const Guests = React.lazy(() => import("./pages/Guests"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layout/MainLayout"));
const AuthLayout = React.lazy(() => import("./layout/AuthLayout"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Success = React.lazy(() => import("./pages/auth/Success"));

function App() {
  // PENJELASAN KONSEP RENDER:
  // 1. <Suspense fallback={<Loading />}>: Karena pakai React.lazy, butuh waktu beberapa milidetik untuk download file. 
  //    Prop 'fallback' memberitahu React: "Tampilkan komponen Loading INI selama proses download berlangsung".
  // 2. NESTED ROUTING (Route Bersarang): <Route element={<MainLayout />}> membungkus rute anak-anaknya.
  //    Artinya, MainLayout akan menjadi semacam "Master Page" yang membungkus konten Dashboard, Bookings, dll.
  // 3. WILDCARD ROUTE (path="*"): Menangkap semua URL yang tidak terdaftar di atasnya (Penanganan 404 Page Not Found).
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/guests" element={<Guests />} />

          <Route path="/error-400" element={<ErrorPage code="400" title="BAD REQUEST" description="Oops! It Seems You Follow Backlink." lottieUrl="https://embed.lottiefiles.com/animation/78973" />} />
          <Route path="/error-401" element={<ErrorPage code="401" title="UNAUTHORIZED" description="Maaf, kamu tidak punya izin ke ruangan ini." lottieUrl="https://embed.lottiefiles.com/animation/78973" />} />
          <Route path="/error-403" element={<ErrorPage code="403" title="FORBIDDEN" description="Area khusus staff Elegent Hotel, kamu dilarang masuk." lottieUrl="https://embed.lottiefiles.com/animation/78973" />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
     </Suspense>
  );
}

export default App;