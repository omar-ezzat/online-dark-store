import React from 'react';
import { AppBar, Toolbar, Typography, Button } from "@mui/material";


const Navbar = () => {
    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "#181818" }}>
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                        Dark Store
                    </Typography>

                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>

        </>
    );
}

export default Navbar;
