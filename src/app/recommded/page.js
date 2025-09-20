
import ChefRecommdation from '@/Componenets/ChefRecommandation/ChefRecommdation'
import { Box, CircularProgress } from '@mui/material'
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
                <ChefRecommdation />
            </Suspense>
        </div>
    )
}

export default page