import { motion } from 'framer-motion';

const ClassCard = ({ classLevel, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white p-6 rounded-xl shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <h2 className="text-2xl font-bold">Class {classLevel}</h2>
    <p className="mt-2 text-sm">Explore interactive learning</p>
  </motion.div>
);

export default ClassCard;