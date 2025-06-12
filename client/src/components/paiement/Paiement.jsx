import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Grid,
} from '@mui/material';


const CheckoutPage = () => {
  const cartItems = [
    { id: 1, name: 'Produit A', quantity: 2, price: 5000 },
    { id: 2, name: 'Produit B', quantity: 1, price: 3000 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Paiement effectué avec succès !');
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', p: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Paiement
      </Typography>

      <Grid container spacing={4}>
        {/* Panier */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Récapitulatif du panier
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {cartItems.map((item) => (
              <Box key={item.id} sx={{ mb: 2 }}>
                <Typography>{item.name} × {item.quantity}</Typography>
                <Typography color="text.secondary">
                  {item.quantity * item.price} Ar
                </Typography>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">
              Total : {total} Ar
            </Typography>
          </Paper>
        </Grid>

        {/* Formulaire de paiement */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Informations de paiement
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box component="form" onSubmit={handlePayment} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField required label="Nom complet" />
              <TextField required label="Adresse de livraison" />
              <TextField required label="Numéro de carte" />
              <TextField required label="Date d'expiration (MM/AA)" />
              <TextField required label="Code CVV" type="password" />

              <Button variant="contained" color="primary" type="submit">
                Payer {total} Ar
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
