import { Avatar, Card, CardContent, Grid, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MyEvents from './MyEvents'


const MenuCards = () => {
    // const lightTheme = createTheme({ palette: { mode: 'light' } });
    const arr = [{
        icon: <Avatar sx={{width:58,height:58}} />,
        label: "Total Tickets",
        des: "230$ Tickets"
    },
    {
        icon: <Avatar sx={{width:58,height:58}}/>,
        label: "Total Events",
        des: "150 "
    },
    {
        icon: <Avatar sx={{width:58,height:58}} />,
        label: "Reservation",
        des: "150 "
    }
    ]
    return (
        <>
            <Box sx={{ mt: 15, width: '100%' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}  >
                    {arr.map((item) => {
                        return (
                            <Card width={{ md: '250px', lg: "300px" }} sx={{ padding: "25px", borderRadius: "10px", boxShadow: "0px 4px 8px 4% black" }}>
                                <CardContent  >
                                    <Stack direction={"row"} spacing={1}>
                                        {item.icon}

                                        <Stack direction={"column"} spacing={1}>
                                            <Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold', fontFamily: "Inter" }}>
                                                {item.label}
                                            </Typography>

                                            <Typography variant="h6" color="text.primary" sx={{ fontWeight: "bolder", fontFamily: "Inter" }}>
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

            <MyEvents />
        </>
    )
}

export default MenuCards