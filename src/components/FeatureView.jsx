import FeatureCard from './FeatureCard'
import { cards } from '../data/Cards'
import { AnimatePresence, motion } from 'framer-motion'

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.02,
      staggerChildren: 0.075,
    },
  },
}

export default function FeatureView() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center px-10 py-14"
      >
        <div className="max-w-sm md:max-w-md">
          <h1 className="text-preset2 mb-4 text-center">
            Reliable, efficient delivery
            <br />
            <span className="text-preset1">Powered by Technology</span>
          </h1>
          <p className="text-preset4 mb-14 text-center">
            Our Artificial Intelligence powered tools use millions of project data points to ensure
            that your project is successful
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid-layout md:gap-8"
        >
          {cards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
