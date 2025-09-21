'use client';

import React from 'react';
import { Paper, Box, useTheme } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { keyframes } from '@emotion/react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const navItems = [
    { label: 'Home', value: '/menu', filledIcon: <HomeIcon />, outlinedIcon: <HomeOutlinedIcon /> },
    { label: 'Search', value: '/search', filledIcon: <SearchIcon />, outlinedIcon: <SearchOutlinedIcon /> },
    { value: '/recommded', filledIcon: <StarRoundedIcon />, outlinedIcon: <StarRoundedIcon />, special: true }, // ⭐ special
    { label: 'Opinion', value: '/form', filledIcon: <DescriptionIcon />, outlinedIcon: <DescriptionOutlinedIcon /> },
    { label: 'Likes', value: '/like', filledIcon: <FavoriteIcon />, outlinedIcon: <FavoriteBorderIcon /> },
];

const BottomNav = () => {
    const router = useRouter();
    const pathname = usePathname();
    const theme = useTheme();

    const smoothGradient = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

    const bottomBorder = theme.palette.mode === "light" ? "white" : "black";

    const gradientBackground =
        theme.palette.mode === "light"
            ? "linear-gradient(270deg, #FFD54F, #FF8A65, #FFB300)"
            : "#494747";

    const gradientTextColor =
        theme.palette.mode === "light"
            ? "linear-gradient(270deg, #FFD54F, #FF8A65, #FFB300)"
            : "#ececec";

    // Orange colors for chef star
    const starBg = theme.palette.mode === "light" ? "#FF9800" : "#FFB74D";
    const starColor = theme.palette.mode === "light" ? "#fff" : "#000";

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2000,
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "10px 0",
                    backgroundColor: theme.palette.background.default,
                    borderTopLeftRadius: "2px",
                    borderTopRightRadius: "2px",
                    alignItems: "center",
                    borderTop: `1px solid ${bottomBorder}`,
                    py: 1.5,
                    boxShadow:
                        "0px 4px 12px rgba(0,0,0,0.15), 0px -4px 12px rgba(0,0,0,0.1), 4px 0px 12px rgba(0,0,0,0.1), -4px 0px 12px rgba(0,0,0,0.1)",
                }}
                elevation={8}
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.value;

                    return (
                        <Box
                            key={item.value}
                            onClick={() => router.push(item.value)}
                            sx={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 1,
                                color: isActive ? "white" : "gray",
                                position: "relative",
                                minWidth: 55,
                                WebkitTapHighlightColor: "transparent",
                                outline: "none",
                            }}
                        >
                            {/* Normal Items */}
                            {!item.special ? (
                                <>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    key="cylinder"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    style={{
                                                        position: "absolute",
                                                        width: "50px",
                                                        height: "30px",
                                                        borderRadius: "20px",
                                                        background: gradientBackground,
                                                        backgroundSize: "300% 300%",
                                                        animation: `${smoothGradient} 1.5s ease infinite`,
                                                        zIndex: -1,
                                                        opacity: 0.6,
                                                    }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        {isActive ? item.filledIcon : item.outlinedIcon}
                                    </Box>

                                    <Box
                                        component="span"
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: isActive ? 600 : 500,
                                            ...(isActive && {
                                                background: gradientTextColor,
                                                backgroundSize: "300% 300%",
                                                animation: `${smoothGradient} 3s ease infinite`,
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                                textFillColor: "transparent",
                                            }),
                                            color: isActive ? undefined : "gray",
                                        }}
                                    >
                                        {item.label}
                                    </Box>
                                </>
                            ) : (
                                // ⭐ Special Chef Icon
                                <motion.div
                                    initial={{ y: 0 }}
                                    animate={{
                                        y: isActive ? -25 : 0, width: isActive ? 55 : 40,
                                        height: isActive ? 55 : 40,
                                    }} // float half outside nav
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "50%",
                                        backgroundColor: starBg,
                                        animation: `${smoothGradient} 1.5s ease infinite`,
                                        color: starColor,
                                        boxShadow: isActive
                                            ? "0px 0px 15px 1px rgba(255,152,0,0.6), 0px 0px 30px 1px rgba(255,152,0,0.4)"
                                            : "none",
                                    }}
                                >
                                    <StarRoundedIcon fontSize="medium" />
                                </motion.div>
                            )}
                        </Box>
                    );
                })}
            </Paper>
        </motion.div>
    );
};

export default BottomNav;
