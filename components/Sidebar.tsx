'use client'

import { motion } from 'framer-motion';

interface ProjectSidebarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
}

const Sidebar: React.FC<ProjectSidebarProps> = ({ setActiveSection, activeSection }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="w-full xl:basis-1/5 bg-gray-800 text-white p-4 rounded-lg mb-8 xl:mb-0"
    >
      {/* <h2 className="text-xl font-bold mb-6">Project Categories</h2> */}
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => setActiveSection('data-analytics')}
            className={`block w-full text-left p-2 rounded ${
              activeSection === 'data-analytics' ? 'bg-gray-600' : 'bg-gray-700'
            } hover:bg-gray-600 transition`}
          >
            Analytics
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection('web-development')}
            className={`block w-full text-left p-2 rounded ${
              activeSection === 'web-development' ? 'bg-gray-600' : 'bg-gray-700'
            } hover:bg-gray-600 transition`}
          >
            Web Development
          </button>
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
