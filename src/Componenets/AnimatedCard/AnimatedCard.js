import { motion } from "framer-motion";

const AnimatedCard = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}   // 👈 start position (outside left)
            whileInView={{ opacity: 1, x: 0 }}  // 👈 animate to normal
            viewport={{ once: true, amount: 0.2 }} // animate once when 20% visible
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;
