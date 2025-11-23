import React, { memo } from 'react'
import { Link } from '../styles/StyledComponent'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'


const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessagesAlert,
    index = 0,
    handleDeleteChat,
}) => {
  return <Link to={`/chat/${_id}`}
            onContextMenu={(e)=> handleDeleteChat(e,_id,groupChat)}
            sx={{padding:"0"}}>

    <div style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        padding:"1rem",
        backgroundColor: sameSender ? "black" : "unset",
        color: sameSender ? "white": "unset",
        position:"relative",
    }}>
        <AvatarCard avatar={avatar}/>
        <Stack sx={{minWidth:0, flexGrow:1}}>
            <Typography
            sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }}
            >
            {name}
            </Typography>
            {
                newMessagesAlert && (
                    <Typography
                    sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }}
                    >
                        {newMessagesAlert.count} new message
                    </Typography>
                )
            }
        </Stack>


        {
            isOnline && <Box
            sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: "green",
                position: "absolute",
                top: "50%",
                right: "1rem",
                transform: "translateY(-50%)",
            }}
            />
        }
    </div>
  </Link>
}

export default memo(ChatItem);