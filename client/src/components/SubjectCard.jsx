import { motion } from 'framer-motion';

const SubjectCard = ({ subjectName, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-xl shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <h2 className="text-2xl font-bold">{subjectName}</h2>
    <p className="mt-2 text-sm">Start your learning journey</p>
  </motion.div>
);

export default SubjectCard;