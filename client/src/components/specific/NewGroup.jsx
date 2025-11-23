import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { sampleUsers } from '../../../constants/sampleChatData';
import SearchUserItem from '../shared/SearchUserItem';
import { useInputValidation } from '6pp';
import { useState } from 'react';
const NewGroup = () => {

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);


  const selectMemberHandler = (id) =>{
    setSelectedMembers(prev => [...prev,id])
  };

  console.log(selectedMembers);
  
  const submitHandler =() =>{};

  const groupName = useInputValidation("");






  return  (<Dialog open>

      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"1rem"}>


        <DialogTitle textAlign={"center"} variant='h4'>
          New Group
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