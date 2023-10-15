"use client";

import React, { useState } from 'react';
import axios from 'axios';


const Journal = () => {
  
  const [givenPrompt, setGivenPrompt] = useState("Click New Prompt to get a prompt!")
  const [loading, setLoading] = useState(false)

  const [journalEntry, setJournalEntry] = useState('');
  const [prompts, setPrompts] = useState([
    'Write about a memorable childhood experience.',
    'What are your goals for the future?',
    'Describe a challenge you overcame recently.',
    // Add more prompts here
  ]);

  

  const handleNewPrompt = async () => {
    setLoading(true)
    
    fetch("http://localhost:8080/api/llama_request").then((response) => response.json()).then((response) => {
      setGivenPrompt(response.response)
    })
    
    setLoading(false)

  };

  const handleJournalChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setJournalEntry(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Journal Your Thoughts</h1>
      <div className="mb-4 flex flex-row">
        
        <button
          onClick={handleNewPrompt}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          New Prompt
        </button>
        <p className='p-2 text-sm text-slate-900 hover:text-slate-500'>
          {loading ? "Loading...": givenPrompt}
        </p>
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