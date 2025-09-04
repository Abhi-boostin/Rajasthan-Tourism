import React from 'react';

export default function Third() {
  return (
    <section className="py-16 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Popular Destinations</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Jaipur', 'Jodhpur', 'Udaipur'].map((city) => (
            <div key={city} className="aspect-[4/3] rounded-lg bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
