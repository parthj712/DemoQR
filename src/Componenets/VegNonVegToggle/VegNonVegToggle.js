"use client";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function VegNonVegToggle({ onChange }) {
    const [filter, setFilter] = useState("all");

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
            aria-label="veg-nonveg-toggle"
            fullWidth
        >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="veg">Veg</ToggleButton>
            <ToggleButton value="nonveg">Non-Veg</ToggleButton>
        </ToggleButtonGroup>
    );
}
