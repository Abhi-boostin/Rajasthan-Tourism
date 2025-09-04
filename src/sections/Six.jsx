import React from 'react';

export default function Six() {
  return (
    <section className="py-16 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Visual Journey</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-square rounded-lg bg-amber-100" />
          ))}
        </div>
      </div>
    </section>
  );
}
