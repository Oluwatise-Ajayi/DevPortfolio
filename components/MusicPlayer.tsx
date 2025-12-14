"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/now-playing');
        const data = await res.json();
        setSong(data);
        // If Spotify says we are playing, update our UI state to match, 
        // but we don't auto-play audio to avoid browser policy blocking.
        // We only auto-play if the user has already interacted, or we rely on them clicking play.
      } catch (e) {
        console.error("Failed to fetch song:", e);
      }
    };

    fetchNowPlaying();
    // Poll every 10 seconds
    const interval = setInterval(fetchNowPlaying, 10000); 
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // If no song is playing or data is missing, show default state
  if (!song || !song.isPlaying) {
     return (
        <div className="md:col-span-1 md:row-span-1 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Not Playing</span>
          </div>
          
          <div className="flex items-center gap-4 mt-4 opacity-50">
            <div className="w-16 h-16 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center">
               <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
               <h4 className="text-white font-bold">Offline</h4>
               <p className="text-xs text-gray-500">Spotify</p>
            </div>
          </div>
        </div>
     );
  }

  return (
    <div className="md:col-span-1 md:row-span-1 bg-[#0e0e0e] rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden">
      <div className="flex justify-between items-start">
        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Now Playing</span>
        <div className="flex gap-1">
           {[1,2,3].map(i => (
             <div key={i} className="w-1 bg-green-500/50 rounded-full animate-[bounce_1s_infinite]" style={{animationDelay: `${i * 0.1}s`, height: '12px'}}></div>
           ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-4">
        {/* Spinning Vinyl - Album Art */}
        <div className={`w-16 h-16 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center relative shadow-xl overflow-hidden ${song.isPlaying || isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
           <img src={song.albumImageUrl} alt="Album Art" className="absolute inset-0 w-full h-full object-cover opacity-80" />
           <div className="w-3 h-3 bg-black rounded-full z-10"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-bold truncate" title={song.title}>{song.title}</h4>
          <p className="text-xs text-gray-500 truncate" title={song.artist}>{song.artist}</p>
        </div>

        {song.previewUrl && (
            <button onClick={togglePlay} className="bg-green-500/20 p-2 rounded-full hover:bg-green-500/40 text-green-400 transition-colors">
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
        )}
        
        {/* Hidden Audio Element */}
        {song.previewUrl && (
            <audio ref={audioRef} src={song.previewUrl} onEnded={() => setIsPlaying(false)} />
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
