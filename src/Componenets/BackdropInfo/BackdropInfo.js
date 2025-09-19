import { Backdrop, Box, keyframes, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useLanguage } from '@/Context/LanguageContext';

const BackdropInfo = () => {

    const { language } = useLanguage();
    const LangBox = language === 'mr' ? "भाषा बदलण्यासाठी स्विचवर टॅप करा" : "Tap on the switch to change the language";

    const [open, setOpen] = useState(false);
    // Define animation
    const pulse = keyframes`
    0% { background-color: #ffdd56ff; }
    50% { background-color: #ffe985; }
    100% { background-color: #ffdd56ff; }
    `;

    useEffect(() => {
        const hasSeenBackdrop = sessionStorage.getItem("hasSeenBackdrop");

        if (!hasSeenBackdrop) {
            setOpen(true);

            const timer = setTimeout(() => {
                setOpen(false);
                sessionStorage.setItem("hasSeenBackdrop", "true"); // only for this session
            }, 4000);

            return () => clearTimeout(timer);
        } else {
            setOpen(false);
        }
    }, []);

    return (
        <div>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
            >
                <Zoom in={open} timeout={800}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap={2}
                        p={3}
                        borderRadius="20px"
                        sx={{
                            animation: `${pulse} 2s infinite ease-in-out`, // continuous animation
                        }}
                    >
                        <LanguageToggle />
                        <Typography fontSize="16px" fontWeight={600} color="#AA2E30">
                            {LangBox}
                        </Typography>
                    </Box>
                </Zoom>
            </Backdrop>
        </div>
    )
}

export default BackdropInfo