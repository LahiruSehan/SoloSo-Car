
import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_REVIEWS } from '../constants';
import { Star, MessageCircle, ThumbsUp, Share2, Play } from 'lucide-react';

const SocialProofPage = () => {
  return (
    <div className="space-y-12 pb-20">
      <section className="px-6 pt-4">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">Social Proof</h1>
        <p className="text-slate-400 text-sm font-medium">Join our community of satisfied owners.</p>
      </section>

      <section className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white border-y border-slate-100">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0A5CFF] rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">SOLO-SO CAR SALE</h4>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Sponsored • 2 hours ago</p>
                </div>
              </div>
              <button className="text-slate-400 font-black">...</button>
            </div>
            
            <p className="px-4 text-sm text-slate-800 leading-relaxed mb-4">
              Another premium delivery! Congratulations to our newest customer from Colombo. 🛳️ Direct Import: TOYOTA LAND CRUISER 300.
            </p>

            <div className="relative aspect-video bg-slate-900">
              <img src={`https://picsum.photos/seed/fb${i}/800/450`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                   <Play fill="white" className="text-white ml-1" />
                </div>
              </div>
            </div>

            <div className="p-4 flex justify-between items-center border-b border-slate-50">
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-[8px] text-white">👍</div>
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[8px] text-white">❤️</div>
                </div>
                <span className="text-slate-400 text-xs font-bold">1.2K Reactions</span>
              </div>
              <span className="text-slate-400 text-xs font-bold">48 Comments • 12 Shares</span>
            </div>

            <div className="p-2 flex">
              <button className="flex-1 py-2 flex items-center justify-center gap-2 text-slate-500 font-bold text-xs uppercase">
                <ThumbsUp size={16} /> Like
              </button>
              <button className="flex-1 py-2 flex items-center justify-center gap-2 text-slate-500 font-bold text-xs uppercase">
                <MessageCircle size={16} /> Comment
              </button>
              <button className="flex-1 py-2 flex items-center justify-center gap-2 text-slate-500 font-bold text-xs uppercase">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="px-6">
        <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase mb-6">Customer Reviews</h2>
        <div className="space-y-4">
          {MOCK_REVIEWS.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={review.photo} className="w-12 h-12 rounded-2xl object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <span className="ml-auto text-[10px] text-slate-400 uppercase font-bold">{review.date}</span>
              </div>
              <p className="text-slate-600 text-sm italic">"{review.comment}"</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SocialProofPage;
