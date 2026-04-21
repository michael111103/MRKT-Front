import React from 'react';
import { useInView } from '../hooks/useInView';

const videoTestimonials = [
  { handle: '@riharifxtrading', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/e6c06a344ace29400e2121344d6ed675/thumbnails/thumbnail.jpg' },
  { handle: '@cuebanks', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/5f578cd0a9176a0df55488e8e27b9e08/thumbnails/thumbnail.jpg' },
  { handle: '@daytrading.gold', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/4d430a89992e94c3210f8284492ff65f/thumbnails/thumbnail.jpg' },
  { handle: '@capitalhungry', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/4636b5a1f4032b31f6bd3e302964ed29/thumbnails/thumbnail.jpg' },
  { handle: '@smf_trading', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/6b70fade50cbf3197ac5982431e6db10/thumbnails/thumbnail.jpg' },
  { handle: '@sakeembradley', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/88bd9039077d5d031d5c6c2c321c601c/thumbnails/thumbnail.jpg' },
  { handle: '@colt_daytrades', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/c3d5bbae5c886dc9bb495b1a1f763495/thumbnails/thumbnail.jpg' },
  { handle: '@wisefoxtraders', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/cea724da0e75b63fa6be6e678327a5de/thumbnails/thumbnail.jpg' },
  { handle: '@tradingwithkev', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/e8ef52b6d9a4a57d42833988e0fd767a/thumbnails/thumbnail.jpg' },
  { handle: '@momma.trades', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/f704411225f78c86e7182f3882ee61f6/thumbnails/thumbnail.jpg' },
  { handle: '@tarzantradez', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/f450ad3fa51abfefe99541e16308db5d/thumbnails/thumbnail.jpg' },
  { handle: '@elitetraders.io', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/2d21f46d81e78a604954bb88a9e112f4/thumbnails/thumbnail.jpg' },
  { handle: '@jayrobertoz', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/e22721c71fd10026ad9dd5392745783f/thumbnails/thumbnail.jpg' },
  { handle: '@daytrading.gold2', thumb: 'https://customer-8jz8d1npqsmwxft5.cloudflarestream.com/448238ca3a6f3f7c906fcb3d3581f769/thumbnails/thumbnail.jpg' },
];

const VideoCard: React.FC<{ item: typeof videoTestimonials[0] }> = ({ item }) => (
  <div className="relative rounded-xl overflow-hidden mx-2 shrink-0 cursor-pointer group"
    style={{ width: '160px', height: '280px' }}>
    <img
      src={item.thumb}
      alt={item.handle}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
    {/* Play button */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
        </svg>
      </div>
    </div>
    {/* Handle */}
    <div className="absolute bottom-2 left-2 right-2">
      <p className="text-white text-xs font-mono truncate drop-shadow-lg">{item.handle}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useInView();
  const row1 = [...videoTestimonials, ...videoTestimonials];
  const row2 = [...videoTestimonials.slice(5), ...videoTestimonials, ...videoTestimonials.slice(0, 5)];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-section ${inView ? 'visible' : ''} text-center mb-16`}>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            <span className="text-white">Thousands of traders are already</span>
            <br />
            <span className="gradient-text">using MRKT to improve their edge</span>
          </h2>
          <button className="mt-4 bg-brand-green text-[#050810] font-bold px-6 py-2.5 rounded-lg hover:bg-brand-greenDim transition-all text-sm hover:scale-105">
            Get My Edge Today
          </button>
        </div>

        {/* Row 1 — scroll left */}
        <div className="overflow-hidden mb-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />
          <div className="flex animate-ticker" style={{ animationDuration: '40s' }}>
            {row1.map((t, i) => <VideoCard key={i} item={t} />)}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />
          <div className="flex animate-ticker2" style={{ animationDuration: '45s' }}>
            {row2.map((t, i) => <VideoCard key={i} item={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
