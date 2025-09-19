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
                background: `linear-gradient(#fff, #fff) padding-box, 
                  linear-gradient(to right, #FF6A00, #FFD700) border-box`,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                width: '100%',      // 👈 always full width of parent
                maxWidth: '100%',      // 👈 optional limit, can remove if you want fluid
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
                    <CardContent sx={{ px: isEngAndSmall ? "22px" : null , flex: 1 }}> {/* 👈 text takes remaining space */}
                        <Typography fontSize={language === 'mr' ? (isSmallMobile ? "17px" : '16px') : (isSmallMobile ? "17px" : '16px')} textAlign={"center"} fontWeight={500} sx={{ color: "#aa02aaff" }}>
                            {language === 'mr' ? title_mr : title_en}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CommonCard





// width: language === 'mr' ? (isSmallMobile ? "100%" : isMobile ? "111px" :  "111px") : (isSmallMobile ? "100px" : isMobile ? "135px" : "115px") }}