import React from 'react'
import { Box, padding } from '@mui/system';
import { Grid, Paper, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AccordionItem = () => {
  return (
    <Box >
     <Grid container>
      <Grid item  sx={{flexGrow:{lg:1 ,md:1,xs:1}}}>
      <Paper  sx={{padding:"20px 20px ",display:"flex",borderRadius:"10px",gap:"65px", justifyContent:"space-between",boxShadow:"0px 1px 2px 12% white"}}>
          <Paper sx={{display:"inline",backgroundColor:"gray",padding:'50px'}}>Image Column</Paper>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Total Ticket Sold</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>230 Tickets</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Date Events</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>29-30 Jul 2022</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Status Event</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>Music</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Location</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>Lanxes Arena</Typography>
          </Box>

          <Box sx={{display:"flex",color:"#CCD2E3",width:"6px",height:"12px", flexDirection:"column", padding:"50px 20px 20px 40px"}}>
            <ArrowForwardIosIcon/>
          </Box>
        </Paper>
        {/* Juggar Margin */}
        <Box mt={1}></Box>
        <Paper  sx={{padding:"20px 20px ",display:"flex",borderRadius:"10px",gap:"65px", justifyContent:"space-between",boxShadow:"0px 1px 2px 12% white"}}>
          <Paper sx={{display:"inline",backgroundColor:"gray",padding:'50px'}}>Image Column</Paper>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Total Ticket Sold</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>230 Tickets</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Date Events</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>29-30 Jul 2022</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Status Event</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>Music</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Location</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>Lanxes Arena</Typography>
          </Box>

          <Box sx={{display:"flex",color:"#CCD2E3",width:"6px",height:"12px", flexDirection:"column", padding:"50px 20px 20px 40px"}}>
            <ArrowForwardIosIcon/>
          </Box>
        </Paper>

        <Box mt={1}></Box>
        <Paper  sx={{padding:"20px 20px ",display:"flex",borderRadius:"10px",gap:"65px", justifyContent:"space-between",boxShadow:"0px 1px 2px 12% white"}}>
          <Paper sx={{display:"inline",backgroundColor:"gray",padding:'50px'}}>Image Column</Paper>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Total Ticket Sold</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>230 Tickets</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Date Events</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>29-30 Jul 2022</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Status Event</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>Music</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Location</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>Lanxes Arena</Typography>
          </Box>

          <Box sx={{display:"flex",color:"#CCD2E3",width:"6px",height:"12px", flexDirection:"column", padding:"50px 20px 20px 40px"}}>
            <ArrowForwardIosIcon/>
          </Box>
        </Paper>

        <Box mt={1}></Box>
        <Paper  sx={{padding:"20px 20px ",display:"flex",borderRadius:"10px",gap:"65px", justifyContent:"space-between",boxShadow:"0px 1px 2px 12% white"}}>
          <Paper sx={{display:"inline",backgroundColor:"gray",padding:'50px'}}>Image Column</Paper>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Total Ticket Sold</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>230 Tickets</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Date Events</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>29-30 Jul 2022</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Status Event</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>Music</Typography>
          </Box>

          <Box sx={{display:"flex", flexDirection:"column", padding:"20px 20px 20px 40px"}}>
          <Typography sx={{fontSize:"18px",fontWeight:"400",lineHeight:"17px",color:"#414141"}} variant="body1">Location</Typography>
          <Typography mt={2} variant="body1" sx={{fontSize:"22px",lineHeight:"17px",fontWeight:"500"}}>Lanxes Arena</Typography>
          </Box>

          <Box sx={{display:"flex",color:"#CCD2E3",width:"6px",height:"12px", flexDirection:"column", padding:"50px 20px 20px 40px"}}>
            <ArrowForwardIosIcon/>
          </Box>
        </Paper>
      </Grid>
     </Grid>
      
    </Box>
  )
}

export default AccordionItem