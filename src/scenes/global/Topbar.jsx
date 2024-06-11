import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase/InputBase"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonalOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined"
import SearchIcon from "@mui/icons-material/Search"

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={1}>
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
            </IconButton>
        </Box>
        <Box display="flex">
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                <PersonalOutlinedIcon />
            </IconButton>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'light' ? (
                    <LightModeOutlinedIcon />
                ) : <DarkModeOutlinedIcon />}
            </IconButton>
        </Box>
    </Box>
  )
}

export default TopBar