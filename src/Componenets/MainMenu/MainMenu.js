import React from 'react'
import Haeding from '../Haeding/Haeding'
import MainCards from '../MainCard/MainCards'
import { Box, useTheme } from '@mui/material'
import BackdropInfo from '../BackdropInfo/BackdropInfo'
import BottomMenu from '../BottomMenu/BottomMenu'

const MainMenu = () => {
    const theme = useTheme(); // ✅ get current theme

    return (
        <div>
            <Box sx={{
                backgroundColor: theme.palette.background.default, // ✅ auto changes with theme
                height: "100vh", // full screen height
                overflowY: "auto" // enables scrolling
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