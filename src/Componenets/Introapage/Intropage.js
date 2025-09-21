"use client";

import Image from 'next/image';
import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useLanguage } from '@/Context/LanguageContext';
import demo from "../../../public/demo.jpeg";


const Intropage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:380px)');
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


    const isDark = theme.palette.mode === "dark";


    const textGradientAnimation = keyframes`
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    `;

    const { language } = useLanguage();

    const mainTitle = language === 'mr' ? "स्कॅन & डाईन" : "Scan N Dine";

    const secTitle = language === 'mr' ? "तुमचा मेनू, सुंदरपणे पुन्हा डिझाइन केलेला." : "Your menu, beautifully reimagined";

    const menuTitle = language === 'mr' ? "मेन्यू कार्ड (eMenu)" : "Menu Card (eMenu)";

    ``
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.background.default,
        }}>

            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: 170,
                gap: 16
            }}>
                <Image
                    src={demo}
                    alt="Manas Hotel Logo"
                    width={isSmallMobile ? 160 : isMobile ? 220 : 240} // you can adjust
                    height={isSmallMobile ? 160 : isMobile ? 140 :  160} // you can adjust
                    priority // loads immediately
                    style={{borderRadius : 15}}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* Main Title with Gradient */}
                    <Typography
                        textAlign="center"
                        fontSize={isSmallMobile ? "30px" : isMobile ? "35px" :  "50px"}
                        fontWeight={600}
                    >
                        {mainTitle}
                    </Typography>

                    {/* Secondary Title */}
                    <Typography
                        textAlign="center"
                        fontSize={isSmallMobile ? "18px" : isMobile ? "22px" :  "24px"}
                        fontWeight={600}
                        sx={{
                            position: "relative",
                            display: "inline-block",
                            color: isDark ? "#ececec" : "#000", // plain adaptive text
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