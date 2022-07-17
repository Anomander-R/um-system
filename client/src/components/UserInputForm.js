import React, {Fragment} from 'react';
import {Button, TextField, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material'

const UserInputForm = () => {
  return (<Fragment>

    <h3>Add User</h3>
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column',
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
        <TextField
          label="First Name"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TextField
          label="Last Name"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
       <TextField
          label="Username"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
            <TextField
          label="Password"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />
        <TextField
          label="Email"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
        
                   <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="true" control={<Radio />} label="True"  labelPlacement="top"/>
                    <FormControlLabel value="false" control={<Radio />} label="False"  labelPlacement="top"/>
                </RadioGroup>
                </FormControl>

        </Box>
        

        <Button variant="contained">Add User</Button>
     
    </Fragment>)
}

export default UserInputForm