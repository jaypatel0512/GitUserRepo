import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import UserCard from "../components/UserCard";

import axios from 'axios';


const Home = () => {
  const [query, setQuery] = useState("");

  //users fetching from API
  const [users, setUsers] = useState([]);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const fetchUsers = async () => {
    try {
      const BASE_URL = "https://api.github.com";
      const { data } = await axios.get(`${BASE_URL}/search/users?q=${query}`);
      return data?.items;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("Your query is empty...");
    }
  };
  return (
    <Box bgcolor="#eaeef2">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        
      >
        <Grid xs={6} margin={5} sx={{ display: "flex", width: 400 }}>
          <TextField
            fullWidth
            id="standard-bare"
            value={query}
            onChange={handleQueryInput}
            placeholder="Search User"
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSearchUsers}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{ backgroundColor: "white", borderRadius: 2 }}
          />
        </Grid>
      </Grid>
      <Grid container>
        {users ? (
          users.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })
        ) : (
          <h2>there is nothing to display..</h2>
        )}
      </Grid>
    </Box>
  );
};

export default Home;
