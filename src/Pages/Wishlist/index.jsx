import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import Searchicon from "../../assets/Icon/SearchIcon.svg"
import CardImg from "../../assets/CardImg/Card.svg"
import Starimg from "../../assets/CardImg/Star.svg"
import Avatar from "../../assets/CardImg/Avatar.svg"
import Card from "../../components/Card"
const Wishlist = () => {
  // const { search } = useStyles()

  const [showClearIcon, setShowClearIcon] = useState("none")

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex")
  }

  const handleClick = () => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...")
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <FormControl
          sx={{
            "& > :not(style)": { padding: "0px 60px" },
          }}
        >
          <TextField
            sx={{
              outline: "none",
            }}
            placeholder="Search in wishlist"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={Searchicon} alt="SearchIcon" />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>
      <Box sx={{ paddingLeft: "20px" }}>
        <Typography
          sx={{ color: "#DB2BBB", fontSize: "16px", fontWeight: "600" }}
        >
          Explore{" "}
        </Typography>
        <Typography
          sx={{ color: "#101828", fontSize: "36px", fontWeight: "600" }}
        >
          My list
        </Typography>
        <Typography
          sx={{ color: "#667085", fontSize: "20px", fontWeight: "400" }}
        >
          Create a perfect wishlist for you!{" "}
        </Typography>
      </Box>
      <Grid
        sx={{
          paddingLeft: "60px",
          paddingTop: "40px",
          display: "flex",
          alignItems: { xs: "start", xs: "center" },
          justifyContent: { md: "start", xs: "center" },
          flexWrap: "wrap",
        }}
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid sx={{ maxWidth: "871.36px" }} item xs={4} sm={4} md={2.7}>
          <Card CardImg={CardImg} Starimg={Starimg} Avatar={Avatar} />
        </Grid>
        <Grid item sx={{ maxWidth: "871.36px" }} xs={4} sm={4} md={2.7}>
          <Card CardImg={CardImg} Starimg={Starimg} Avatar={Avatar} />
        </Grid>
        <Grid item sx={{ maxWidth: "871.36px" }} xs={4} sm={4} md={2.7}>
          <Card CardImg={CardImg} Starimg={Starimg} Avatar={Avatar} />
        </Grid>
        <Grid item sx={{ maxWidth: "871.36px" }} xs={4} sm={4} md={2.7}>
          <Card CardImg={CardImg} Starimg={Starimg} Avatar={Avatar} />
        </Grid>
        <Grid item sx={{ maxWidth: "871.36px" }} xs={4} sm={4} md={2.7}>
          <Card CardImg={CardImg} Starimg={Starimg} Avatar={Avatar} />
        </Grid>
        <Grid item sx={{ maxWidth: "871.36px" }} xs={4} sm={4} md={2.7}>
          <Card CardImg={CardImg} Starimg={Starimg} Avatar={Avatar} />
        </Grid>
        <Grid item sx={{ maxWidth: "871.36px" }} xs={4} sm={4} md={2.7}>
          <Card CardImg={CardImg} Starimg={Starimg} Avatar={Avatar} />
        </Grid>
        <Grid item sx={{ maxWidth: "871.36px" }} xs={4} sm={4} md={2.7}>
          <Card CardImg={CardImg} Starimg={Starimg} Avatar={Avatar} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Wishlist

function CardList({}) {
  return (
    <Box
      item
      xs={2}
      sm={4}
      md={4}
      sx={{
        backgroundColor: "white",
        boxShadow: "-0.720859px 4.32516px 18.0215px rgba(0, 0, 0, 0.25)",
        padding: "17px",
      }}
    >
      <Box>
        <img src={CardImg} alt="" />
      </Box>
      <Box sx={{}}>
        <Typography>Introduction to Figma</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography>4.3</Typography>
          <img src={Starimg} alt="" />
          <img src={Starimg} alt="" />
          <img src={Starimg} alt="" />
          <img src={Starimg} alt="" />
          <img src={Starimg} alt="" />
          <Typography>(16,454)</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <img src={Avatar} alt="" />
        <Box>
          <Typography>Carlos Martin</Typography>
          <Typography>2001 Enrolled</Typography>
        </Box>
        <Typography>$17.84</Typography>
      </Box>
    </Box>
  )
}
