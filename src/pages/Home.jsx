import React from 'react';

export default function Home() {
  return (
    <section className="pt-10 md:pt-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Discover Rajasthan</h1>
          <p className="mt-4 text-gray-600 md:text-lg">Palaces, deserts, forts, and vibrant culture. Plan your perfect journey.</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="px-4 py-2 rounded bg-black text-white">Explore</a>
            <a href="#" className="px-4 py-2 rounded border">Plan Trip</a>
          </div>
        </div>
        <div className="aspect-video rounded-lg bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200" />
      </div>
    </section>
  );
} 