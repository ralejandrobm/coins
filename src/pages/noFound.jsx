import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my:"5px",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box sx={{ mb: 3 }}>
        <SentimentDissatisfiedIcon sx={{ fontSize: 96, color: "text.secondary" }} />
      </Box>

      <Typography variant="h3" gutterBottom>
        404
      </Typography>

      <Typography variant="h5" gutterBottom>
        Página no encontrada
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/")}
      >
        Volver al inicio
      </Button>
    </Container>
  );
}
