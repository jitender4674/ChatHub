import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React,{lazy, Suspense, useState} from 'react'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogOutIcon, Notifications as NotificaionIcon } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';



const Search = lazy(() => import("../specific/Search"));
const Notifications = lazy(() => import("../specific/Notifications"));
const NewGroup = lazy(() => import("../specific/NewGroup"));




const IconBtn = ({title,icon,onClick}) =>{
    return(
        <Tooltip title={title}>
            <IconButton color='inherit' size='large' onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
};





const Header = () => {

    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);


    const handleMobile = () => {
        setIsMobile((prev) => !prev);

    };
    const openSearch = () => {
        setIsSearch((prev) => !prev);

    };

    const openNewGroup = () => {
        setIsNewGroup((prev) => !prev);
    };

    const navigateToGroups =() => navigate("/groups");

    const openNotification = () =>{
        console.log('notification')
        setIsNotification((prev) => !prev)
    }

    const logOutHandler =() => {
        console.log("log out")
    };



    return <>

        <Box sx={{ flexGrow: 1 }} height={"4rem"}>
            <AppBar position='static' sx={{
                bgcolor: "#ffa31a"
            }}>

                <Toolbar
                // sx={{
                //     display: "flex",
                //     justifyContent: "center", // centers horizontally
                //     alignItems: "center", 
                // }}
                >
                   <Link to={"/"} style={{textDecoration:"none"}}>
                    <Typography variant='h5'
                        sx={{
                            display: { xs: "none", sm: "block" },
                            textAlign: "center",
                            color: "black",
                            fontWeight: "bold"

                        }}
                    >
                        ChatHub
                    </Typography>
                   </Link>

                    <Box sx={{
                        display: { xs: "block", sm: "none" },
                    }}>
                        <IconButton color='inherit' onClick={handleMobile}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                        }}>

                    </Box>

                    <IconBtn title={"Search"} icon={<SearchIcon/>} onClick ={openSearch}/>
                    <IconBtn title={"Create new Group"} icon={<AddIcon/>} onClick ={openNewGroup}/>
                    <IconBtn title={"manage groups"} icon={<GroupIcon/>} onClick ={navigateToGroups}/>
                    <IconBtn title={"notifications"} icon={<NotificaionIcon/>} onClick ={openNotification}/>
                    <IconBtn title={"Log out"} icon={<LogOutIcon/>} onClick ={logOutHandler}/>

                    



                </Toolbar>


            </AppBar>

        </Box>
    
    {isSearch && (<Suspense fallback={<Backdrop open/>}>
        <Search/>
    </Suspense>)}
    {isNotification && (<Suspense fallback={<Backdrop open/>}>
        <Notifications/>
    </Suspense>)}
    {isNewGroup && (<Suspense fallback={<Backdrop open/>}>
        <NewGroup/>
    </Suspense>)}


    </>
};

export default Header