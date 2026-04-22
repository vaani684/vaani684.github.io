import React, { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: 'AJ Weddings',
      initials: 'AJ',
      role: 'Freelance Project',
      dates: 'Jan 2026 – Feb 2026',
      summary: 'Handled coordination and operations for wedding planning and décor execution.',
      messages: [
        'Managed timelines, vendors, and on-ground coordination',
        'Supported execution of wedding décor and overall setup',
        'Ensured smooth flow of operations during events'
      ],
      color: 'bg-brand-blush text-brand-dark'
    },
    {
      id: 2,
      company: 'Pink & Blue Events',
      initials: 'PB',
      role: 'Event Intern',
      dates: 'Oct 2025 – Dec 2025',
      summary: 'Contributed to event design and on-ground execution while gaining hands-on industry experience.',
      messages: [
        'Assisted in decoration design and theme execution',
        'Supported on-ground field work and setup coordination',
        'Worked closely with the team to ensure smooth event delivery'
      ],
      color: 'bg-brand-gold text-brand-dark'
    },
    {
      id: 3,
      company: 'Bee Gee Automobiles',
      initials: 'BG',
      role: 'Accounts & Operations',
      dates: 'Aug 2024 – Sep 2025',
      summary: 'Managed business operations and digital platforms to ensure workflow efficiency.',
      messages: [
        'Handled CRM portals, CPSC scores, and pipeline management',
        'Maintained process adherence and operational consistency',
        'Managed financial records, budgeting, and expense tracking',
        'Gained understanding of customer lifecycle and business processes'
      ],
      color: 'bg-brand-caramel text-white'
    },
    {
      id: 4,
      company: 'Blunt Entertainment',
      initials: 'BE',
      role: 'Event Management Intern',
      dates: 'Aug 2022 – Jan 2023',
      summary: 'Supported on-ground event execution during college, focusing on audience engagement.',
      messages: [
        'Managed event decoration and setup',
        'Contributed to crowd pulling and audience engagement',
        'Handled booking coordination and basic client interactions'
      ],
      color: 'bg-brand-dark text-brand-cream'
    }
  ];

  const [activeId, setActiveId] = useState(1);
  const activeChat = experiences.find(exp => exp.id === activeId);

  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-brand-cream relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">The Journey So Far</h2>
          <p className="text-brand-dark/70 italic text-sm md:text-base max-w-md mx-auto">
            Conversations, collaborations, and career growth.
          </p>
        </div>

        {/* Chat UI Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-brand-dark/5 min-h-[500px]">
          
          {/* Left Sidebar - Chat List */}
          <div className="w-full md:w-1/3 bg-gray-50 border-r border-brand-dark/10 flex flex-col hide-scrollbar overflow-y-auto max-h-[300px] md:max-h-full">
            <div className="p-5 border-b border-brand-dark/10 bg-white sticky top-0 z-10">
              <h3 className="font-bold text-brand-dark text-lg">Messages</h3>
            </div>
            
            <div className="flex-1">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`flex items-center p-4 cursor-pointer transition-colors border-b border-brand-dark/5 ${
                    activeId === exp.id ? 'bg-brand-blush/20 border-l-4 border-l-brand-caramel' : 'hover:bg-gray-100 border-l-4 border-l-transparent'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm ${exp.color} shadow-sm`}>
                    {exp.initials}
                  </div>
                  <div className="ml-4 flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className={`font-semibold text-sm truncate ${activeId === exp.id ? 'text-brand-dark' : 'text-gray-700'}`}>
                        {exp.company}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{exp.role}</p>
                  </div>
                  {activeId === exp.id && (
                    <div className="w-2 h-2 rounded-full bg-brand-caramel ml-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Chat Content */}
          <div className="w-full md:w-2/3 bg-white flex flex-col">
            {/* Chat Header */}
            <div className="p-4 md:p-5 border-b border-brand-dark/10 flex justify-between items-center bg-white sticky top-0 z-10 shadow-sm">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${activeChat.color} shadow-sm`}>
                  {activeChat.initials}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-brand-dark leading-tight">{activeChat.company}</h4>
                  <p className="text-xs text-brand-caramel font-medium">{activeChat.role}</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-brand-dark bg-brand-gold/20 font-medium px-4 py-1.5 rounded-full border border-brand-gold/30 shadow-sm">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-caramel" />
                {activeChat.dates}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 md:p-8 flex-1 bg-gray-50/50 overflow-y-auto space-y-6">
              
              {/* Summary Bubble (Received style) */}
              <div className="flex flex-col items-start animate-fade-in">
                <span className="text-[10px] text-gray-400 mb-1 ml-2 uppercase font-medium tracking-wide">Overview</span>
                <div className="bg-brand-cream text-brand-dark p-4 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border border-brand-dark/5 text-sm md:text-base leading-relaxed">
                  {activeChat.summary}
                </div>
              </div>

              {/* Responsibilities Label */}
              <div className="flex justify-center my-4 opacity-60">
                <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">Key Responsibilities</span>
              </div>

              {/* Responsibility Bubbles (Sent style) */}
              <div className="flex flex-col items-end space-y-3 animate-fade-in-delayed">
                {activeChat.messages.map((msg, i) => (
                  <div key={i} className="bg-brand-caramel text-white p-3.5 px-5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm text-sm md:text-base">
                    {msg}
                  </div>
                ))}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
