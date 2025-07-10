'use client';

import { useState } from 'react';
import Header from './components/Header';
import TextInputForm, { EmotionResponse } from './components/TextInputForm';
import EmotionCard from './components/EmotionCard';
import { Toaster } from 'react-hot-toast';

export default function HomePage() {
  const [result, setResult] = useState<EmotionResponse | null>(null);

  return (
    <main className="p-4 w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 to-black">
      <Toaster position="top-center" />
      <div className="border border-white rounded-md p-10 m-7">
        <Header />
        <section className="w-full flex flex-col gap-6 mt-6 px-2">
          <TextInputForm onResult={setResult} />
          {result && <EmotionCard {...result} />}
        </section>
      </div>
    </main>
  );
}
