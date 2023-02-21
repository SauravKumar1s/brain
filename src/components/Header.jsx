import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"

import Logo from "../assets/Logo/Logo.svg"
import AvatorIcon from "../assets/Icon/AvatorIcon.svg"
import Searchicon from "../assets/Icon/SearchIcon.svg"
import NotificationIcon from "../assets/Icon/NotificationIcon.svg"
import { ImageListItem } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import MenuIcon from "@mui/icons-material/Menu"
const navbardata = [
  { title: "Home", Link: "/Home" },
  { title: "About", Link: "/About" },
  { title: "Blog", Link: "/Blog" },
  { title: "Contact", Link: "/Contact" },
]
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#363030AD",
  height: "35.12px",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    border: "0.5px solid #000000",
    borderRadius: "5px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // width: "20ch",
    },
  },
}))

export default function Header() {
  const matches = useMediaQuery("(max-width:745px)")

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "space-between" }}>
      <AppBar
        sx={{
          backgroundColor: "white",
          height: "104.81px",

          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "104.81px",
            flexGrow: 1,
          }}
        >
          <ImageListItem
            sx={{ cursor: "pointer", marginLeft: "30px", marginRight: "30px" }}
          >
            <img src={Logo} alt={"logo"} loading="lazy" />
          </ImageListItem>

          <Search>
            <SearchIconWrapper>
              <img src={Searchicon} alt="SearchIcon" />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ backgroundColor: "transparent" }}
              placeholder="Want to learn?"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {!matches && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                justifyContent: "center",
                flexGrow: 1,
                cursor: "pointer",
              }}
            >
              {navbardata.map((value) => (
                <Typography
                  sx={{ color: "#3A3A3A", fontSize: "16px", fontWeight: "400" }}
                >
                  {value.title}
                </Typography>
              ))}
            </Box>
          )}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 0.1,
              paddingLeft: "90px",
            }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <img src={NotificationIcon} alt="" />
            </IconButton>

            <IconButton color="inherit">
              <img src={AvatorIcon} alt="" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
