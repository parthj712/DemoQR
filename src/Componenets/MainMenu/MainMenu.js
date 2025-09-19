import React from 'react'
import Haeding from '../Haeding/Haeding'
import MainCards from '../MainCard/MainCards'
import { Box } from '@mui/material'
import BackdropInfo from '../BackdropInfo/BackdropInfo'
import BottomMenu from '../BottomMenu/BottomMenu'

const MainMenu = () => {
    return (
        <div>
            <Box sx={{
                backgroundColor: "#fef8e3ff",
                height: "100vh", // full screen height
                overflowY: "auto" // enables scrolling
            }}>

            <BackdropInfo/>
            <Haeding />
            <MainCards />
            <BottomMenu/>
            </Box>
        </div>
    )
}

export default MainMenu