import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { sampleNotifications } from '../../../constants/sampleChatData';

const Notifications = () => {


  const friendRequestHandler = (_id, accept) => {

  };



  return (
    <Dialog open>

      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>


        <DialogTitle textAlign={"center"}>
          Notifications
        </DialogTitle>

        {
          sampleNotifications.length > 0 ?

            (sampleNotifications.map(({ sender, _id }) => (
              <NotificationItem sender={sender} _id={_id} handler={friendRequestHandler} key={_id} />
            )))

            : <Typography textAlign={"center"}> No Notifications</Typography>
        }



      </Stack>
    </Dialog>
  )
};


const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        minWidth={0}
      >

        <Avatar />

        <Typography
          variant='body1'
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,       // ➜ allow 2 lines max
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis", // ➜ show "..."
          }}>
          {`${name} sent you a friend request`}
        </Typography>

        <Stack
          spacing={1}
          sx={{ flexShrink: 0 }}
          direction={{
            xs: "column",
          }}>
          <Button onClick={() => handler({ _id, accept: true })}
            sx={{
              bgcolor: "primary.main",
              color: "white"
            }}
          >Accept</Button>
          <Button onClick={() => handler({ _id, accept: false })}
            sx={{
              bgcolor: "red",
              color: "white"
            }}
          >Reject</Button>
        </Stack>


      </Stack>
    </ListItem>
  )
});




export default Notifications