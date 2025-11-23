import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'
import { Padding } from '@mui/icons-material'

const ChatList = ({
    w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [
        {
            chatId: "1",
            count: 4,
        },{
            chatId:"2",
            count:3,
        }
    ],
    handleDeleteChat,
}) => {

    return (
        <Stack width={w} direction={"column"}>
            {chats?.map((data, index) => {
                const { avatar, _id, name, groupChat, members } = data;

                const newMessageAlert = newMessagesAlert.find(({chatId}) => chatId === _id);

                const isOnline = members?.some((member) => onlineUsers.includes(_id));
                
                // console.log(newMessageAlert)



                return <ChatItem
                index={index}
                newMessagesAlert={newMessageAlert}
                isOnline={isOnline}
                avatar={avatar}
                name={name}
                _id={_id}
                key={_id}
                groupChat={groupChat}
                sameSender={chatId === _id}
                handleDeleteChat={handleDeleteChat}
                />
                
            })}
        </Stack>
    )
}

export default ChatList