import { Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import demo from "../../../public/demo.jpeg";
import { useLanguage } from '@/Context/LanguageContext';
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback';

const CommonCard = ({ title_en, title_mr, imageUpload, imageUrl }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isBelow375 = useMediaQuery('(max-width:374px)');
    const isSmallMobile = useMediaQuery(theme.breakpoints.down(380));


    const { language } = useLanguage();

    const menuTitle = language === 'mr' ? " महाराष्ट्रीयन थाळी " : "Maharashtrian Thali";

    const isEngAndSmall = language === "en" && isBelow375;



    return (
        <div>
            <Card sx={{
                borderRadius: 5,
                overflow: 'hidden',
                borderBottom: '3.5px solid transparent',
                background: `
      linear-gradient(${theme.palette.mode === "light" ? "#ffffff" : "#1e1e1e"}, 
                      ${theme.palette.mode === "light" ? "#ffffff" : "#1e1e1e"}) padding-box, 
      linear-gradient(to right, #FF6A00, #FFD700) border-box
    `,
                boxShadow:
                    theme.palette.mode === "light"
                        ? "0 4px 10px rgba(0, 0, 0, 0.1)"
                        : "0 4px 12px rgba(255, 255, 255, 0.08)", // softer shadow in dark
                width: "100%",
                maxWidth: "100%",
                mb: 2,
            }}>
                <CardActionArea
                    sx={{
                        display: "flex",
                        flexDirection: "row", // 👈 row for eng+small, column otherwise
                        alignItems: "center",
                        width: '100%',
                    }}>
                    <ImageWithFallback
                        src={imageUpload}
                        alt={title_en}
                    />
                    <CardContent sx={{ px: isEngAndSmall ? "22px" : null, flex: 1 }}> {/* 👈 text takes remaining space */}
                        <Typography fontSize={language === 'mr' ? (isSmallMobile ? "17px" : '16px') : (isSmallMobile ? "17px" : '16px')} textAlign={"center"} fontWeight={500} sx={{
                            color:
                                theme.palette.mode === "light"
                                    ? "#aa02aa" // your custom magenta in light mode
                                    : theme.palette.text.primary, // auto-adjusts in dark mode
                        }}>
                            {language === 'mr' ? title_mr : title_en}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div >
    )
}

export default CommonCard





// width: language === 'mr' ? (isSmallMobile ? "100%" : isMobile ? "111px" :  "111px") : (isSmallMobile ? "100px" : isMobile ? "135px" : "115px") }}