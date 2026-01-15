import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { MainContent } from './components/MainContent';
import { PlayerBar } from './components/PlayerBar';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState({
    title: 'Gaming Hub Event Platform',
    artist: 'React.js, Node.js, MongoDB',
    type: 'project'
  });

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          currentView={currentView} 
          setCurrentView={setCurrentView}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar setSidebarOpen={setSidebarOpen} />
          <MainContent 
            currentView={currentView} 
            setCurrentlyPlaying={setCurrentlyPlaying}
          />
        </div>
      </div>
      <PlayerBar currentlyPlaying={currentlyPlaying} />
    </div>
  );
}
