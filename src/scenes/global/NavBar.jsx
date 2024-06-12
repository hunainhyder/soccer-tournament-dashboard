import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Divider } from "@mui/material"
import { CatchingPokemonTwoTone } from "@mui/icons-material"
import { Link } from "react-router-dom"

const SideBar = () => {
  let buttonStyleClass = "css-pmncfm-MuiButtonBase-root-MuiButton-root";

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonTwoTone />
        </IconButton>
        <Typography variant="p" textAlign='left' component="div" sx={{ flexGrow: 1 }}>
          Champions League
        </Typography>
        <Stack direction='row' spacing={2}>
          <Link to="/" className={buttonStyleClass}>
            <Button color='inherit' className={buttonStyleClass}>
              Home
            </Button>
          </Link>
          <Link to="/matches" className={buttonStyleClass}>
            <Button color='inherit' className={buttonStyleClass}>
              Matches
            </Button>
          </Link>
          <Link to="/groups" className={buttonStyleClass}>
            <Button color='inherit'>
              Group
            </Button>
          </Link>
          <Link to="/stats" className={buttonStyleClass}>
            <Button color='inherit'>
              Stats
            </Button>
          </Link>
          <Link to="/teams" className={buttonStyleClass}>
            <Button color='inherit'>
              Teams
            </Button>
          </Link>
          <Link to="/players" className={buttonStyleClass}>
            <Button color='inherit'>
              Players
            </Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default SideBar