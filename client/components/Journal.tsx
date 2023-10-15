"use client";

import React, { useState } from 'react';

const Journal = () => {
  
  const [journalEntry, setJournalEntry] = useState('');
  const [prompts, setPrompts] = useState([
    'Write about a memorable childhood experience.',
    'What are your goals for the future?',
    'Describe a challenge you overcame recently.',
    // Add more prompts here
  ]);

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
  };

  const handleNewPrompt = () => {
    const prompt = getRandomPrompt();
    setJournalEntry(journalEntry + '\n\n' + prompt);
  };

  const handleJournalChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setJournalEntry(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Journal Your Thoughts</h1>
      <div className="mb-4">
        
        <button
          onClick={handleNewPrompt}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          New Prompt
        </button>
      </div>
      <div className="border p-4">
        <textarea
        className=""
          value={journalEntry}
          onChange={handleJournalChange}
          placeholder="Start writing here..."
          rows={10}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  ); 
};


export default Journal;