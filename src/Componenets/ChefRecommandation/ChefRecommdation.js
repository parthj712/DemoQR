"use client";

import React from 'react';
import { Box, Typography, Card, CardContent } from "@mui/material";
import DiningConstant from '../Constant/AllConstant';

const ChefRecommdation = ({ setSelectedDish }) => {
    // ✅ Get all sections
    const data = DiningConstant();

    // ✅ Flatten all items from all sections with sectionKey attached
    const allItems = data.flatMap(section =>
        section.items.map(item => ({ ...item, sectionKey: section.sectionKey }))
    );

    // ✅ Filter only recommended ones
    const recommendations = allItems.filter(item => item.recommended);

    return (
        <>
            {recommendations.length > 0 && (
                <Box mb={4}>
                    <Typography variant="h5" gutterBottom>
                        👨‍🍳 Chef's Recommendation
                    </Typography>

                    {recommendations.map((dish) => (
                        <Card
                            key={`${dish.sectionKey}-${dish.itemId}`} // ✅ unique key across sections
                            sx={{ mb: 2, borderRadius: 2, cursor: "pointer" }}
                            onClick={() => setSelectedDish(dish)} // open popup
                        >
                            <CardContent>
                                <Typography variant="h6">{dish.title_en}</Typography>
                                <Typography color="text.secondary">
                                    {dish.price_en}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}
        </>
    );
};

export default ChefRecommdation;
