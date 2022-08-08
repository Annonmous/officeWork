import React from 'react'
import { Box, padding } from '@mui/system';
import { Grid, Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AccordionItem = () => {
  let arr = [
    {
      column: "Images Column...",
      price: "230 Tickets",
      date: "Date Events",
      DateTime: "29-30 Jul 2022",
      event: "Status Event",
      music: "Music",
      location: "Location",
      area: "Lanxes Arena"
    },
    {
      column: "Images Column...",
      price: "230 Tickets",
      date: "Date Events",
      DateTime: "29-30 Jul 2022",
      event: "Status Event",
      music: "Music",
      location: "Location",
      area: "Lanxes Arena"
    },
    {
      column: "Images Column...",
      price: "230 Tickets",
      date: "Date Events",
      DateTime: "29-30 Jul 2022",
      event: "Status Event",
      music: "Music",
      location: "Location",
      area: "Lanxes Arena"
    },
    {
      column: "Images Column...",
      price: "230 Tickets",
      date: "Date Events",
      DateTime: "29-30 Jul 2022",
      event: "Status Event",
      music: "Music",
      location: "Location",
      area: "Lanxes Arena"
    }
  ]
  return (
    <Box >
      <br /> <br />
      <Grid container spacing={1} justifyContent="center" alignItems={"center"}>

        {arr.map((item) => {
          return (
            <>
              <Grid item xs="auto" spacing={2}>
                <Paper sx={{ padding: "20px 20px ", display: "flex", borderRadius: "10px", justifyContent: "space-between", boxShadow: "0px 1px 2px 12% white"}} >
                  <Stack direction={{ md: 'column', lg:'row' }} columnSpacing={4}>

                    <Paper sx={{ display: "inline", backgroundColor: "gray", padding: '60px' }}>{item.column}</Paper>

                    <Box sx={{ display: "flex", flexDirection: "column", padding: "50px 20px 20px 40px" }}>
                      <Typography sx={{ fontSize: "19px", fontWeight: "bold", fontFamily: "Inter", lineHeight: "17px", color: "#414141" }} variant="body1">Total Ticket Sold</Typography>
                      <Typography mt={2} variant="body1" sx={{ fontSize: "24px", fontFamily: "Inter", lineHeight: "17px", fontWeight: "600" }}>{item.price}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", padding: "50px 20px 20px 40px" }}>
                      <Typography sx={{ fontSize: "19px", fontFamily: "Inter", fontWeight: "bold", lineHeight: "17px", color: "#414141" }} variant="body1">{item.date}</Typography>
                      <Typography mt={2} variant="body1" sx={{ fontSize: "24px", fontFamily: "Inter", lineHeight: "17px", fontWeight: "600" }}>{item.DateTime}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", padding: "50px 20px 20px 40px" }}>
                      <Typography sx={{ fontSize: "19px", fontWeight: "bold", fontFamily: "Inter", lineHeight: "17px", color: "#414141" }} variant="body1">{item.event}</Typography>
                      <Typography mt={2} variant="body1" sx={{ fontSize: "24px", fontFamily: "Inter", lineHeight: "17px", fontWeight: "600" }}>{item.music}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", padding: "50px 20px 20px 40px" }}>
                      <Typography sx={{ fontSize: "19px", fontWeight: "bold", fontFamily: "Inter", lineHeight: "17px", color: "#414141" }} variant="body1">{item.location}</Typography>
                      <Typography mt={2} variant="body1" sx={{ fontSize: "24px", fontFamily: "Inter", lineHeight: "17px", fontWeight: "600" }}>{item.area}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", color: "#CCD2E3", width: "6px", height: "12px", flexDirection: "column", padding: "50px 20px 20px 40px" }}>
                      <ArrowForwardIosIcon />
                    </Box>
                  </Stack>
                </Paper>
                <br />
              </Grid>
            </>
          )
        })}
      </Grid>

    </Box>
  )
}

export default AccordionItem