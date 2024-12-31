import { useState } from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    title: "Phase 1: Ideation and Community Building",
    details: [
      "Establish project vision and define core values",
      "Grow the community through outreach campaigns"
    ]
  },
  {
    title: "Phase 2: Tokenomics and Governance Setup",
    details: [
      "Design tokenomics for weighted voting rights and governance mechanisms",
      "Develop and deploy smart contracts for fund collection and distribution",
      "Set up a secure blockchain wallet and dashboard for tracking investments"
    ]
  },
  {
    title: "Phase 3: Fundraising and Token Distribution",
    details: [
      "Launch a minimum viable product (MVP) of the platform",
      "Allow members to buy into the project with recurring monthly contributions ($100 minimum)",
      "Distribute governance tokens based on investments"
    ]
  },
  {
    title: "Phase 4: Asset Acquisition Framework",
    details: [
      "Develop a transparent process for evaluating and voting on potential acquisitions",
      "Launch community-driven discussions and deliberations about potential purchases",
      "Establish hiring guidelines for asset management and operations"
    ]
  },
  {
    title: "Phase 5: Acquisition and Management of Assets",
    details: [
      "Make the first acquisition based on community votes",
      "Hire community members or external professionals to manage the acquired asset",
      "Start generating revenue and track performance metrics"
    ]
  },
  {
    title: "Phase 6: Profit Distribution and Scaling",
    details: [
      "Disburse profits to members after deducting operational costs",
      "Refine governance and voting mechanisms based on user feedback",
      "Scale the platform by acquiring additional assets and expanding the member base",
      "Integrate AI and analytics tools to enhance decision-making"
    ]
  }
];

export default function Roadmap() {
    const [expandedPhase, setExpandedPhase] = useState(null);
  
    return (
      <section id="roadmap" className="min-h-screen py-24 bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Our Roadmap
          </motion.h2>
  
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4F7EF7]" />
  
            {phases.map((phase, index) => (
              <div key={index} className="relative mb-8">
                {/* Timeline node */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#4F7EF7] rounded-full z-10"
                  style={{ top: '2rem' }}
                >
                  <div className="absolute w-8 h-8 bg-[#4F7EF7]/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping" 
                       style={{ left: '50%', top: '50%' }} />
                </div>
  
                {/* Content container */}
                <motion.div
                  className={`relative ${index % 2 === 0 ? 'pr-8 mr-auto text-right' : 'pl-8 ml-auto text-left'} w-1/2`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Phase content */}
                  <div 
                    className={`bg-[#2a2a2a]/90 backdrop-blur-md rounded-lg p-6 cursor-pointer shadow-xl 
                      hover:shadow-[#4F7EF7]/20 hover:shadow-2xl transition-all duration-300
                      border border-[#4F7EF7]/20 hover:border-[#4F7EF7]/50
                      ${expandedPhase === index ? 'ring-2 ring-[#4F7EF7]' : ''}`}
                    onClick={() => setExpandedPhase(expandedPhase === index ? null : index)}
                  >
                    {/* Connect line to center */}
                    <div 
                      className={`absolute top-8 ${index % 2 === 0 ? 'right-0 w-8' : 'left-0 w-8'} h-0.5 bg-[#4F7EF7]`}
                      style={{ [index % 2 === 0 ? 'right' : 'left']: '-2rem' }}
                    />
  
                    <h3 className="text-xl font-semibold mb-2 text-white">{phase.title}</h3>
  
                    {expandedPhase === index && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 mt-4 text-gray-300"
                      >
                        {phase.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="mr-2 text-[#4F7EF7]">•</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }