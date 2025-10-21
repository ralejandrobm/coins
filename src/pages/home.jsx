import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  TextField,
} from "@mui/material";



const drawerWidth = 15;
export default function About() {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json(); // Convierte la respuesta en JSON
      })
      .then((data) => {
        setCoins(data); // Aquí se "guardan" los datos
        console.log("datos guardados:", data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      })
      .finally(() => {
        console.log("Petición finalizada");
      });
  }, []);


  useEffect(() => {
    if (limit == 0)
        return;
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json(); // Convierte la respuesta en JSON
      })
      .then((data) => {
        setCoins(data); // Aquí se "guardan" los datos
        console.log("datos guardados:", data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      })
      .finally(() => {
        console.log("Petición finalizada");
      });
  }, [limit]);

  const descending = () => {
    const coinsCopy = [...coins]
    setCoins(coinsCopy.sort((a, b) => b.current_price - a.current_price));
    console.log("descending")
  }

  const ascending = () => {
    const coinsCopy = [...coins]
    setCoins(coinsCopy.sort((a, b) =>  a.current_price - b.current_price));
    console.log("ascending")
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: `${drawerWidth}%`,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem disablePadding onClick={() => ascending()}>
              <ListItemButton>
                <ListItemIcon>
                  <ArrowUpwardIcon />
                </ListItemIcon>
                <ListItemText primary={"Ascending"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => descending()}>
                <ListItemIcon>
                  <ArrowDownwardIcon />
                </ListItemIcon>
                <ListItemText primary={"Descending"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              sx={{ px: 2, display: "flex", flexDirection: "column" }}
            >
              <ListItemText primary={"Limit to:"} />

              <TextField
                type="number"
                size="small"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
                id="limit"
                sx={{ width: "60%" }}
              />
            </ListItem>
          </List>
        </Drawer>

        <Grid container spacing={2} sx={{ marginRight: `${drawerWidth + 3}%` }}>
          {coins.map((coin) => (
            <Grid size={{ xs: 12, md: 4 }} key={coin.id}>
              <Card key={coin.id}>
                <CardActionArea
                  onClick={() => nav("/detail/"+coin.id)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent sx={{ height: "100%" }}>
                    <Typography variant="h5" component="div">
                      {coin.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {coin.symbol}
                    </Typography>
                    <Typography variant="body2" color="green">
                      {coin.current_price}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: "50%", height: "50%" }}
                    image={coin.image}
                    alt="Live from space album cover"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
