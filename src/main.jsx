import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // <-- Jangan lupa import ini sayang!

import "./assets/tailwind.css"; 

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Bungkus App dengan BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);