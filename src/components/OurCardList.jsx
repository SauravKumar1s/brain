import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button } from "@mui/material";

const OurCardList = () => {
  const theme = useTheme();
  return (
    <>
    <Box sx={{display:"flex" , justifyContent:"center" , gap:"20px"}}>
      <Box sx={{width:"1280px" , display:"flex" , justifyContent:"space-between"}}>
    <Card sx={{ display: "flex" ,  gap:"20px"}}>
      <CardMedia
        component="img"
        sx={{ width: "320px", height: "200px" }}
        image="https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{  }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
       
      </Box>
     
    </Card>
     <Card sx={{ display: "flex" ,  gap:"10px"}}>
     <CardMedia
       component="img"
       sx={{ width: "320px", height: "200px" }}
       image="https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg"
       alt="Live from space album cover"
     />
     <Box sx={{ display: "flex", flexDirection: "column" , justifyContent:"space-between" }}>
       <CardContent sx={{ width:"280px" }}>
         <Typography component="div" variant="p">
           date 26 jan
         </Typography>
         <Typography
           variant="subtitle1"
           color="text.secondary"
           component="div"
         >
           Mac Miller
         </Typography>
         <Typography>How to design and test properly in figma.  Learn step by step guide and enjoy!</Typography>
         <Button>Research</Button>
         <Button>Ui ux</Button>
       </CardContent>
      
     </Box>
    
   </Card>
   </Box>
   </Box>
   </>
  );
};

export default OurCardList;
