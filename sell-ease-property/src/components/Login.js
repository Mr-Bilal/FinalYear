import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      return setEmailError("Field is required");
    }
    if (!emailRegex.test(email)) {
      return setEmailError("Invalid email");
    }
    if (!password) {
      return setPasswordError("Field is required");
    }
    try {
      let payload = {
        email,
        password,
      };
      let response = await axios.post("http://localhost:8080/login", payload);
      console.log("🚀 ~ handleSubmit ~ response:", response);
      if (response?.data?.success == true) {
        toast.success(response?.data?.message, {
          toastId: "success-msg",
        });
        navigate("welcome");
      } else {
        toast.error(response?.data?.message, {
          toastId: "error-msg",
        });
      }
    } catch (err) {
      if (err?.response?.data?.success == true) {
        toast.success(err?.response?.data?.message, {
          toastId: "success-catch-msg",
        });
      } else {
        toast.error(err?.response?.data?.message, {
          toastId: "error-catch-msg",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="login-main">
        <Card className="login-card">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* <img src={CabStartupIcon} alt={"not found"} /> */}
          </Box>
          <h1 className="start-para">Sell Property</h1>
          <h1 className="back-office-para">Login Page</h1>
          <Grid container spacing={3}>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <Typography sx={{ color: "red", pt: 1 }}>
                  {emailError}
                </Typography>
              )}
              {/* <Box sx={{ position: "relative" }}>
                <img src={EmailIcon} alt={"email icon not found"} className='search-icon' />
              </Box> */}
              {/* {errors?.email && <FormValidationError errors={errors?.email?.message} />} */}
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: "1px" }}>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                size="small"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <Typography sx={{ color: "red", pt: 1 }}>
                  {passwordError}
                </Typography>
              )}
              {/* <Box sx={{ position: "relative" }}>
                <img src={showPassword?EyeViewIcon:EyeIcon} alt={"eye icon not found"} className='search-icon' onClick={handleShowPassword} />
              </Box> */}
              {/* {errors?.password && <FormValidationError errors={errors?.password?.message} />} */}
            </Grid>
          </Grid>
          {/* <Box sx={{ display: "flex", justifyContent: "space-between", mt: "10px" }}>
                    <Box>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Remember me?" className='remember-me' />
                        </FormGroup>
                        {errors?.rememberMe && <FormValidationError errors={errors?.rememberMe?.message} />}
                    </Box>
                    <Box sx={{ mt: "10px" }}>
                        <a className='forgot-password'>Forgot Password ?</a>
                    </Box>
                </Box> */}
          <Box sx={{ display: "flex", mt: "25px" }}>
            <button type="submit" className="login-btn">
              Login
            </button>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography>
              Don't have an account?{" "}
              <span onClick={() => navigate("register")} className="signup">
                Sign Up
              </span>
            </Typography>
          </Box>
        </Card>
      </Box>
    </form>
  );
};

export default Login;
