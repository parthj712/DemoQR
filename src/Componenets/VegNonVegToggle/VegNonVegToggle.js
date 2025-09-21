"use client";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

export default function VegNonVegToggle({ onChange }) {
    const [filter, setFilter] = useState("veg");

    const handleChange = (event, newFilter) => {
        if (newFilter !== null) {
            setFilter(newFilter);
            onChange(newFilter);
        }
    };

    return (
        <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleChange}
            fullWidth
            sx={{
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                border: "0.5px solid white",
                boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
                
            }}
        >
            {/* Animated Highlight */}
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: filter === "veg" ? 0 : "50%",
                    width: "50%",
                    // borderTopRightRadius : filter === "veg" ? 0 : 8,
                    background: filter === "veg"
                        ? "radial-gradient(circle at center, rgba(144,238,144,0.6), rgba(34,139,34,0.9)), url('https://www.transparenttextures.com/patterns/food.png')"
                        : "radial-gradient(circle at center, rgba(255,182,193,0.6), rgba(178,34,34,0.9)) , url('https://www.transparenttextures.com/patterns/food.png')",
                    zIndex: 0,
                }}
            />

            {/* Veg Button */}
            <ToggleButton
                value="veg"
                sx={{
                    flex: 1,
                    py: 1.5,
                    fontWeight: "bold",
                    position: "relative",
                    zIndex: 1,
                    color: filter === "veg" ? "#fff" : "inherit",
                }}
            >
                Veg
            </ToggleButton>

            {/* Non-Veg Button */}
            <ToggleButton
                value="nonveg"
                sx={{
                    flex: 1,
                    py: 1.5,
                    fontWeight: "bold",
                    position: "relative",
                    zIndex: 1,
                    color: filter === "nonveg" ? "#fff" : "inherit",
                }}
            >
                Non-Veg
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
