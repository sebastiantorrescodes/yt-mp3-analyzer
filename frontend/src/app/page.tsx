"use client";

// import { useState } from 'react';
// import axios from 'axios';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">YouTube to MP3</h1>
      <p className="m-4 text-lg">
        Convert YouTube videos to MP3 audio files easily.
      </p>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
      />
    </main>
  );
}
