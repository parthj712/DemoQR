'use client';

import { useState, useRef } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/Context/LanguageContext';
import CustomSwitch from '../CustomSwitch/CustomSwitch';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();
    const [ripples, setRipples] = useState([]);
    const switchRef = useRef(null);

    const handleToggle = () => {
        // toggle language immediately
        toggleLanguage();

        if (switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect();
            const newRipple = {
                id: Date.now(), // unique key
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                color: language === 'en'
                    ? 'radial-gradient(circle at center, #4285F4, #34A853, #FBBC05, #EA4335)'
                    : 'radial-gradient(circle at center, #EA4335, #FBBC05, #34A853, #4285F4)',
            };
            setRipples(prev => [...prev, newRipple]);

            // remove ripple after animation ends
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== newRipple.id));
            }, 1000); // match animation duration
        }
    };

    return (
        <>
            {/* Toggle switch */}
            <Box ref={switchRef}>
                <CustomSwitch checked={language === 'en'} onChange={handleToggle} />
            </Box>

            {/* Expanding ripple animations */}
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.div
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 50, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2.6,
                            ease: [0.32, 1, 0.36, 1], // smooth Gemini feel
                        }}
                        style={{
                            position: 'fixed',
                            top: ripple.y,
                            left: ripple.x,
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            backgroundImage: ripple.color,
                            backgroundSize: '200% 200%',
                            backgroundPosition: 'center',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 9999,
                            pointerEvents: 'none', // allow switch clicks through
                        }}
                    />
                ))}
            </AnimatePresence>
        </>
    );
}
