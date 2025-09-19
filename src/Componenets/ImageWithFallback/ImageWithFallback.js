import { useLanguage } from '@/Context/LanguageContext';
import { CardMedia, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'

const ImageWithFallback = ({ src, alt, ...props }) => {

    const [imgSrc, setImgSrc] = useState("/Fallback.png"); // start with fallback
    const { language } = useLanguage();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    // const isMobile = useMediaQuery('(min-width:370px) and (max-width:600px)'); // <600px
    // const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:350px)');

    const isBelow375 = useMediaQuery('(max-width:374px)');
    const is375to425 = useMediaQuery('(min-width:375px) and (max-width:425px)');

    const isSmallMobile = useMediaQuery(theme.breakpoints.down(380));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const isEngAndSmall = language === "en" && isBelow375;

    useEffect(() => {
        if (src) setImgSrc(src); // update when src changes
    }, [src]);

    return (
        <CardMedia
            component="img"
            sx={{
                // width: isEngAndSmall ? 100 : "100%",   // 👈 fixed width in row mode
                // height: isEngAndSmall ? 100 : 140, // keep aspect ratio in row mode
                width: isMobile ? 130 : 140,   // 👈 responsive width
                height: isMobile ? 100 : 140,
                objectFit: "cover",
                borderRadius: isEngAndSmall ? "6px 0 0 2px" : "6px 2px 0 0", // rounded correctly
                flexShrink: 0, // 👈 prevents image from shrinking
            }}
            // image={"https://i.pinimg.com/736x/83/cf/b4/83cfb4574e98e9d751c526f9244a9529.jpg"}
            image={"/demo.jpeg"}  // 👈 fallback
            alt={alt || "Item"}           // 👈 better alt text
            onError={() => setImgSrc("/demo.jpeg")}
            {...props}
        />
    )
}

export default ImageWithFallback