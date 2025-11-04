import { Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ExperienceViewProps {
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function ExperienceView({ setCurrentlyPlaying }: ExperienceViewProps) {
  const techStack = [
    {
      category: 'Frontend Frameworks',
      technologies: [
        { name: 'React.js', experience: 'Advanced', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400' },
        { name: 'Angular', experience: 'Intermediate', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400' },
        { name: 'Vue.js', experience: 'Intermediate', image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400' },
      ]
    },
    {
      category: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', experience: 'Advanced', image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400' },
        { name: 'Django', experience: 'Intermediate', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400' },
        { name: 'Spring Boot', experience: 'Intermediate', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400' },
      ]
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'MongoDB', experience: 'Advanced', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400' },
        { name: 'PostgreSQL', experience: 'Intermediate', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400' },
        { name: 'MySQL', experience: 'Intermediate', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400' },
      ]
    },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative min-h-[300px] lg:h-80 bg-gradient-to-b from-orange-900 to-gray-900 px-4 lg:px-8 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6">
          <div className="w-32 h-32 lg:w-56 lg:h-56 bg-gradient-to-br from-orange-400 to-orange-700 rounded-lg shadow-2xl overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1650600538903-ec09f670c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzYyMTU2MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tech Stack"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pb-4 lg:pb-6 text-center lg:text-left">
            <p className="text-xs lg:text-sm uppercase mb-1 lg:mb-2">Technology Collection</p>
            <h1 className="text-4xl lg:text-8xl mb-3 lg:mb-6">Tech Stack</h1>
            <p className="text-sm lg:text-base text-gray-300">Complete arsenal of development tools</p>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-4 lg:py-6">
        <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all shadow-xl">
          <Play className="ml-1" fill="black" size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Tech Stack Grid */}
      <div className="px-4 lg:px-8 space-y-8 lg:space-y-12">
        {techStack.map((stack, idx) => (
          <div key={idx}>
            <h2 className="text-xl lg:text-3xl mb-4 lg:mb-6">{stack.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {stack.technologies.map((tech, techIdx) => (
                <div
                  key={techIdx}
                  onClick={() => setCurrentlyPlaying({ title: tech.name, artist: stack.category, type: 'tech' })}
                  className="bg-gray-900/40 rounded-lg overflow-hidden hover:bg-gray-800/60 transition-all cursor-pointer group"
                >
                  <div className="relative aspect-square">
                    <ImageWithFallback
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <button className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-xl">
                      <Play className="ml-0.5" fill="black" size={16} className="lg:w-5 lg:h-5" />
                    </button>
                  </div>
                  <div className="p-3 lg:p-4">
                    <h3 className="mb-1 text-sm lg:text-base">{tech.name}</h3>
                    <p className="text-xs lg:text-sm text-gray-400">{tech.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
