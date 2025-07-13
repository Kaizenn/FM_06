import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function FeatureCard({ title, description, area, image, borderColor }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.1, ease: 'easeOut' } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.05, ease: 'easeOut' } }}
      variants={itemVariants}
      className={`${borderColor} border-secondary-cyan mb-8 max-w-[19.625rem] cursor-pointer rounded-lg border-t-4 bg-white p-8 shadow-lg shadow-blue-100 md:mb-0 lg:w-[21.875rem] lg:max-w-full`}
      style={{ gridArea: area }}
    >
      <h2 className="text-preset3 mb-1.5">{title}</h2>
      <p className="text-preset5 mb-8 text-gray-500">{description}</p>
      <img className="ml-auto" src={image} alt={title} />
    </motion.div>
  )
}
