import React, { useState,useEffect } from 'react';
import { Typography, Box, Grid,TextField, Button} from '@mui/material';
import {TableHead,TableCell,TableRow} from '@mui/material'


function Registration() {
  //main array of objects state||users state||user array of objects
  const[users,setUsers]=useState([]);
  //input field state
  const [fname, setFname]=useState('');
  const [lname, setLname]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  //form submit event
  const handleSubmit=(e)=>{
   e.preventDefault();
    // creating an object
    let user={
      fname,
      lname,
      email,
      password

    }
    // e.preventDefault();

    setUsers([...users,user]);
     setFname('');
     setLname('');
     setEmail('');
     setPassword('');
    console.log(user)

  }
  useEffect(()=> {
    localStorage.setItem("Users", JSON.stringify(users));

  },[users])
 
 
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between',}}>
       <Box component= "form" no validate="h5"  spacing="1"
          //  display="flex"
          //  flexDirection={"Column"}
           maxWidth={400}
           alignitems="auto"
           justifyContent={"auto"}
           margin="auto"
           marginTop={5}
           padding={3}
             borderRadius={10}
             boxShadow={"5px 5px 10px rgba(0,0,0,0.8)"}>
    

           <Grid container spacing={1} margin={5}>
           <Typography variant="h6"padding={3}textAlign="center" >Registration Form</Typography>

              <Grid item xs={12}>  
                    <TextField   
                       autoComplete='given-name'
                       id="fName"
                       label="FirstName"
                       name="fname"
                       required 
                      //  fullwidth
                       variant="filled" 
                       autoFocus 
                       value={fname}
                       onChange={(e)=>setFname(e.target.value)} /> <br/>
  
                        
                       
               </Grid>
               <Grid item xs={12} > 
                  <TextField 
                      autoComplete='given-name'
                      id="lName"
                      label="LastName"
                      name="lname"
                      required 
                      // fullwidth
                      variant="filled" 
                      autoFocus 
                      value={lname}
                      onChange={(e)=>setLname(e.target.value)} /> <br/>
                                      </Grid>
                <Grid item xs={12}>  
                    <TextField  
                          autoComplete='given-name'
                          id="email"
                          label="Email"
                          name="email"
                          required 
                          // fullwidth
                          variant="filled" 
                          autoFocus 
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}/> <br/>
                 </Grid>
                <Grid item xs={12} > 
                    < TextField
                          autoComplete='given-name'
                          id="pass"
                          label="Password"
                          name="Pass"
                          required 
                          // fullwidth
                          variant="filled" 
                          onChange={(e)=>setPassword(e.target.value)} value={password} />
                          
                 </Grid> 
                 <Grid>
                    <Button type="submit" 
                        // fullwidth
                        variant="contained"
                        onClick={handleSubmit}
                     sx={{mt:3, ml:7}}>Submit</Button>
                  </Grid>
                </Grid>
       
        {/* <Button  variant="contained" color="warning" onClick={()=>addUserDetails()}>Signup</Button> */}
    </Box>
    {/* <Box 
           maxWidth={900}
           alignitems="auto"
           justifyContent={"auto"}
           margin="auto"
           marginTop={5}
           padding={3}
             borderRadius={10}
             boxShadow={"5px 5px 10px rgba(0,0,0,0.8)"}>
        <Typography variant="h6"padding={3}textAlign="center" >Table</Typography>

      <TableHead>
          <TableRow> 
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name&nbsp;</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Password&nbsp;</TableCell>
          </TableRow>
        </TableHead>
    </Box> */}

</Box>
    
  )
}

export default Registration;
