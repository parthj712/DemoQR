import React from 'react'
import Haeding from '../Haeding/Haeding'
import MainCards from '../MainCard/MainCards'
import { Box, Fab, Tooltip, useTheme } from '@mui/material'
import BackdropInfo from '../BackdropInfo/BackdropInfo'
import BottomMenu from '../BottomMenu/BottomMenu'
import StarIcon from '@mui/icons-material/Star'  // ⭐ for recommendation
import { useRouter } from 'next/navigation'

const MainMenu = () => {
    const theme = useTheme(); // ✅ get current theme

    const router = useRouter();

    const handleChefRecommendation = () => {
        // 👉 here you can open a dialog, navigate, or scroll to Chef’s Recommendation section
        router.push("/recommded")
    }

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

                <Tooltip title="Chef's Recommendation">
                    <Fab
                        color="secondary"
                        onClick={handleChefRecommendation}
                        sx={{
                            position: "fixed",
                            bottom: 80, // above BottomMenu
                            right: 20,
                            backgroundColor: "#FF5722",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#E64A19" }
                        }}
                    >
                        <StarIcon />
                    </Fab>
                </Tooltip>
            </Box>
        </div>
    )
}

export default MainMenu