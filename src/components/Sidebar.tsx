import { Home, Search, Library, PlusSquare, Heart, Briefcase, Code, Award, GraduationCap, Mail, X } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ currentView, setCurrentView, sidebarOpen, setSidebarOpen }: SidebarProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'skills', icon: Search, label: 'Explore Skills' },
    { id: 'library', icon: Library, label: 'My Library' },
  ];

  const portfolioSections = [
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'experience', icon: Code, label: 'Tech Stack' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'achievements', icon: Heart, label: 'Achievements' },
  ];

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-black flex flex-col h-full
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      {/* Logo */}
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-2xl flex items-center gap-2">
          <Code className="text-green-500" size={32} />
          <span className="font-bold">Smarty</span>
        </h1>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-full flex items-center gap-4 px-3 py-2 rounded transition-colors ${
              currentView === item.id
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="border-t border-gray-800 mt-4 mx-6" />

      {/* Portfolio Sections */}
      <nav className="px-3 mt-4 flex-1 overflow-y-auto">
        <button
          onClick={() => handleNavClick('create')}
          className="w-full flex items-center gap-4 px-3 py-2 text-gray-400 hover:text-white transition-colors"
        >
          <PlusSquare size={24} />
          <span>Create Playlist</span>
        </button>

        {portfolioSections.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-full flex items-center gap-4 px-3 py-2 rounded transition-colors ${
              currentView === item.id
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Contact Card */}
      <div className="p-4 m-4 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-lg">
        <Mail className="text-green-500 mb-2" size={20} />
        <p className="text-xs text-gray-300 mb-2">Let's collaborate on amazing projects!</p>
        <a 
          href="mailto:bindukushi1621@gmail.com"
          className="text-xs bg-white text-black px-4 py-2 rounded-full inline-block hover:scale-105 transition-transform"
        >
          Get in touch
        </a>
      </div>
    </div>
    </>
  );
}
