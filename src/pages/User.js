import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RepoCard from "../components/RepoCard";

import axios from "../axios";
import {useParams } from "react-router-dom";

const User = () => {
  const { login } = useParams();

  //get user information
  const [userInfo, setUserInfo] = useState({});

  //get user Repo
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInformation();
  });

  return (
    <Box bgcolor="#eaeef2" >
      <Grid container>
        <Grid xs={12} lg={3} m={2}>
        <Card sx={{backgroundColor: "#24292f"}} >
          <CardMedia
            component="img"
            image={userInfo?.avatar_url}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" color="#ffffff">
              {userInfo?.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="#ffffff"
                component="div"
              >
                {userInfo?.bio}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Box>
        </Card>
        </Grid>
        <Grid  sx={12} lg={8} container margin={2}>
        {repos ? (
          repos.map((repo) => {
            return <RepoCard repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No repos for this user...</h2>
        )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default User;
