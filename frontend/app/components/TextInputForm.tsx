'use client';

import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import toast from 'react-hot-toast';

export type EmotionResponse = {
  emotion: string;
  confidence: number;
};

export default function TextInputForm({
  onResult,
}: {
  onResult: (data: EmotionResponse) => void;
}) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      onResult(data);
      toast.success('Emotion detected!');
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <textarea
        className="border dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg p-3 h-32 text-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        placeholder="How are you feeling today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        spellCheck={false}
      />
      <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center items-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          {loading ? (<><FaSpinner className="animate-spin" /> Analyzing...</>) : 'Submit'}
        </button>

        <button
          type="button"
          onClick={() => location.reload()}
          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition w-full sm:w-auto"
        >
          Analyze Another Reflection
        </button>
      </div>
    </form>
  );
}