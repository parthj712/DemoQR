import React from 'react'
import { useState, useEffect } from "react";
import { Box, Button, CardMedia, TextField, Typography } from "@mui/material";
import DiningConstant from "../Constant/AllConstant";

const SearchMenu = ({ onNavigateToSection, onClearSearch, searchTerm, setSearchTerm , sectionKey }) => {

    const menuData = DiningConstant();
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        if (!searchTerm.trim()) {
            setFilteredResults([]);
            return;
        }

        const results = [];
        menuData.forEach((section) => {
            section.items.forEach((item) => {
                if (
                    item.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.title_mr.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    results.push({
                        ...item,
                        sectionKey: section.sectionKey,
                        sectionTitle: section.title_en,
                    });
                }
            });
        });

        setFilteredResults(results);
    }, [searchTerm]);

    const handleExploreClick = (sectionKey) => {
        onNavigateToSection(sectionKey); // scroll
        onClearSearch(); // clear search
    };


    return (
        <>
            <Box p={2}>
                <TextField
                    fullWidth
                    size="small"
                    label="Search for a dish..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {searchTerm && filteredResults.length > 0 && (
                    <Box mt={2}>
                        {filteredResults.map((result, idx) => (
                            <Box key={idx} mb={2}>
                                {/* Breadcrumb */}
                                <Typography variant="body2" color="text.secondary">
                                    {result.sectionTitle} &gt; {result.title_en}
                                </Typography>

                                {/* Dish Image */}
                                <CardMedia
                                    component="img"
                                    image={"/demo.jpeg"}
                                    alt={result.title_en || "Item"}
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => { e.currentTarget.src = "/demo.jpeg"; }} // 👈 runtime fallback
                                />

                                {/* Dish Title + Price */}
                                <Typography fontWeight="bold" mt={1}>
                                    {result.title_en} — {result.price_en}
                                </Typography>

                                {/* Explore Button */}
                                <Button
                                    variant="contained"
                                    sx={{ mt: 1 }}
                                    onClick={() => handleExploreClick(result.sectionKey)}
                                >
                                    Explore more {result.sectionTitle}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                )}

                {searchTerm && filteredResults.length === 0 && (
                    <Typography mt={2} color="error">
                        No dishes found.
                    </Typography>
                )}
            </Box>
        </>
    )
}

export default SearchMenu