import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';

const SortByMenu = () => {

    const sort = [
        { label: "Profile", },
        { label: "My Account" },
        { label: "Logout" }
    ]
    const [anchorEl, setAnchorEl] = React.useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{display:"flex"}}>
            <KeyboardArrowDownIcon
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            ></KeyboardArrowDownIcon>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {sort.map((item) => {
                    return (
                        <MenuItem onClick={handleClose}>{item.label}</MenuItem>
                    )
                })}

            </Menu>
        </Box>
    )
}

export default SortByMenu