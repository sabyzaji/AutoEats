import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger menu icon
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Drawer = () => {
    const navigate = useNavigate(); // Correctly use useNavigate
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, left: open });
    };

    const handleListItemClick = (text) => {
        const routes = {
            'Menu items': '/menu-management',
            'Customer Details': '/customers',
            'Employee Details': '/staff',
            'Reports': '/report',
            'Orders': '/orders-list',
        };

        const route = routes[text];

        navigate(route); // Use navigate function to navigate to the route
    };

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Menu items', 'Customer Details', 'Employee Details', 'Reports', 'Orders'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleListItemClick(text)}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'left'}>
                {/* Use the hamburger menu icon for toggling the drawer */}
                <IconButton onClick={toggleDrawer(true)} style={{ fontSize: '32px' }} ><GiHamburgerMenu /></IconButton>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}

export default Drawer;
