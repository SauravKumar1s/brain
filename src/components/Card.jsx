import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/system"

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: { xs: "291.36px", md: "271.36px" },
        backgroundColor: "white",
        padding: "16px 16px",
        boxShadow: "-0.720859px 4.32516px 18.0215px rgba(0, 0, 0, 0.25)",
      }}
    >
      <CardMedia
        sx={{ height: 186 }}
        image={props.CardImg}
        title="green iguana"
      />
      <CardContent>
        <Box sx={{}}>
          <Typography
            sx={{ color: "#101828", fontSize: "17px", fontWeight: "600" }}
          >
            Introduction to Figma
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography
              sx={{ color: "#DB2BBB", fontSize: "13px", fontWeight: "500" }}
            >
              4.3
            </Typography>
            <Box>
              <img src={props.Starimg} alt="" />
              <img src={props.Starimg} alt="" />
              <img src={props.Starimg} alt="" />
              <img src={props.Starimg} alt="" />
              <img src={props.Starimg} alt="" />
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
            <img src={props.Avatar} alt="" />
            <Box sx={{ paddingLeft: "10px" }}>
              <Typography
                sx={{ color: "#101828", fontSize: "12px", fontWeight: "500" }}
              >
                Carlos Martin
              </Typography>
              <Typography
                sx={{ color: "#667085", fontSize: "12px", fontWeight: "500" }}
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
  )
}
