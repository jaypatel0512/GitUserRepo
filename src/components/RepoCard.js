import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RepoCard = ({repo}) => {

    const { name, html_url, description, language } = repo;

  return (
    
    <Grid xs={12} lg={5} mx={3} mb={2}>
      <Card sx={{ display: "flex", p: 1,backgroundColor:"#abf2bc" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="#24292f">
            <a href={html_url}>{name}</a>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {description}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {language && <small>Written in {language}</small>}
            </Typography>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Box>
      </Card>
    </Grid>
  )
}

export default RepoCard