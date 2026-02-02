
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_STORIES } from '../constants';
import { Play, Volume2, Share2, Heart } from 'lucide-react';

const MediaPage = () => {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <div className="h-[90vh] bg-black -mt-16 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={MOCK_STORIES[activeStory].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {MOCK_STORIES[activeStory].type === 'video' ? (
            <video 
              autoPlay 
              muted 
              loop 
              className="w-full h-full object-cover"
              src={MOCK_STORIES[activeStory].url}
            />
          ) : (
            <img 
              className="w-full h-full object-cover" 
              src={MOCK_STORIES[activeStory].url} 
              alt={MOCK_STORIES[activeStory].title}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Interface */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 pb-24">
        {/* Progress Bars */}
        <div className="flex gap-1">
          {MOCK_STORIES.map((_, i) => (
            <div key={i} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: i === activeStory ? "100%" : i < activeStory ? "100%" : "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                onAnimationComplete={() => {
                  if (i === activeStory) {
                    setActiveStory((prev) => (prev + 1) % MOCK_STORIES.length);
                  }
                }}
                className="h-full bg-white"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-end">
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#0A5CFF] p-0.5">
                  <div className="w-full h-full bg-[#0A5CFF] rounded-full flex items-center justify-center text-white text-[10px] font-black italic">S</div>
                </div>
                <span className="text-white font-bold">solo_so_cars</span>
                <button className="bg-[#0A5CFF] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">Follow</button>
             </div>
             <p className="text-white text-sm font-medium pr-12">
               {MOCK_STORIES[activeStory].title} – Pure premium quality directly imported to Sri Lanka. #LuxuryCars #Marawila
             </p>
          </div>

          <div className="flex flex-col gap-6 items-center text-white">
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Heart fill="white" size={24} />
              </div>
              <span className="text-[10px] font-bold">1.2K</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Volume2 size={24} />
              </div>
              <span className="text-[10px] font-bold">Audio</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Share2 size={24} />
              </div>
              <span className="text-[10px] font-bold">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Click Handlers */}
      <div className="absolute inset-0 flex">
        <div className="flex-1" onClick={() => setActiveStory(prev => (prev - 1 + MOCK_STORIES.length) % MOCK_STORIES.length)}></div>
        <div className="flex-1" onClick={() => setActiveStory(prev => (prev + 1) % MOCK_STORIES.length)}></div>
      </div>
    </div>
  );
};

export default MediaPage;
