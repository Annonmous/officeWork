import { Card, CardContent, FormGroup, Grid, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FormLabel from '@mui/material/FormLabel';

const Form = () => {
    return (
        <Box sx={{ mt: 20 }}>
            <Typography variant='h3' sx={{fontWeight:"bolder" ,fontFamily:"Inter,Sansarif"}}>Create new event</Typography>
            <br/>
            <br/>
            <Grid container spacing={4}>
                <Grid item xs="auto" lg={3}>
                    <Card>
                        <CardContent sx={{padding:"40px"}}>
                            <Typography variant='body1' color="text.secondary">Title Event</Typography>
                            <Typography sx={{mt:2}} variant='body1' color="text.secondary">&nbsp; Event Title</Typography>
                            <br/>
                            <br/>
                            <FormGroup>
                            <FormLabel label="Date" component="legend">Date</FormLabel>
                            <Stack direction="row" spacing={1} mt={2} >
                            <TextField size="small" id="outlined-basic" placeholder="End Date" variant="outlined" fullWidth/>
                            <TextField size="small" id="outlined-basic" placeholder="Start Date" variant="outlined" fullWidth/>
                            </Stack>
                            </FormGroup>
                            <br/>
                            <FormGroup>
                            <FormLabel label="Date" component="legend">Price</FormLabel>
                            <Stack direction="row" spacing={1} mt={2} >
                            <TextField size="small" id="outlined-basic" placeholder="Start" variant="outlined" fullWidth/>
                            <TextField size="small" id="outlined-basic" placeholder="To" variant="outlined" fullWidth/>
                            </Stack>
                            </FormGroup>
                          
                            <br/>
                            <FormGroup>
                            <FormLabel label="Date" component="legend">Description</FormLabel>
                            <Stack direction="column" spacing={1} mt={2} >
                            <TextField size="small" id="outlined-basic" placeholder="Start" variant="outlined" fullWidth/>
                           <Typography width="250px" variant="caption" color="textSecondary">Description help user understand about the events</Typography>
                            </Stack>
                            </FormGroup>

                            <br/>
                            <FormGroup>
                            <FormLabel label="Date" component="legend">Location</FormLabel>
                            <Stack direction="column" spacing={1} mt={2} >
                            <TextField size="small" id="outlined-basic" placeholder="Event title" variant="outlined" fullWidth/>
                            </Stack>
                            </FormGroup>
                            
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs="auto" lg={9}>
                
                        <Card>fwsfwetrewrf</Card>
                 

                </Grid>
            </Grid>
        </Box>


    )
}

export default Form