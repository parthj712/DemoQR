"use client";
import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const ShareDishButton = ({ dish }) => {
    if (!dish) return null;

    const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/menu?dishId=${dish.itemId}`;
    const shareText = `Check out this dish: ${dish.title_en || dish.title_mr} 🍽️`;

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: dish.title_en || "Dish",
                    text: shareText,
                    url: shareUrl,
                });
            } catch (err) {
                console.log("Share canceled", err);
            }
        } else {
            navigator.clipboard.writeText(shareUrl);
            alert("Link copied! 🚀");
        }
    };

    return (
        <Button
            variant="outlined"
            startIcon={<ShareIcon />}
            fullWidth
            sx={{ mt: 2, borderRadius: 3 }}
            onClick={handleShare}
        >
            Share
        </Button>
    );
};

export default ShareDishButton;
