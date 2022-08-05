import { Accordion, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SortByMenu from './SortByMenu';
import AccordionItem from './AccordionItem';


const MyEvents = () => {
  return (
    <>
    <Typography  sx={{ fontWeight: "bold", fontSize: "30px",position:"relative",top:"130px" }}>
        My Events
      </Typography>

    <Box mt={11} sx={{ display: "flex", justifyContent:"flex-end" }}>

      <Button startIcon={ <LibraryAddIcon />} sx={{ verticalAlign: 'middle', color: "#001EF5" }} variant='subtitle2'>
       
        <a href='#'> Add New Events</a>
      </Button>

     <Button endIcon={<SortByMenu/>}>Sort by</Button>

    </Box>


    <Box mt={6}>
      {/* Accordion Content */}
     <AccordionItem/>

     </Box>
     </>
  )
}

export default MyEvents