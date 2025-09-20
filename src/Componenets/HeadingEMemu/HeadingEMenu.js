'use client';

import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { motion } from "framer-motion";
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useLanguage } from '@/Context/LanguageContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const HeadingEMenu = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:380px)');
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const { language } = useLanguage();

    const menuTitle = language === 'mr' ? "मेन्यू कार्ड (eMenu)" : "Menu Card (eMenu)";

    const essentails = language === 'mr' ? "सबमेनू पाहण्यासाठी मेनूवर क्लिक करा" : "Click the Menu to see Submenu"


    // 🎨 Dynamic background based on theme mode
    const headerBackground =
        theme.palette.mode === "light"
            ? "linear-gradient(-45deg, #00A413, #00C853, #00A413)" // Green gradient for light mode
            : "linear-gradient(-45deg, #1E1E1E, #2C2C2C, #1E1E1E)"; // Subtle dark gradient for dark mode


    return (
        <div>
            <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                <Box display={"flex"} flexDirection={"column"} gap={1} 
                sx={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1100,
                }}>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            position: "sticky",
                            top: 0,              // sticks to top
                            zIndex: 1000,        // keeps it above other elements
                            background: "white", // prevent text overlap when scrolling
                        }}
                    >
                        <Typography
                            textAlign="center"
                            fontSize={isSmallMobile ? "15px" : isMobile ? "18px" : "22px"}
                            fontWeight={600}
                            p={0.5}
                            sx={{
                                position: "relative",
                                color: "#AA2E30",
                                overflow: "hidden",
                                display: "inline-block",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: "-75%",
                                    width: "50%",
                                    height: "100%",
                                    background:
                                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                                    transform: "skewX(-20deg)",
                                    animation: "shimmer 2s infinite",
                                },
                                "@keyframes shimmer": {
                                    "0%": { left: "-75%" },
                                    "100%": { left: "125%" },
                                },
                            }}
                        >
                            {essentails}
                        </Typography>
                    </motion.div>


                    <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}
                        px={4} py={0.8} alignItems={"center"}
                        sx={{
                            background: headerBackground,
                            backgroundSize: "600% 600%",
                            animation: "gradientMove 3s ease infinite",
                            color: "white",
                            "@keyframes gradientMove": {
                                "0%": { backgroundPosition: "0% 50%" },
                                "50%": { backgroundPosition: "100% 50%" },
                                "100%": { backgroundPosition: "0% 50%" },
                            },
                        }}>
                        <Typography textAlign={"center"} fontSize={isSmallMobile ? "14px" : isMobile ? "16px" : "22px"} fontWeight={600} p={0.5} color='white'>
                            {menuTitle}
                        </Typography>
                        {isMobile && <LanguageToggle />}
                        {isMobile && <ThemeToggle />}


                    </Box>

                </Box>

            </motion.div>
        </div>
    )
}

export default HeadingEMenu