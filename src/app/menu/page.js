"use client";


import MainMenu from '@/Componenets/MainMenu/MainMenu';
import { Box, CircularProgress } from '@mui/material';
import React, { Suspense } from 'react'

const page = () => {
    return (
        <div>
            <Suspense
                fallback={
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh", // full page height
                        }}
                    >
                        <CircularProgress size={50} thickness={4} />
                    </Box>
                }
            >
                <MainMenu />
            </Suspense>
        </div>
    )
}

export default page