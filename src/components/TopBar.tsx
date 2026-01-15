import { ChevronLeft, ChevronRight, User, Menu } from 'lucide-react';

interface TopBarProps {
  setSidebarOpen: (open: boolean) => void;
}

export function TopBar({ setSidebarOpen }: TopBarProps) {
  return (
    <div className="h-16 bg-gradient-to-b from-gray-900/95 to-black px-4 lg:px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden w-8 h-8 text-white hover:text-green-500 transition-colors"
        >
          <Menu size={24} />
        </button>
        <div className="hidden lg:flex gap-4">
          <button className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center hover:bg-black transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center hover:bg-black transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-black/60 px-3 lg:px-4 py-2 rounded-full hover:bg-black/80 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
          <span className="text-sm hidden sm:inline">Bindu D</span>
        </div>
      </div>
    </div>
  );
}
