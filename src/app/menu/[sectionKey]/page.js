'use client';

import React, { useEffect, useState } from 'react';
import {
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Stack,
    useTheme,
    useMediaQuery,
    CircularProgress,
    IconButton
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/Context/LanguageContext';
import HeadingEMenu from '@/Componenets/HeadingEMemu/HeadingEMenu';
import DescriptionWithReadMore from '@/Componenets/DescriptionWithReadMore/DescriptionWithReadMore';
import DiningConstant from '@/Componenets/Constant/AllConstant';
import VegNonVegToggle from '@/Componenets/VegNonVegToggle/VegNonVegToggle';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import { useFavorites } from '@/Theme/ThemeContext';
import DishDetailsDialog from '@/Componenets/DishDetailsDialog/DishDetailsDialog';


const Menu = () => {
    const { language } = useLanguage();
    const { sectionKey } = useParams();
    const router = useRouter();
    const [section, setSection] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterType, setFilterType] = useState("all"); // ✅ filter state

    const [selectedDish, setSelectedDish] = useState(null);


    const { isFavorite, toggleFavorite } = useFavorites();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmallMobile = useMediaQuery('(min-width:320px) and (max-width:374px)');
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));


    useEffect(() => {
        if (!sectionKey) return;

        const key = decodeURIComponent(String(sectionKey)).toLowerCase();

        // ✅ call the function to get the array
        const data = DiningConstant();

        const found = data.find(
            (sec) => sec.sectionKey.toLowerCase() === key
        );

        setSection(found || null);
        // console.log("sectionKey:", sectionKey, "found:", found);
    }, [sectionKey]);

    if (!section) {
        return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    }


    const filteredItems =
        filterType === "all"
            ? section.items
            : section.items.filter((item) => item.type === filterType);



    const handleOpenDish = (dish) => {
        setSelectedDish(dish);
    };

    const handleCloseDish = () => {
        setSelectedDish(null);
    };

    return (
        <Box display="flex" flexDirection="column" sx={{ backgroundColor: "#FAF3E0", minHeight: '100vh', overflowY: 'auto' }}>
            <HeadingEMenu />

            <Box display="flex" flexDirection="column" gap={2} pt={isMobile ? 0 : 10} pb={isMobile ? 5 : 10} sx={{ backgroundColor: "#FAF3E0" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center" py={4} px={isMobile ? 4 : 16}>
                        <Box display="flex" alignItems="center" gap={1} onClick={() => router.back()} sx={{ cursor: 'pointer' }}>
                            <ArrowBackRoundedIcon sx={{ color: "#800080" }} fontSize={isMobile ? 'large' : 'medium'} />
                            {!isMobile && <Typography>Back</Typography>}
                        </Box>

                        <Typography
                            fontSize={isSmallMobile ? "18px" : isMobile ? "18px" : "22px"}
                            fontWeight={600}
                            sx={{ color: "#800080" }}
                        >
                            {language === 'mr' ? (section.title_mr || "").toUpperCase() : (section.title_en || "").toUpperCase()}
                        </Typography>
                    </Box>

                    {/* ✅ Veg/Non-Veg Toggle */}
                    <Box px={isMobile ? 4 : 16} mb={3}>
                        <VegNonVegToggle onChange={setFilterType} />
                    </Box>

                    {filteredItems.length > 0 && (
                        <Box display="flex" flexDirection="column" gap={4} pb={4} px={isMobile ? 4 : 16}>
                            <Grid container spacing={4}>
                                {filteredItems.map(item => (
                                    <Grid item xs={12} sm={6} md={4} key={item.itemId}>
                                        <Card sx={{ backgroundColor: "transparent", boxShadow: 0 }}>
                                            <Box display="flex" flexDirection={isSmallMobile ? "column" : "row"} gap={isSmallMobile ? 0 : 1.5}>
                                                <Box sx={{
                                                    width: isSmallMobile ? '100%' : isMobile ? 135 : null,
                                                    // height: isSmallMobile ? 310 : isMobile ? 200 : null,
                                                    height: isMobile ? 200 : null,
                                                    overflow: 'hidden',
                                                    borderRadius: 2,
                                                    flexShrink: 0,
                                                }}>
                                                    <CardMedia
                                                        component="img"
                                                        image={"/demo.jpeg"}
                                                        alt={item.title_en || "Item"}
                                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        onError={(e) => { e.currentTarget.src = "/demo.jpeg"; }} // 👈 runtime fallback
                                                    />
                                                </Box>

                                                <CardContent sx={{ py: 1.0, px: 0.5 }}>
                                                    <Box display="flex" flexDirection="column" gap={0}>
                                                        <Box display="flex" flexDirection="column" alignItems="baseline" mb={1}>
                                                            <Typography fontSize={isSmallMobile ? "20px" : "16px"} fontWeight={600}>
                                                                {language === 'mr' ? (item.title_mr || "") : (item.title_en || "")}
                                                            </Typography>

                                                            {item.spicyLevel > 0 && (
                                                                <Stack direction="row" spacing={0.5}>
                                                                    {Array.from({ length: item.spicyLevel }).map((_, idx) => (
                                                                        <WhatshotIcon key={idx} color="error" fontSize="small" />
                                                                    ))}
                                                                </Stack>
                                                            )}
                                                        </Box>

                                                        <DescriptionWithReadMore item={item} language={language} isSmallMobile={isSmallMobile} />

                                                        <Typography fontSize={isSmallMobile ? "18px" : "20px"} sx={{
                                                            background: 'linear-gradient(270deg, #FF6A00, #9B1C00, #FF6A00)',
                                                            backgroundSize: '400% 400%',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            animation: 'gradientMove 5s ease infinite',
                                                            fontWeight: 700,
                                                            '@keyframes gradientMove': {
                                                                '0%': { backgroundPosition: '0% 50%' },
                                                                '50%': { backgroundPosition: '100% 50%' },
                                                                '100%': { backgroundPosition: '0% 50%' },
                                                            },
                                                        }}>
                                                            {language === 'mr' ? (item.price_mr || "") : (item.price_en || "")}
                                                        </Typography>

                                                        <IconButton onClick={() => toggleFavorite({ ...item, uniqueId: `${section.sectionKey}-${item.itemId}` })}>
                                                            {isFavorite(`${section.sectionKey}-${item.itemId}`) ? (
                                                                <FavoriteIcon color="error" />
                                                            ) : (
                                                                <FavoriteBorderIcon />
                                                            )}
                                                        </IconButton>

                                                        <IconButton onClick={() => handleOpenDish(item)}>
                                                            <DonutSmallIcon />
                                                        </IconButton>

                                                        <DishDetailsDialog
                                                            dish={selectedDish}
                                                            open={!!selectedDish}
                                                            onClose={handleCloseDish}
                                                        />

                                                    </Box>
                                                </CardContent>
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )}
                </motion.div>
            </Box>
        </Box>
    );
};

export default Menu;
