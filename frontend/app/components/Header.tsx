'use client';

import { FaBrain } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="w-full py-8 text-white shadow-md">
      <div className="flex flex-col items-center justify-center gap-2">
        <FaBrain className="text-4xl animate-pulse text-white" />
        <h1 className="text-3xl font-extrabold tracking-wide text-white">Emotion Reflection Tool</h1>
        <p className="text-sm mt-2 font-medium text-gray-300">Share your feelings. Let us reflect.</p>
      </div>
    </header>
  );
}