import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const MyEvents = () => {
  return (
    <Box mt={11} sx={{display:"flex",justifyContent:"space-between",}}>

        <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>
            My Events
        </Typography>

        <Typography sx={{ verticalAlign: 'middle',display: 'inline-flex',color:"#001EF5"}} variant='subtitle2'>
            <LibraryAddIcon/>
            Add New Events
            </Typography>
            
    </Box>
  )
}

export default MyEvents