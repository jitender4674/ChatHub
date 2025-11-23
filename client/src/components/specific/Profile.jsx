import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react'
import { Face as FaceIcon, AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon
 } from "@mui/icons-material";
 import moment from "moment"

const Profile = () => {
  return (
    <Stack spacing={'2rem'} direction={"column"} alignItems={"center"}>

    <Avatar
    sx={{
      width: 200,
      height: 200,
      objectFit:"contain",
      marginBottom:"1rem",
      border: "5px solid white"
    }}
    />

    <ProfileCard heading={"Bio"} text={"kaat daaleegaaa"}/>
    <ProfileCard heading={"Username"} text={"gaurav_budhwar"} Icon={<UserNameIcon sx={{color:"black",fontSize:"2rem"}} />}/>
    <ProfileCard heading={"Name"} text={"gaurav budhwar"} Icon={<FaceIcon sx={{color:"black",fontSize:"2rem"}} />}/>
    <ProfileCard heading={"Joined"} text={moment("2023-11-04T18:30:00.000Z").fromNow()} Icon={<CalenderIcon sx={{color:"black",fontSize:"2rem"}} />}/>
    </Stack>
  )
};


const ProfileCard =({text, Icon, heading})=>(
  <Stack direction={"row"}
  alignItems={"center"}
  spacing={"1rem"}
  color={"white"}
  textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant={'caption'} color={'gray'}>
        {heading}
      </Typography>
      <Typography variant={'body1'} color='black'>
        {text}
      </Typography>
    </Stack>


  </Stack>
);

export default Profile