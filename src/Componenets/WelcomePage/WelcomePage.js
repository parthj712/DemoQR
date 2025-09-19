"use client";

import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useLanguage } from '@/Context/LanguageContext';
import { useRouter } from 'next/navigation'
import LanguageToggle from '../LanguageToggle/LanguageToggle';

const WelcomePage = () => {

    const { language } = useLanguage();
    const router = useRouter();

    const titleTop = language === 'mr' ? "स्वागत आहे, कृपया आमचा मेनू पहा." : "Welcome, Please View Our menu";

    return (
        <div style={{
            height: "100vh",
            backgroundColor: "#FAF3E0",
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
                    sx={{ mt: 3, backgroundColor: "#800080", py: 1.5, borderRadius: 4 }}
                    onClick={() => router.push("/menu")} // go to app/page.js
                >
                    <Typography fontSize={"18px"} fontWeight={"bold"}>{language === "mr" ? "मेनू पहा" : "View Menu"}</Typography>
                </Button>
            </Box>

        </div>
    )
}

export default WelcomePage