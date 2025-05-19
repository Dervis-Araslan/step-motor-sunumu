import { motion } from 'framer-motion';

const StepButton = ({ step, isHovered, onHover, onClick }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center w-28 h-28 rounded-full bg-gray-800 shadow-xl cursor-pointer border-2 p-3 text-center"
            style={{
                borderColor: step.color,
                boxShadow: isHovered ? `0 0 20px ${step.color}` : 'none'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onClick(step.id)}
            onMouseEnter={() => onHover(step.id)}
            onMouseLeave={() => onHover(null)}
        >
            <i className={`fas fa-${step.icon} text-2xl mb-2`} style={{ color: step.color }}></i>
            <h3 className="font-bold text-sm">{step.title}</h3>
        </motion.div>
    );
};

export default StepButton;