import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material"
import { CatchingPokemonTwoTone } from "@mui/icons-material"

const SideBar = () => {
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
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Matches</Button>
          <Button color='inherit'>Group</Button>
          <Button color='inherit'>Stats</Button>
          <Button color='inherit'>Teams</Button>
          <Button color='inherit'>Players</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default SideBar