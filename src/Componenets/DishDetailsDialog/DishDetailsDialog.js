"use client";

import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemText,
    Box,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const DishDetailsDialog = ({ dish, open, onClose }) => {
    if (!dish) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <Box display={"flex"} flexDirection={"row"}>
                <DialogTitle>
                    {dish.title_en}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        <CloseIcon />
                    </Button>
                </DialogActions>
            </Box>
            <DialogContent dividers>

                <Typography variant="subtitle1" gutterBottom>
                    Nutritional Facts:
                </Typography>
                <List>
                    {Object.entries(dish.nutritionalFacts).map(([key, val]) => (
                        <ListItem key={key}>
                            <ListItemText primary={`${key}: ${val}`} />
                        </ListItem>
                    ))}
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" gutterBottom>
                    Allergy Warnings:
                </Typography>
                <List dense>
                    {dish.allergyWarnings.map((warn, idx) => (
                        <ListItem key={idx}>
                            <ListItemText primary={warn} />
                        </ListItem>
                    ))}
                </List>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" gutterBottom>
                    Ingredients:
                </Typography>
                <List dense>
                    {dish.ingredients.map((ing, idx) => (
                        <ListItem key={idx}>
                            <ListItemText primary={ing} />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>


        </Dialog>
    );
};

export default DishDetailsDialog;
