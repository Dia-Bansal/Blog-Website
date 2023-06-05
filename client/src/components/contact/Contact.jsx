

import React, { useState} from 'react';

import { TextField, Box, Button, Typography, styled,TextareaAutosize } from '@mui/material';


const Component = styled(Box)`
    width: 650px;
    height:600px;
    margin: 100px 100px 100px 500px;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    color:'white';
    border-radius:10px;
`;

const Image = styled('img')({
    width: '300px',
    // display: 'flex',
    float:'right',
    // margin: 'auto',
    // padding: '50px 0 0',
    height:'380px',
    borderRadius:'50px',
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: grey;
    color: black;
    height: 48px;
    border-radius: 50px;
`;


const Heading=styled(Typography)`
font-size: 50px;
font-weight: 600;
display: flex;
justify-content: center;
margin-top:20px;
`



const Login = () => {
    
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[rev,setRev]=useState('');
 

    const imageURL = 'https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg';

    

    function SubmitButton(){
        if (name &&  email && rev){
            return (<LoginButton className="btn-outline-light" onClick={()=>alert("Submitted Successfully")}>Send </LoginButton>)
          } else {
            return (<LoginButton className="btn-outline-light" onClick={()=>alert("please enter your details")} >Send </LoginButton>)
          };
    }


    return (
        <>

        <Component>
        <Heading>Contact Us</Heading>
            <Box style={{paddingTop:'100px'}}>
            <Typography style={{color:'grey',paddingLeft:'30px',fontSize:'25px'}}>We are here to answer your questions.</Typography>
                <Image src={imageURL} alt="blog" />
                {
                        <Wrapper>
                       
                            <TextField variant="standard" value={name} onChange={e=>setName(e.target.value)} name='username' label='Enter Username' required />
                            <TextField variant="standard" value={email} onChange={e=>setEmail(e.target.value)} name='password' label='Enter Email' required />
                            <TextField variant="standard" value={rev} onChange={e=>setRev(e.target.value)} name='password' label='Enter Message' required/>



                            {/* <LoginButton variant="contained" onClick={() => loginUser()} >Submit</LoginButton> */}
                            <SubmitButton/>
                        </Wrapper>
                }
            </Box>
        </Component>
        </>
    )
}

export default Login;