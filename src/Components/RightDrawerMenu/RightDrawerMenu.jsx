import React, { memo, useCallback, useMemo, useContext } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StoreContext } from '../../Contexts/StoreContext';
import './RightDrawerMenu.css';

const menuItems = [
  { id: 'home', path: '/', label: 'Home' },
  { id: 'events', path: '/events', label: 'Events' },
  { id: 'about', path: '/about', label: 'About Us' },
  { id: 'contact', path: '/Contact', label: 'Contact Us' },
  { id: 'team', path: '/team', label: 'Our Team' },
];

const RightDrawerMenu = memo(() => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const {stOrderId} = useContext(StoreContext)
  
  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const isMobile = useMediaQuery('(max-width:900px)');

  // Memoize drawer content to prevent unnecessary re-renders
  const drawerContent = useMemo(() => (
    <List component="nav">
      {menuItems.map(({ id, path, label }) => (
        <ListItem key={id} disablePadding>
          {path ? (
            <ListItemButton
              component={Link}
              to={path}
              onClick={handleCloseDrawer}
              className="drawer-link"
            >
              <ListItemText primary={label} /> 
            </ListItemButton>
          ) : (
            <ListItemButton onClick={handleCloseDrawer}>
              <ListItemText primary={label} />
            </ListItemButton>
          )}
        </ListItem>
      ))}
      {stOrderId.length>0? <ListItemButton
              component={Link}
              to="/viewticket"
              onClick={handleCloseDrawer}
              className="drawer-link"
            ><ListItemText primary="View My Ticket" /></ListItemButton>:<></>}
    </List>
  ), [handleCloseDrawer]);

  return (
    <div>
      {isMobile && (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenDrawer}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
      )}

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          elevation: 3,
          sx: {
            width: { xs: '250px', sm: '300px' },
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgb(37 9 9 / 50%);',
            color: 'white',
            '& .MuiListItemButton-root': {
              py: 1.5,
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            },
          },
        }}
      >
        {drawerContent}
      </Drawer>


    </div>
  );
});

RightDrawerMenu.displayName = 'RightDrawerMenu';

export default RightDrawerMenu;