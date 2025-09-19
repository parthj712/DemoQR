import { Box } from '@mui/material'
import React from 'react'
import HeadingText from '../HeadingText/HeadingText'
import HeadingEMenu from '../HeadingEMemu/HeadingEMenu'

const Haeding = () => {
  return (
    <div>
        <Box display={"flex"} flexDirection={"column"}>
            <HeadingText/>
            <HeadingEMenu/>
        </Box>
    </div>
  )
}

export default Haeding