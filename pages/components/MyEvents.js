import { Accordion, Button, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SortByMenu from './SortByMenu';
import AccordionItem from './AccordionItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MyEvents = () => {
  return (
    <>
      <br />
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ fontWeight: "bold", fontFamily: "Inter", fontSize: "32px", top: "50px" }}>
          My Events
        </Typography>
        <Box flexGrow={1} />
        <Button
          startIcon={<CalendarMonthIcon />}
          sx={{ verticalAlign: 'middle', color: "#001EF5", fontFamily: "Inter", fontWeight: "bold" }}
          variant='subtitle2'>

          <Link href="#" underline="none">
            Add New Events
          </Link>
        </Button>

        <Button
          variant='outlined'
          sx={{ borderColor: "white", backgroundColor: "white", color: "black", boxShadow: "0px 0.2px 0px  black" }}
          endIcon={<SortByMenu />}>
          Sort by
        </Button>

      </Box>


      <Box mb={6}>
        {/* Accordion Content */}

        <AccordionItem />

      </Box>
    </>
  )
}

export default MyEvents