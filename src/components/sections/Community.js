import { motion } from 'framer-motion';

export default function Community() {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-neutral-900">
            Join Our Community
          </h2>
          
          <p className="text-xl text-neutral-700 mb-12">
            Connect with like-minded individuals passionate about acquiring, managing, and building a profitable digital portfolio of online assets.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="https://discord.gg/X22bWX7Czq" // Replace with actual Discord invite link
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord Community
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}