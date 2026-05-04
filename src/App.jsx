import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

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