import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const Navbar = ({sections}) => {
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "Home", ref: sections.home },
        { label: "Products", ref: sections.products },
        { label: "About", ref: sections.about },
        { label: "Contact", ref: sections.contact },
    ];

    const scrollToSection = function (ref) {
        setOpen(false);

        if (ref?.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };



    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: "#181818" }}>
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                        Dark Store
                    </Typography>

                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                onClick={() => scrollToSection(item.ref)}
                            >
                                {item.label}
                            </Button>

                        ))}
                    </Box>

                    <IconButton
                        color="inherit"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        width: 250,
                        height: "100%",
                        bgcolor: "#181818",
                        color: "white",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                        <IconButton color="inherit" onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton onClick={() => scrollToSection(item.ref)}>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

        </>

    );
}

export default Navbar;
