"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import AuthLogin from "../auth/AuthLogin";
import Navbar from "../navbar/navbar";
import Button from "@mui/material/Button";

const Login2 = () => {
  return (
    <PageContainer title="Login" description="this is Login page">
      <Navbar />
      <Box sx={{ backgroundColor: "#e9d9c8" }}>
        <Grid container spacing={0} sx={{ height: "100vh" }}>
          {/* Left Half with Background Image */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              position: "relative",
              // backgroundColor: "#e9d9c8",
              backgroundImage: `url('/images/backgrounds/login-bg.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100", // Ensures the Grid item fills the entire height of the container
            }}
          ></Grid>

          {/* Right Half with Login Card */}
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "#e9d9c8" }}
          >
            <Card
              elevation={0}
              sx={{
                p: 4,
                zIndex: 1,
                width: "100%",
                maxWidth: "500px",
                backgroundColor: "#8E4739",
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                subtext={
                  <Typography
                    variant="h6"
                    textAlign="center"
                    color="textPrimary"
                    mb={1}
                  >
                    Your Sound, Your Space, Your Harmony.
                  </Typography>
                }
                subtitle={
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    mt={3}
                  >
                    <Typography
                      color="textPrimary"
                      variant="h6"
                      fontWeight="500"
                    >
                      New to Harmony Hub?
                    </Typography>
                  </Stack>
                }
              />{" "}
              <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
                {" "}
                <Box>
                  <Button
                    component={Link}
                    href="/authentication/register"
                    variant="contained"
                    size="large"
                    fullWidth
                    color="secondary"
                    sx={{
                      "&:hover": {
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
