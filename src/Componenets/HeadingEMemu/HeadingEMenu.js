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
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1100,
                }}
            >
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
            </motion.div>
        </div>
    )
}

export default HeadingEMenu