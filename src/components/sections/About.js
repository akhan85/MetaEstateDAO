import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-neutral-900">
            Revolutionizing Digital Portfolio Ownership
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Collective Ownership
              </h3>
              <p className="text-neutral-700">
                Join a community of investors to collectively own and manage premium digital assets across various platforms (SaaS companies, YT channels etc). 
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                Decentralized Governance
              </h3>
              <p className="text-neutral-700">
                Participate in key decisions through our DAO structure, ensuring transparent and democratic management, operation and re-sale of digital assets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}