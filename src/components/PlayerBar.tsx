import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, Heart } from 'lucide-react';
import { useState } from 'react';

interface PlayerBarProps {
  currentlyPlaying: {
    title: string;
    artist: string;
    type: string;
  };
}

export function PlayerBar({ currentlyPlaying }: PlayerBarProps) {
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(67);

  return (
    <div className="h-20 lg:h-24 bg-black border-t border-gray-800 px-2 lg:px-4 flex items-center justify-between gap-2">
      {/* Currently Playing */}
      <div className="flex items-center gap-2 lg:gap-4 flex-1 lg:w-80 min-w-0">
        <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center flex-shrink-0">
          <Play className="text-white" fill="white" size={16} className="lg:w-6 lg:h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="truncate text-xs lg:text-base">{currentlyPlaying.title}</p>
          <p className="text-xs text-gray-400 truncate">{currentlyPlaying.artist}</p>
        </div>
        <button 
          onClick={() => setLiked(!liked)}
          className="hover:scale-110 transition-transform hidden sm:block"
        >
          <Heart 
            size={18} 
            className={liked ? 'text-green-500' : 'text-gray-400'}
            fill={liked ? 'currentColor' : 'none'}
          />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex-1 max-w-2xl px-2 lg:px-8 hidden md:block">
        <div className="flex items-center justify-center gap-2 lg:gap-4 mb-2">
          <button className="text-gray-400 hover:text-white transition-colors hidden lg:block">
            <Shuffle size={18} />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={16} className="lg:w-[18px] lg:h-[18px]" />
          </button>
          <button className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <Play className="text-black ml-0.5" fill="black" size={16} className="lg:w-5 lg:h-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={16} className="lg:w-[18px] lg:h-[18px]" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors hidden lg:block">
            <Repeat size={18} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 w-8 lg:w-10 text-right">2:14</span>
          <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all hover:bg-green-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-gray-400 w-8 lg:w-10">3:21</span>
        </div>
      </div>

      {/* Mobile Play Button */}
      <button className="md:hidden w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
        <Play className="text-black ml-0.5" fill="black" size={18} />
      </button>

      {/* Volume Controls */}
      <div className="hidden lg:flex items-center gap-4 w-80 justify-end">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Volume2 size={20} />
        </button>
        <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-white rounded-full hover:bg-green-500" />
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Maximize2 size={18} />
        </button>
      </div>
    </div>
  );
}
