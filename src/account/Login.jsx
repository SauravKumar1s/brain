import logo from "../img/logo.png";
import facebook from "../img/facebook.png";
import google from "../img/Google.png";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CancelIcon from "@mui/icons-material/Cancel";
import useStyles from "./LoginStyle";
const headingFont = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

const emailpassword = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

const button = createTheme({
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
  },
});
const text = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontSize: "16px",
      color: "#ffffff",
    },
  },
});

const Login = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "start",
          }}
        >
          <div className={classes.imglogo}>
            <img src={logo} />
          </div>
          <ThemeProvider theme={button}>
            <Box className={classes.signbox}>
              <ThemeProvider theme={theme}>
                <Button
                  className={classes.btn}
                  type="submit"
                  color="primary"
                  sx={{
                    backgroundColor: "#DB2BBB",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  sign in
                </Button>
              </ThemeProvider>
              <Button
                className={classes.btn}
                type="submit"
                sx={{
                  fontSize: "16px",
                  textTransform: "none",
                }}
              >
                signup
              </Button>
            </Box>
          </ThemeProvider>
          <ThemeProvider theme={headingFont}>
            <Typography
              component="h1"
              variant="h3"
              sx={{ fontWeight: "700", lineHeight: "48px", fontSize: "40px" }}
            >
              Welcome Back!
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                lineHeight: "24px",
                mb: "45px",
                mt: "10px",
                color: "#667085",
              }}
            >
              Please fill your detail to access your account.
            </Typography>{" "}
          </ThemeProvider>
          <Box
            component="form"
            noValidate
            className="box"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {/* Email section  */}

            <ThemeProvider theme={emailpassword}>
              <Typography>email</Typography>

              <FormControl
                className={classes.textfield}
                variant="outlined"
                sx={{ marginBottom: "20px" }}
                required
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Email"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <CancelIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              {/* password section  */}
              <Typography>password</Typography>

              <FormControl
                className={classes.textfield}
                variant="outlined"
                sx={{ marginBottom: "20px" }}
                required
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </ThemeProvider>
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  color="#344054"
                />
              </Grid>
              <Grid item sx={{ mt: "10px" }}>
                <Link href="#" variant="body2" sx={{ textDecoration: "none" }}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
          <ThemeProvider theme={theme}>
            <div>
              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  // variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#DB2BBB",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  Sign In
                </Button>
              </ThemeProvider>
            </div>
          </ThemeProvider>
        </Box>
        <Box className={classes.border}>
          <Box className={classes.bottomborder}></Box>
          <Typography sx={{ fontSize: "16px", color: "#757171" }}>
            Or
          </Typography>
          <Box className={classes.bottomborder}></Box>
        </Box>{" "}
        <Box className={classes.socialmedia}>
          <ThemeProvider theme={text}>
            <Typography sx={{ mt: "10px", mb: "10px" }}>
              Sign in with
            </Typography>
          </ThemeProvider>

          <Box>
            <img style={{ margin: "15px" }} src={facebook} />
            <img style={{ margin: "15px" }} src={google} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
