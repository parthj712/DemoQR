"use client";

import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useFavorites } from '@/Theme/ThemeContext';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeadingEMenu from '../HeadingEMemu/HeadingEMenu';
import { useLanguage } from '@/Context/LanguageContext';
import vector from "../../../public/vector-like.svg";
import Image from 'next/image';
import { motion } from "framer-motion";

const DishLike = () => {
    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const { language } = useLanguage();

    if (favorites.length === 0) {
        return (
            <Box display="flex" flexDirection="column" height="100vh">
                {/* Header */}
                <Box py={2}>
                    <HeadingEMenu />
                </Box>

                {/* Centered message with animation */}
                <Box
                    flexGrow={1}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    px={2}
                    py={10}
                >
                    {/* Animated SVG Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Box sx={{ width: 200, mb: 2 }}>
                            <Image
                                src={vector}
                                alt="Empty Favorites"
                                style={{ width: "100%", height: "auto" }}
                                priority
                            />
                        </Box>
                    </motion.div>

                    {/* Animated Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            textAlign="center"
                            fontSize={"14px"}
                        >
                            {language === 'mr'
                                ? "तुमच्या आवडत्या पदार्थांची यादी रिकामी आहे! 🌟 आपल्या आवडत्या पदार्थांवर ❤️ टॅप करा आणि यादी भरा!"
                                : "Your favorites list is empty! 🌟 Tap the ❤️ on your favorite dishes to fill it up!"}
                        </Typography>
                    </motion.div>
                </Box>
            </Box>
        );
    }

    return (
        <Box>
            <Box py={1}>
                <HeadingEMenu />
            </Box>

            <Box px={2}>
                <Typography variant="h6" py={1.5}>
                    {language === 'mr' ? "माझ्या आवडत्या पदार्थ" : "My Favorites"}
                </Typography>

                {favorites.map((item) => (
                    <Card key={item.uniqueId} sx={{ mb: 2, borderRadius: 2 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography>
                                {language === 'mr' ? (item.title_mr || "") : (item.title_en || "")}
                            </Typography>

                            <IconButton onClick={() => toggleFavorite(item)}>
                                {isFavorite(item.uniqueId) ? (
                                    <FavoriteIcon color="error" />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default DishLike;
