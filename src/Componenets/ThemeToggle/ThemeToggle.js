"use client";
import { useState, useRef } from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "@/Theme/ThemeContext";

export default function ThemeToggle() {
    const { mode, toggleTheme } = useThemeContext();
    const [ripples, setRipples] = useState([]);
    const buttonRef = useRef(null);

    const handleToggle = () => {
        toggleTheme();

        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const newRipple = {
                id: Date.now(),
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                color:
                    mode === "light"
                        ? "radial-gradient(circle at center, #121212, #1e1e1e, #000000)"
                        : "radial-gradient(circle at center, #fef8e3, #ffffff, #f5f5f5)",
            };
            setRipples((prev) => [...prev, newRipple]);

            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
            }, 1200);
        }
    };

    return (
        <>
            <Tooltip
                title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
            >
                <Box ref={buttonRef} component="span">
                    <IconButton onClick={handleToggle} color="inherit">
                        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </Box>
            </Tooltip>

            {/* Ripple Effect */}
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.div
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.9 }}
                        animate={{ scale: 50, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2.6, // control speed
                            ease: [0.32, 1, 0.36, 1], // smooth Gemini feel
                        }}
                        style={{
                            position: "fixed",
                            top: ripple.y,
                            left: ripple.x,
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            backgroundImage: ripple.color,
                            backgroundSize: "200% 200%",
                            backgroundPosition: "center",
                            transform: "translate(-50%, -50%)",
                            zIndex: 9999,
                            pointerEvents: "none",
                        }}
                    />
                ))}
            </AnimatePresence>
        </>
    );
}
