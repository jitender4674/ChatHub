import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { sampleUsers } from '../../../constants/sampleChatData';
import SearchUserItem from '../shared/SearchUserItem';
const NewGroup = () => {

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);


  const selectMemberHandler = (id) =>{
    setSelectedMembers(prev => prev.includes(id) ? prev.filter((currElement) => currElement !== id) : [...prev,id])
  };

  
  
  const submitHandler =() =>{};
  const closeHandler =() =>{};


  const groupName = useInputValidation("New Group");






  return  (<Dialog open onClose={closeHandler}>

      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"1rem"}>


        <DialogTitle textAlign={"center"} variant='h4'>
          Create New Group
        </DialogTitle>

        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>

        {
          members.length > 0 && <Typography variant="h6" >
          Members:
        </Typography>
        }
        
        <Stack>
          {members.map((user) =>(
            <SearchUserItem
            user={user}
            key={user._id}
            handler={selectMemberHandler}
            isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>


        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            sx={{
              bgcolor: "red",
              color: "white"
            }}
          >Cancel</Button>
          <Button onClick={submitHandler}
            sx={{
              bgcolor: "primary.main",
              color: "white"
            }}
          >Create</Button>

        </Stack>


      </Stack>
    </Dialog>
  )
};

export default NewGroup