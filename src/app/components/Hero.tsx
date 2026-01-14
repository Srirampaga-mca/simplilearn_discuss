import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-black">
      
      {/* --- Background Image --- */}
      {/* Replace '/hero-bg.jpg' with your actual exported image path */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Dark Overlay: Ensures text is readable even if the image is bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* --- Content Container --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* Top Logo & Name Tag Area */}
        <div className="mb-16">
          {/* Flex container to align Logo and Name Tag */}
          <div className="flex flex-col items-start gap-1">
            {/* Simplilearn Logo Text Placeholder */}
            <h2 className="text-3xl font-bold text-white tracking-tight">
              simpl<span className="text-cyan-400">;</span>learn
            </h2>
            
            {/* The Green Name Badge */}
            <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
              Thejaswi P
            </div>
          </div>
        </div>

        {/* Invite Tag Row */}
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-cyan-400 text-black text-sm font-bold px-4 py-1.5 rounded shadow-sm">
            Invite-Only
          </span>
          <span className="text-cyan-400 font-medium text-sm tracking-wide">
            An Executive Roundtable • Lunch
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-amber-500 leading-tight mb-10 max-w-4xl shadow-black drop-shadow-lg">
          The Skills That Matter Next: <br />
          <span className="text-amber-500">Preparing Your Workforce</span> <br />
          & Leaders for the AI Era
        </h1>

        {/* Event Details (Date & Location) */}
        <div className="space-y-3 text-white text-lg font-medium">
          
          {/* Date */}
          <div className="flex items-center gap-3">
            {/* Calendar Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>February 20, 2026</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            {/* Map Pin Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Chamberlain’s Steak & Fish House, Dallas</span>
          </div>

        </div>
      </div>
    </div>
  );
}