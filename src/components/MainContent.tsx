import { HomeView } from './views/HomeView';
import { SkillsView } from './views/SkillsView';
import { ProjectsView } from './views/ProjectsView';
import { ExperienceView } from './views/ExperienceView';
import { CertificationsView } from './views/CertificationsView';
import { EducationView } from './views/EducationView';
import { AchievementsView } from './views/AchievementsView';
import { LibraryView } from './views/LibraryView';

interface MainContentProps {
  currentView: string;
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function MainContent({ currentView, setCurrentlyPlaying }: MainContentProps) {
  return (
    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
      {currentView === 'home' && <HomeView setCurrentlyPlaying={setCurrentlyPlaying} />}
      {currentView === 'skills' && <SkillsView setCurrentlyPlaying={setCurrentlyPlaying} />}
      {currentView === 'projects' && <ProjectsView setCurrentlyPlaying={setCurrentlyPlaying} />}
      {currentView === 'experience' && <ExperienceView setCurrentlyPlaying={setCurrentlyPlaying} />}
      {currentView === 'certifications' && <CertificationsView setCurrentlyPlaying={setCurrentlyPlaying} />}
      {currentView === 'education' && <EducationView setCurrentlyPlaying={setCurrentlyPlaying} />}
      {currentView === 'achievements' && <AchievementsView setCurrentlyPlaying={setCurrentlyPlaying} />}
      {currentView === 'library' && <LibraryView setCurrentlyPlaying={setCurrentlyPlaying} />}
    </main>
  );
}
