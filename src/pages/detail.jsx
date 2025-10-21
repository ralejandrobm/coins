import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Avatar,
  CircularProgress,
  Chip
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Página de detalle de criptomoneda (consulta API CoinGecko)
export default function Detail() {
  const { id } = useParams(); // ejemplo: /crypto/bitcoin
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCoin(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!coin) {
    return <Typography variant="h6">No se encontraron datos de la criptomoneda.</Typography>;
  }

  const {
    name,
    symbol,
    image,
    market_data: market
  } = coin;

  const price = market?.current_price?.usd;
  const change7d = market?.price_change_percentage_7d_in_currency?.usd;
  const isUp = change7d > 0;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
     

      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Card variant="outlined" sx={{ textAlign: 'center', p: 3 }}>
          <Avatar
            src={image?.large}
            alt={name}
            sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            {name} ({symbol?.toUpperCase()})
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${price?.toLocaleString()} USD
          </Typography>

          <Chip
            icon={isUp ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            label={`${change7d?.toFixed(2)}% en 7d`}
            color={isUp ? 'success' : 'error'}
          />
        </Card>
      </Container>

      <Box component="footer" sx={{ py: 2, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="body2">Datos obtenidos desde CoinGecko API</Typography>
      </Box>
    </Box>
  );
}
