'use client';

import { EmotionResponse } from './TextInputForm';
import { FaSmile } from 'react-icons/fa';

export default function EmotionCard({ emotion, confidence }: EmotionResponse) {
  return (
    <div className="mt-6 p-4 rounded-md bg-black text-white border border-gray-700 shadow text-center">
      <div className="flex items-center justify-center gap-2">
        <FaSmile className="text-2xl" />
        <h2 className="text-lg font-semibold">Detected Emotion</h2>
      </div>
      <p className="text-xl font-bold mt-2">{emotion}</p>
      <p className="text-sm text-gray-400">Confidence: {(confidence * 100).toFixed(1)}%</p>
    </div>
  );
}
