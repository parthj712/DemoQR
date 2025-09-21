"use client";

import { Box, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, DonutSmall } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const DishActions = ({ item, section, isFavorite, toggleFavorite, handleOpenDish, favRef }) => {
    const [fly, setFly] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleLike = (e) => {
        toggleFavorite({ ...item, uniqueId: `${section.sectionKey}-${item.itemId}` });

        // Get button position
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: rect.left, y: rect.top });
        setFly(true);

        setTimeout(() => setFly(false), 800); // reset
    };

    // Get target position (favorites icon)
    const favRect = favRef?.current?.getBoundingClientRect();
    const targetX = favRect ? favRect.left - coords.x : 150;
    const targetY = favRect ? favRect.top - coords.y : -200;

    return (
        <Box display="flex" gap={1} position="relative">
            <IconButton onClick={handleLike}>
                <AnimatePresence>
                    {isFavorite(`${section.sectionKey}-${item.itemId}`) ? (
                        <motion.div
                            key="liked"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 0.6 }}
                        >
                            <Favorite color="error" />
                        </motion.div>
                    ) : (
                        <FavoriteBorder />
                    )}
                </AnimatePresence>
            </IconButton>

            <IconButton onClick={() => handleOpenDish(item)}>
                <DonutSmall />
            </IconButton>

            {/* Flying animation */}
            {fly && (
                <motion.div
                    style={{
                        position: "fixed",
                        top: coords.y,
                        left: coords.x,
                        color: "#ff1744",
                        zIndex: 1000,
                    }}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 0.5, x: targetX, y: targetY, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Favorite />
                </motion.div>
            )}
        </Box>
    );
};

export default DishActions;
