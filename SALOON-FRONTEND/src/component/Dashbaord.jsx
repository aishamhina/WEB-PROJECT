import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider, Card, CardContent } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';

function Dashboard() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/details/count')
            .then(response => {
                if (response.data && response.data.count !== undefined) {
                    setCount(response.data.count); 
                } else {
                    console.error('Invalid response format:', response);
                }
            })
            .catch(error => {
                console.error('Error fetching count:', error);
            });
    }, []);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <AppBar style={{ backgroundColor: 'brown' }} position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
            >
                <div
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <List>
                        <ListItem button component="a" href="/dashboard">
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button component='a' href="/details">
                            <ListItemText primary="Details" />
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </Drawer>

            <div style={{ padding: '20px' }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Detail
                        </Typography>
                        {count !== null ? (
                            <Typography variant="body1" component="div">
                                Count: {count}
                            </Typography>
                        ) : (
                            <Typography variant="body1" component="div">
                                Loading...
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default Dashboard;
