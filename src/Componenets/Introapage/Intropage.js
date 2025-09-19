"use client";

import Image from 'next/image';
import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useLanguage } from '@/Context/LanguageContext';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import demo from "../../../public/demo.jpeg";


const Intropage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:380px)');
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


    const textGradientAnimation = keyframes`
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    `;

    const { language } = useLanguage();

    const mainTitle = language === 'mr' ? "स्कॅन & डाईन" : "Scan N Dine";

    const secTitle = language === 'mr' ? "तुमचा मेनू, सुंदरपणे पुन्हा डिझाइन केलेला." : "Your menu, beautifully reimagined";

    const menuTitle = language === 'mr' ? "मेन्यू कार्ड (eMenu)" : "Menu Card (eMenu)";


    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#fef8e3ff",
        }}>
            <div style={{ position: "absolute", top: "50px", right: "40px" }}>
                <LanguageToggle />
            </div>
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: "#fef8e3ff",
                paddingTop: 170,
                gap: 13
            }}>
                <Image
                    src={demo}
                    alt="Manas Hotel Logo"
                    width={isSmallMobile ? 240 : 240} // you can adjust
                    height={isSmallMobile ? 160 : 160} // you can adjust
                    priority // loads immediately
                />
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                    <Typography
                        textAlign="center"
                        fontSize={isSmallMobile ? "50px" : "50px"}
                        fontWeight={700}
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
                        textAlign="center"
                        fontSize={isSmallMobile ? "28px" : "24px"}
                        fontWeight={700}
                        sx={{
                            position: 'relative',
                            display: 'inline-block',
                            color: 'black',
                        }}
                    >
                        {secTitle}
                    </Typography>
                </Box>
            </div>
        </div >
    )
}

export default Intropage