import React from 'react';

export default function Fourth() {
  return (
    <section className="py-16 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Experiences</h2>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <li>Desert Safari at Jaisalmer</li>
          <li>Palace Tours and Museums</li>
          <li>Wildlife at Ranthambore</li>
          <li>Local Markets and Handicrafts</li>
        </ul>
      </div>
    </section>
  );
}
