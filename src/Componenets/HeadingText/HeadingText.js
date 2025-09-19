import Image from 'next/image'
import { motion } from "framer-motion";
import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLanguage } from '@/Context/LanguageContext';
import { keyframes } from '@emotion/react';
import demo from "../../../public/demo.jpeg";

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

    const essentails = language === 'mr' ? "सबमेनू पाहण्यासाठी मेनूवर क्लिक करा" : "Click the Menu to see Submenu"

    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} gap={2} py={1.5}>

                <Box gap={1} display={"flex"} flexDirection={"row"} px={isMobile ? 3 : 0} py={isMobile ? 1.5 : 0} justifyContent={isMobile ? "space-between" : "center"} alignItems={"center"}>
                    {/* demo */}
                    <motion.div
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
                    </motion.div>

                    {/* hotel name */}
                    <motion.div
                        initial={{ x: -120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Box display={"flex"} gap={language === "mr" ? (isSmallMobile ? 1 : 0) : 0} flexDirection={language === "mr" ? ("column") : (isSmallMobile ? "column" : "column")} justifyContent={isSmallMobile ? "center" : "center"} alignItems={language === "mr" ? (isSmallMobile ? "center" : "center") : (isSmallMobile ? "center" : "center")}>
                            <Typography
                                textAlign={"center"}
                                fontSize={language === "mr" ? (isSmallMobile ? "28px" : "32px") : (isSmallMobile ? "28px" : "32px")}
                                fontWeight={500}
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    color: 'black',
                                    WebkitTextFillColor: 'black',
                                    WebkitTextStroke: '4px transparent',
                                    background: 'linear-gradient(180deg, #FAF3E0, #FFE766)',
                                    backgroundSize: '100% 150%',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    animation: `${textGradientAnimation} 2.5s ease infinite`,
                                    '@keyframes strokeGradient': {
                                        '0%': {
                                            backgroundPosition: '0% center',
                                        },
                                        '100%': {
                                            backgroundPosition: '200% center',
                                        },
                                    },
                                }}
                            >
                                {mainTitle}
                            </Typography>
                            <Typography
                                textAlign={"center"}
                                fontSize={language === "mr" ? (isSmallMobile ? "14px" : isMobile ? "21px" : "24px") : (isSmallMobile ? "14px" : isMobile ? "20px" : "24px")}
                                fontWeight={600}
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    color: 'black',
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

                {/* essential */}
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

            </Box>
        </div>
    )
}

export default HeadingText