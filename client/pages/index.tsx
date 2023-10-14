"use client";
import React, {useEffect, useState} from 'react'
import HeroSection from '@/components/HeroSection';

function index() {

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);


  return (
    <html lang="en">
    <div>{message}</div>
    </html>
  )
}

export default index