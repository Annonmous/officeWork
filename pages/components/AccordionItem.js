import React from 'react'
import { Box, padding } from '@mui/system';
import { Grid, Paper, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AccordionItem = () => {
  return (
    <Box >
     <Grid container>
      <Grid item  sx={{flexGrow:{lg:1 ,md:1,xs:1}}}>
        <Paper sx={{padding:"20px 20px ",display:"flex", justifyContent:"space-between"}}>
          <Paper sx={{display:"inline",backgroundColor:"gray",padding:'50px'}}>Image Column</Paper>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Total Ticket Sold</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>230 Tickets</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Date Events</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>29-30 Jul 2022</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Status Event</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>Music</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Location</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>Lanxes Arena</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"50px 20px 20px 40px"}}>
            <ArrowForwardIosIcon/>
          </Box>
        </Paper>
        {/* Juggar Margin */}
        <Box mt={1}></Box>
        <Paper  sx={{padding:"20px 20px ",display:"flex", justifyContent:"space-between"}}>
          <Paper sx={{display:"inline",backgroundColor:"gray",padding:'50px'}}>Image Column</Paper>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Total Ticket Sold</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>230 Tickets</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Date Events</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>29-30 Jul 2022</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Status Event</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>Music</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Location</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>Lanxes Arena</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"50px 20px 20px 40px"}}>
            <ArrowForwardIosIcon/>
          </Box>
        </Paper>

        <Box mt={1}></Box>
        <Paper  sx={{padding:"20px 20px ",display:"flex", justifyContent:"space-between"}}>
          <Paper sx={{display:"inline",backgroundColor:"gray",padding:'50px'}}>Image Column</Paper>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Total Ticket Sold</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>230 Tickets</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Date Events</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>29-30 Jul 2022</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Status Event</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>Music</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Location</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>Lanxes Arena</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"50px 20px 20px 40px"}}>
            <ArrowForwardIosIcon/>
          </Box>
        </Paper>

        <Box mt={1}></Box>
        <Paper  sx={{padding:"20px 20px ",display:"flex", justifyContent:"space-between"}}>
          <Paper sx={{display:"inline",backgroundColor:"gray",padding:'50px'}}>Image Column</Paper>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Total Ticket Sold</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>230 Tickets</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Date Events</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>29-30 Jul 2022</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Status Event</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>Music</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography variant="body1">Location</Typography>
          <Typography mt={2} variant="body1" sx={{fontWeight:"bolder"}}>Lanxes Arena</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"50px 20px 20px 40px"}}>
            <ArrowForwardIosIcon/>
          </Box>
        </Paper>
      </Grid>
     </Grid>
      
    </Box>
  )
}

export default AccordionItem