"use client";

import React from 'react';
import { Box, Typography, Card, CardContent } from "@mui/material";
import DiningConstant from '../Constant/AllConstant';
import HeadingEMenu from '../HeadingEMemu/HeadingEMenu';
import { useLanguage } from '@/Context/LanguageContext';

const ChefRecommdation = ({ setSelectedDish }) => {
    // ✅ Get all sections
    const data = DiningConstant();

    const { language } = useLanguage();

    // ✅ Flatten all items from all sections with sectionKey attached
    const allItems = data.flatMap(section =>
        section.items.map(item => ({ ...item, sectionKey: section.sectionKey }))
    );

    // ✅ Filter only recommended ones
    const recommendations = allItems.filter(item => item.recommended);


    const chef = language === "mr" ? "शेफची शिफारस" : "Chef's Recommendation"

    return (
        <>

            <Box py={1}>
                <HeadingEMenu />
            </Box>

            <Box
                flex={1}
                overflow="auto"   // ✅ allow scrolling
                px={2}
                          // space for BottomNav if fixed
            >
                {recommendations.length > 0 && (
                    <Box mb={10} p={2}>
                        <Typography variant="h6" py={1.5}>
                            {chef}
                        </Typography>

                        {recommendations.map((dish) => (
                            <Card
                                key={`${dish.sectionKey}-${dish.itemId}`} // ✅ unique key across sections
                                sx={{ mb: 2, borderRadius: 2, cursor: "pointer" }}
                                onClick={() => setSelectedDish(dish)} // open popup
                            >
                                <CardContent>
                                    <Typography variant="h6">{language === 'mr' ? (dish.title_mr || "") : (dish.title_en || "")}</Typography>
                                    <Typography color="text.secondary">
                                        {dish.price_en}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                )}
            </Box>
        </>
    );
};

export default ChefRecommdation;
