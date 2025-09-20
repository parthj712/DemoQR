"use client";

import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useLanguage } from '@/Context/LanguageContext';
import { useRouter } from 'next/navigation'
import LanguageToggle from '../LanguageToggle/LanguageToggle';

const WelcomePage = () => {

    const { language } = useLanguage();
    const theme = useTheme()
    const router = useRouter();

    const isDark = theme.palette.mode === "dark";

    const titleTop = language === 'mr' ? "स्वागत आहे, कृपया आमचा मेनू पहा." : "Welcome, Please View Our menu";

    return (
        <div style={{
            height: "100vh",
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        }}>
            {/* Top-right LanguageToggle */}
            <div style={{ position: "absolute", top: "50px", right: "40px" }}>
                <LanguageToggle />
            </div>
            <Box display={"flex"} flexDirection={"column"} px={4.5} gap={4}>
                <Typography sx={{ alignItems: "left" }} fontSize="50px" color="#D2691E" fontWeight={500}>{titleTop}</Typography>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => router.push("/menu")}
                    sx={{
                        mt: 3,
                        py: 1.5,
                        borderRadius: 4,
                        backgroundColor: isDark ? "#4B0082" : "#800080", // purple shades
                        color: isDark ? "#ececec" : "#fff", // text color
                        "&:hover": {
                            backgroundColor: isDark ? "#5A189A" : "#9932CC", // hover effect
                        },
                    }}
                >
                    <Typography
                        fontSize="18px"
                        fontWeight="bold"
                        sx={{ color: isDark ? "#ececec" : "#fff" }}
                    >
                        {language === "mr" ? "मेनू पहा" : "View Menu"}
                    </Typography>
                </Button>
            </Box>

        </div>
    )
}

export default WelcomePage