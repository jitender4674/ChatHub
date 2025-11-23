import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import SearchUserItem from '../shared/SearchUserItem';
import { sampleUsers } from '../../../constants/sampleChatData';






const Search = () => {

  const search = useInputValidation("");

  let isLoadingSendFriendRequest = false;

  const addFriendHandler = (id) =>{
    console.log(id);
  };

  const [SearchUsers, setSearchUsers] = useState(sampleUsers);



  return <Dialog open>
    <Stack p={"2rem"} direction={"column"} width={"25rem"}>
      <DialogTitle textAlign={"center"}>
        Find People
      </DialogTitle>
      
      <TextField label="" value={search.value}
      onChange={search.changeHandler}
      variant='outlined'
      size='small'
      InputProps={{
        startAdornment:(
          <InputAdornment position='start'>
          <SearchIcon/>
          </InputAdornment>
        )
      }}/>

      <List>
      {
        SearchUsers.map((user) =>(
          <SearchUserItem user={user} handler={addFriendHandler}
          handlerIsLoading={isLoadingSendFriendRequest}/>
        ))
      }
      </List>

    </Stack>
  </Dialog>
}

export default Search