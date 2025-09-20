"use client";

import React from 'react'

import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useFavorites } from '@/Theme/ThemeContext';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeadingEMenu from '../HeadingEMemu/HeadingEMenu';
import { useLanguage } from '@/Context/LanguageContext';

const DishLike = () => {

    const { favorites, toggleFavorite, isFavorite } = useFavorites();

    const { language } = useLanguage();

    if (favorites.length === 0) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                height="100vh"
            >
                {/* Header */}
                <Box py={2}>
                    <HeadingEMenu />
                </Box>

                {/* Centered message */}
                <Box
                    flexGrow={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h6" color="text.secondary" textAlign="center">
                        Your favorites list is empty! 🌟 Tap the ❤️ on your favorite dishes to fill it up!
                    </Typography>
                </Box>
            </Box>
        );
    }



    return (
        <>
            <Box>

                <Box py={1}>
                    <HeadingEMenu />
                </Box>

                <Box px={2}>
                    <Typography variant="h6" py={1.5}>
                        My Favorites
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
                                <Typography>{language === 'mr' ? (item.title_mr || "") : (item.title_en || "")}</Typography>

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
        </>
    )
}

export default DishLike