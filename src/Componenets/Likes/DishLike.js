"use client";

import React from 'react'

import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useFavorites } from '@/Theme/ThemeContext';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const DishLike = () => {

    const { favorites, toggleFavorite, isFavorite } = useFavorites();

    if (favorites.length === 0) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="80vh"
            >
                <Typography variant="h6" color="text.secondary">
                    No favorites yet. ❤️ Tap the heart on a dish to add it here!
                </Typography>
            </Box>
        );
    }


    return (
        <>
            <Box p={2}>
                <Typography variant="h5" gutterBottom>
                    My Favorites
                </Typography>

                {favorites.map((item) => (
                    <Card key={item.itemId} sx={{ mb: 2, borderRadius: 2 }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography>{item.title_en}</Typography>

                            <IconButton onClick={() => toggleFavorite(item)}>
                                {isFavorite(item.itemId) ? (
                                    <FavoriteIcon color="error" />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </>
    )
}

export default DishLike