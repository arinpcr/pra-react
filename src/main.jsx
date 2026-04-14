import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Pastikan path tailwind.css ini sesuai dengan letak folder kamu ya sayang!
import "./tugas/pertemuan5/assets/tailwind.css"; 

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);