"use client";
import { useState } from "react";
import {
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
} from "@mui/material";

const DescriptionWithReadMore = ({ item, language, isSmallMobile }) => {
    const [open, setOpen] = useState(false);

    const description =
        language === "mr" ? item.description_mr : item.description_en;

    return (
        <>
            {description && (
                <>
                    <Typography fontSize={isSmallMobile ? "16px" : "13px"}>
                        {description.length > 60
                            ? `${description.substring(0, 50)}...`
                            : description}
                    </Typography>

                    {description.length > 60 && (
                        <Box display="flex" justifyContent="flex-start">
                            <Button
                                size="small"
                                onClick={() => setOpen(true)}
                                sx={{ textTransform: "none", p: 0, fontWeight: 600 }}
                            >
                                {language === 'mr' ? "अधिक वाचा" : "Read More"}
                            </Button>
                        </Box>
                    )}
                </>
            )}

            {/* Popup */}
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Description</DialogTitle>
                <DialogContent dividers>
                    <Typography>{description}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} sx={{ color: "#800080" }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DescriptionWithReadMore;
