

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom' 

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/">
          Página inicial
        </MenuItem>

        {/* Foi inserido o Menu "Sobre" na barra ao lado da logo Karangos juntos com os demais, pra ser possivel que 
        o usuario clique e seja redirecionado com as informações do PROJETO - solicitadas na prova 2 " */}
      <MenuItem onClick={handleClose} component={Link} to="/about" divider>
          Sobre  
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/customers">
          Clientes
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/cars">
          Carros
        </MenuItem>
      </Menu>
    </div>
  );
}
