"use client"


import React from "react";
import { Button, CircularProgress, keyframes } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const SubmitButton = ({ loading, onClick, label }) => {

    const smoothGradient = keyframes`
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        `;



    return (
        <div style={{ position: "relative", height: 48 }}>
            <AnimatePresence mode="wait">
                {!loading ? (
                    <motion.div
                        key="button"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                        style={{ position: "absolute", width: "100%" }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            {...(onClick ? { onClick } : {})} // ✅ only add if present
                            sx={{
                                borderRadius: 3,
                                py: 1.2,
                                fontWeight: 600,
                                background:
                                    "linear-gradient(135deg, #a958dbff, #8E24AA, #e64580ff)",
                                backgroundSize: "600% 600%",
                                animation: `${smoothGradient} 6s ease infinite`,
                                color: "#fff",
                            }}
                        >
                            {label}
                        </Button>
                    </motion.div>
                ) : (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: "absolute",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <CircularProgress size={26} sx={{ color: "#6A1B9A" }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default SubmitButton;  