import Image from 'next/image'
import { motion } from "framer-motion";
import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLanguage } from '@/Context/LanguageContext';
import { keyframes } from '@emotion/react';
import demo from "../../../public/demo.jpeg";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const HeadingText = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:380px)');
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const textGradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

    // Define the glow animation
    const glow = keyframes`
  0% { box-shadow: 0 0 10px #00C853; }
  50% { box-shadow: 0 0 15px #00C853; }
  100% { box-shadow: 0 0 15px #00C853; }
`
    const { language } = useLanguage();

    const mainTitle = language === 'mr' ? "स्कॅन & डाईन" : "Scan N Dine";

    const secTitle = language === 'mr' ? "तुमचा मेनू, सुंदरपणे पुन्हा डिझाइन केलेला." : "Your menu, beautifully reimagined";



    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} gap={2} py={1.5}>

                <Box gap={1} display={"flex"} flexDirection={"row"} pl={isMobile ? 3 : 0} py={isMobile ? 1.5 : 0} justifyContent={isMobile ? "space-between" : "center"} alignItems={"center"}>
                    {/* demo */}
                    {/* <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src={demo}
                            alt="Manas Hotel demo"
                            width={language === "mr" ? (isSmallMobile ? 140 : isMobile ? 180 : 160) : (isSmallMobile ? 135 : isMobile ? 160 : 160)} // you can adjust
                            height={language === "mr" ? (isSmallMobile ? 80 : isMobile ? 130 : 160) : (isSmallMobile ? 80 : isMobile ? 120 : 160)} // you can adjust
                            priority // loads immediately
                        />
                    </motion.div> */}

                    {/* hotel name */}
                    <motion.div
                        initial={{ x: -120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Box display={"flex"} gap={language === "mr" ? (isSmallMobile ? 1 : 0) : 0} flexDirection={language === "mr" ? ("column") : (isSmallMobile ? "column" : "column")} justifyContent={isSmallMobile ? "flex-start" : "center"} alignItems={language === "mr" ? (isSmallMobile ? "flex-start" : "center") : (isSmallMobile ? "flex-start" : "center")}>
                            <Typography
                                textAlign={"left"}
                                fontSize={language === "mr" ? (isSmallMobile ? "28px" : "32px") : (isSmallMobile ? "28px" : "32px")}
                                fontWeight={500}
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    color: theme.palette.text.primary, // 👈 dynamic text color
                                }}
                            >
                                {mainTitle}
                            </Typography>
                            <Typography
                                textAlign={"left"}
                                fontSize={language === "mr" ? (isSmallMobile ? "14px" : isMobile ? "21px" : "24px") : (isSmallMobile ? "14px" : isMobile ? "20px" : "24px")}
                                fontWeight={600}
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    color: theme.palette.text.primary, // 👈 dynamic text color
                                }}
                            >
                                {secTitle}
                            </Typography>
                        </Box>
                    </motion.div>

                </Box>
                {/* line */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Box
                        sx={{
                            width: isSmallMobile ? '90%' : '60px', // adjust width
                            height: '1.5px', // thickness of the line
                            backgroundColor: '#00C853', // yellow color
                            borderRadius: '2px', // rounded edges
                            mx: 'auto', // center horizontally
                            // animation: `${glow} 4s infinite ease-in-out`, // apply glow animation
                        }}
                    />
                </motion.div>
            </Box>
        </div>
    )
}

export default HeadingText