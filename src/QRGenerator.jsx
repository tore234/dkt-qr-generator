import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [inputValue, setInputValue] = useState("https://z.ai");
  const [qrColor, setQrColor] = useState("#b91c1c"); // color por defecto (rojo metálico)

  const handleDownload = () => {
    const svg = document.querySelector("svg");
    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(unescape(encodeURIComponent(xml)));
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { alpha: true }); // activa transparencia
      canvas.width = 1024;
      canvas.height = 1024;

      // No pintamos fondo → transparencia real
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      const link = document.createElement("a");
      link.download = "dkt-qr.png";
      link.href = canvas.toDataURL("image/png"); // mantiene canal alpha
      link.click();
    };
    image.src = "data:image/svg+xml;base64," + svg64;
  };

  const colors = [
    { name: "Negro", hex: "#000000" },
    { name: "Rojo", hex: "#b91c1c" },
    { name: "Azul", hex: "#2563eb" },
    { name: "Verde", hex: "#16a34a" },
    { name: "Púrpura", hex: "#9333ea" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-metal-bg bg-metal-texture px-3 sm:px-4 md:px-6 py-8 font-metal text-gray-200">
      <div className="w-full max-w-md sm:max-w-xl bg-gradient-to-b from-gray-900/95 via-gray-950/95 to-black border border-gray-700 rounded-2xl shadow-neon p-4 sm:p-6 md:p-8 space-y-6 transition-transform duration-300 hover:scale-[1.01] hover:shadow-redglow animate-fadeInMetal">
        
        {/* TÍTULO */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-metal-blood via-metal-neon to-purple-400 drop-shadow-[0_0_10px_rgba(159,0,255,0.6)]">
          DKT QR Generator
        </h2>

        {/* INPUT */}
        <div className="w-full">
          <label
            htmlFor="qr-input"
            className="block text-xs sm:text-sm uppercase tracking-widest font-semibold text-gray-400 mb-2 sm:mb-3"
          >
            Ingresa el texto o URL
          </label>

          <div className="relative group">
            <div className="absolute -inset-[1.2px] sm:-inset-[1.5px] bg-gradient-to-r from-red-600 via-purple-500 to-slate-400 rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <input
              id="qr-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="https://ejemplo.com"
              className="relative w-full px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg bg-gray-900/80 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-metal-neon placeholder-gray-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* QR + BOTONES */}
        <div className="flex flex-col items-center justify-center gap-5 p-4 sm:p-6 bg-metal-steel/30 rounded-xl border border-metal-iron shadow-inner animate-pulse-slow">
          <div className="w-[70vw] sm:w-[250px] md:w-[280px] max-w-[300px]">
            <QRCode
              value={inputValue}
              size={256}
              bgColor="transparent" // sin fondo
              fgColor={qrColor}
              level="H"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* BOTÓN DESCARGA + COLOR */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-bold uppercase text-sm sm:text-base bg-gradient-to-r from-red-700 via-purple-600 to-black text-gray-100 shadow-redglow hover:shadow-neon transition-all duration-300"
            >
              Descargar QR ⚡
            </button>

            <select
              value={qrColor}
              onChange={(e) => setQrColor(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 bg-gray-900/80 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-metal-neon transition-all duration-300"
            >
              {colors.map((c) => (
                <option key={c.hex} value={c.hex} style={{ color: c.hex }}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* TEXTO FINAL */}
        <p className="text-center text-gray-500 italic tracking-wide text-xs sm:text-sm">
          Escanea este código QR con la cámara de tu dispositivo 🤘
        </p>
      </div>
    </div>
  );
};

export default QRGenerator;
