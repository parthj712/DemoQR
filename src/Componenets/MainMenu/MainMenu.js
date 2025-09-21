import React from 'react'
import Haeding from '../Haeding/Haeding'
import MainCards from '../MainCard/MainCards'
import { Box, Fab, Tooltip, useTheme } from '@mui/material'
import BackdropInfo from '../BackdropInfo/BackdropInfo'
import BottomMenu from '../BottomMenu/BottomMenu'
import StarIcon from '@mui/icons-material/Star'  // ⭐ for recommendation
import { useRouter } from 'next/navigation'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const MainMenu = () => {
    const theme = useTheme(); // ✅ get current theme

    const router = useRouter();

    return (
        <div>
            <Box sx={{
                backgroundColor: theme.palette.background.default, // ✅ auto changes with theme
                height: "100vh", // full screen height
                overflowY: "auto", // enables scrolling
                position: "relative" // needed for floating
            }}>

                <BackdropInfo />
                <Haeding />
                <MainCards />
                <BottomMenu />


               

            </Box>
        </div>
    )
}

export default MainMenu