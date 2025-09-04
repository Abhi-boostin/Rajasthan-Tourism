import React from 'react';

export default function RootLayout({ children }) {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="text-xl font-semibold tracking-wide">Rajasthan Tourism</div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:underline">Destinations</a>
            <a href="#" className="hover:underline">Experiences</a>
            <a href="#" className="hover:underline">Plan</a>
            <a href="#" className="hover:underline">About</a>
          </div>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-4">
        {children}
      </main>
      <footer className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">© {new Date().getFullYear()} Rajasthan Tourism</div>
      </footer>
    </div>
  );
} 