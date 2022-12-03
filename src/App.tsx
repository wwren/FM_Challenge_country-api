import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
