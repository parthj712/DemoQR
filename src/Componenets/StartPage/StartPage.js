"use client"

import React, { useEffect, useState } from 'react'
import Intropage from '../Introapage/Intropage';
import WelcomePage from '../WelcomePage/WelcomePage';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";


const pages = [
    <Intropage key="intro" />,
    <WelcomePage key="welcome" />,
];


const StartPage = () => {

    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setPageIndex(1), 1300), // 1.5 sec to Welcome
            // setTimeout(() => setPageIndex(2), 5000), // 1.5 sec to Menu
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <>
            <Box sx={{ height: "100vh", overflow: "hidden", position: "relative" }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pageIndex}
                        initial={{ x: "100%", opacity: 0.4, scale: 0.95 }} // start off-screen right, slightly smaller & dim
                        animate={{ x: 0, opacity: 1, scale: 1 }}           // come to center, full opacity, normal size
                        exit={{ x: "-30%", opacity: 0, scale: 0.8 }}       // exit to left with parallax & shrink
                        transition={{
                            duration: 0.9,
                            ease: [0.25, 0.8, 0.25, 1], // smooth sophisticated curve
                        }}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            boxShadow: "0 0 40px rgba(0,0,0,0.08)", // soft depth
                            borderRadius: "16px", // makes it feel like sliding cards
                            overflow: "hidden",
                        }}
                    >
                        {pages[pageIndex]}
                    </motion.div>
                </AnimatePresence>

            </Box>
        </>
    )
}

export default StartPage