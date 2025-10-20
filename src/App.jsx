import React from 'react'
import QRGenerator from './QRGenerator'

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100 flex flex-col items-center justify-center p-6 font-metal overflow-x-hidden">
      
      {/* HEADER */}
      <header className="text-center mb-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-500 to-slate-300 drop-shadow-[0_0_15px_rgba(255,0,100,0.6)]">
          DKT QR Generator
        </h1>
        <p className="mt-4 text-gray-400 italic text-sm sm:text-base">
          “For those about to code, we salute you 🤘”
        </p>
      </header>

      {/* MAIN SECTION */}
      <section className="w-full max-w-3xl bg-gradient-to-b from-gray-900/95 via-gray-950/95 to-gray-800/90 border border-gray-700 rounded-2xl shadow-[0_0_40px_rgba(150,0,255,0.4)] p-6 sm:p-10 backdrop-blur-md">
        <QRGenerator />
      </section>

      {/* FOOTER */}
      <footer className="mt-10 text-xs sm:text-sm text-gray-500 text-center">
        Made with ⚡ by <span className="text-purple-400">DKT Devs</span>
      </footer>
    </main>
  )
}

export default App
