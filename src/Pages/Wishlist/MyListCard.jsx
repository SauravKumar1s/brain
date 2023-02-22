import React from "react"

import Card from "@mui/material/Card"

import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

import Grid from "@mui/material/Grid"

import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import CardImg from "../../assets/CardImg/Card.svg"
import Searchicon from "../../assets/Icon/SearchIcon.svg"
import Starimg from "../../assets/CardImg/Star.svg"
import Avatar from "../../assets/CardImg/Avatar.svg"
import useMediaQuery from "@mui/material/useMediaQuery"
import { FormControl, InputAdornment, TextField } from "@mui/material"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const theme = createTheme()
export default function MyListCard() {
  const matches = useMediaQuery("(max-width:1333px)")

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box sx={{ px: { md: "50px", xs: "20px" } }}>
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
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                "& > :not(style)": { padding: "0px 60px" },
              }}
            >
              <Box
                sx={{
                  border: "1px solid #000000",
                  position: "relative",
                }}
              >
                <img
                  style={{ position: "absolute", top: "14px", left: "22px" }}
                  src={Searchicon}
                  alt="SearchIcon"
                />
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    color: "#363030AD",
                    fontSize: "20px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "60%",
                  }}
                  type="text"
                  placeholder="Search in wishlist"
                />
              </Box>
            </FormControl>
          </Box>
          <Box sx={{ paddingBottom: "30px" }}>
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
          <Grid container columnSpacing={6} rowSpacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={matches ? 4 : 3}>
                <Card
                  sx={{
                    height: "86%",
                    width: "288.34px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "15px",
                    boxShadow:
                      "-0.720859px 4.32516px 18.0215px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      objectFit: "cover",
                      width: "288px",
                      height: "186.41px",
                    }}
                    image={CardImg}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{}}>
                      <Typography
                        sx={{
                          color: "#101828",
                          fontSize: "17px",
                          fontWeight: "600",
                        }}
                      >
                        Introduction to Figma
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#DB2BBB",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        >
                          4.3
                        </Typography>
                        <Box>
                          <img src={Starimg} alt="" />
                          <img src={Starimg} alt="" />
                          <img src={Starimg} alt="" />
                          <img src={Starimg} alt="" />
                          <img src={Starimg} alt="" />
                        </Box>
                        <Typography>(16,454)</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <img src={Avatar} alt="" />
                        <Box sx={{ paddingLeft: "10px" }}>
                          <Typography
                            sx={{
                              color: "#101828",
                              fontSize: "12px",
                              fontWeight: "500",
                            }}
                          >
                            Carlos Martin
                          </Typography>
                          <Typography
                            sx={{
                              color: "#667085",
                              fontSize: "12px",
                              fontWeight: "500",
                            }}
                          >
                            2001 Enrolled
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          color: "#DB2BBB",
                          fontSize: "18px",
                          fontWeight: "700",
                          lineHeight: "24px",
                        }}
                      >
                        $17.84
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  )
}
