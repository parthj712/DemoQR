"use client";
import { useState, useRef } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "@/Theme/ThemeContext";

export default function ThemeToggle() {
    const { mode, toggleTheme } = useThemeContext();
    const [ripples, setRipples] = useState([]);
    const toggleRef = useRef(null);

    const handleToggle = () => {
        toggleTheme();

        if (toggleRef.current) {
            const rect = toggleRef.current.getBoundingClientRect();
            const newRipple = {
                id: Date.now(),
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                color:
                    mode === "light"
                        ? "radial-gradient(circle at center, #494747, #666666, #1e1e1e)"
                        : "radial-gradient(circle at center, #FFD54F, #FF8A65, #FFB300)",
            };
            setRipples((prev) => [...prev, newRipple]);

            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
            }, 1000);
        }
    };

    return (
        <>
            <Box
                ref={toggleRef}
                onClick={handleToggle}
                sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    bgcolor: mode === "light" ? "#f1f1f1" : "#1e1e1e",
                    border: mode === "light" ? "1px solid #ccc" : "1px solid #333",
                    p: 1,
                }}
            >
                {/* Animated knob */}
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{
                        position: "absolute",
                        top: 4,
                        left: 4,
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: mode === "light" ? "#fff" : "#2c2c2c",
                        boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 15,
                        color: mode === "light" ? "#FFD700" : "#fff",
                    }}
                >
                    <AnimatePresence mode="wait">
                        {mode === "light" ? (
                            <motion.div
                                key="light"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <LightModeIcon />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="dark"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <DarkModeIcon />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </Box>

            {/* Expanding ripple animation */}
            <AnimatePresence>
                {ripples.map((ripple) => (
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
