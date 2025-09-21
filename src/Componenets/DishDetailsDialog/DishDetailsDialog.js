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
    IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import HeadingEMenu from "../HeadingEMemu/HeadingEMenu";
import { useLanguage } from "@/Context/LanguageContext";

const DishDetailsDialog = ({ dish, open, onClose }) => {
    const { language } = useLanguage(); // call hook unconditionally

    if (!dish) return null;

    const handleShare = async () => {
        const shareUrl = `${window.location.origin}/menu/${dish.itemId}`;
        const shareText = `Check out this dish: ${dish.title_en} - ${shareUrl}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: dish.title_en,
                    text: shareText,
                    url: shareUrl,
                });
            } catch (err) {
                console.error("Share cancelled or failed", err);
            }
        } else {
            navigator.clipboard.writeText(shareUrl);
            alert("Link copied! Share it with your friends 🎉");
        }
    };

    return (
        <>
            <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm"
                sx={{
                    display: 'flex',
                    alignItems: 'center', // vertical center
                    justifyContent: 'center', // horizontal center
                }}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>{language === 'mr' ? dish.title_mr : dish.title_en}</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers sx={{ maxHeight: '60vh', overflowY: 'auto', px: 4 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        {language === 'mr' ? "पोषक तत्व" : "Nutritional Facts"}:
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                        {Object.entries(dish.nutritionalFacts?.[language] || {}).map(([key, val]) => (
                            <ListItem key={key} sx={{ p: 0 }}>
                                <ListItemText primary={`${key}: ${val}`} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" gutterBottom>
                        {language === 'mr' ? "एलर्जी सूचना" : "Allergy Warnings"}:
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                        {(dish.allergyWarnings?.[language] || []).map((warn, idx) => (
                            <ListItem key={idx} sx={{ p: 0 }}>
                                <ListItemText primary={warn} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="subtitle1" gutterBottom>
                        {language === 'mr' ? "साहित्य" : "Ingredients"}:
                    </Typography>
                    <List dense sx={{ p: 0 }}>
                        {(dish.ingredients?.[language] || []).map((ing, idx) => (
                            <ListItem key={idx} sx={{ p: 0 }}>
                                <ListItemText primary={ing} />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DishDetailsDialog;
