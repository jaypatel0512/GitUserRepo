import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";


const UserCard = ({ user }) => {
  const { avatar_url, login, id } = user;

  return (
    <Grid sx={{ m:2 }} xs={10} xl lg md sm>
      <Card sx={{ display: "flex", p: 1,backgroundColor:"#abf2bc" }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 150 }}
          image={avatar_url}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="#24292f">
              {login}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {id}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/user/${login}`} color="text.primary">View Profile</Link>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default UserCard;
