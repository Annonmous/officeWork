import { Avatar, Card, CardContent, Grid, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MyEvents from './MyEvents'
import Navbar from './Navbar'

const MenuCards = () => {
    // const lightTheme = createTheme({ palette: { mode: 'light' } });
    const arr = [{
        icon: <Avatar />,
        label: "Total Tickets",
        des: "230 Tickets"
    },
    {
        icon: <Avatar />,
        label: "Total Events",
        des: "150 "
    },
    {
        icon: <Avatar />,
        label: "Reservation",
        des: "150 "
    }
    ]
    return (
        <>
        <Box mt={15}>
            <Stack direction={"row"} spacing={2}  >
                {arr.map((item) => {
                    return (
                        <Card>

                            <CardContent  >
                                <Stack direction={"row"} spacing={2} sx={{ml:2}}>
                                {item.icon}
                               
                                    <Stack direction={"column"} spacing={1}>
                                <Typography>
                                    {item.label}
                                </Typography>
                                
                                <Typography >
                                    {item.des}
                                </Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    )
                })}
            </Stack>        
        </Box>

        <MyEvents/>
        </>
    )
}

export default MenuCards