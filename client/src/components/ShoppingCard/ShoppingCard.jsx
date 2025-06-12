import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ShoppingCard = ({ titre, description, prix, nombre, image, onQuantityChange, onDelete }) => {
  const [quantite, setQuantite] = useState(nombre);

  const incrementer = () => {
    const newQty = quantite + 1;
    setQuantite(newQty);
    onQuantityChange(newQty);
  };

  const decrementer = () => {
    const newQty = quantite > 1 ? quantite - 1 : 1;
    setQuantite(newQty);
    onQuantityChange(newQty);
  };

  return (
    <div style={{ ...styles.card, position: 'relative' }}>
      <div style={styles.imageContainer}>
        <img src={image} alt={titre} style={styles.image} />
      </div>

      <div style={styles.infoContainer}>
        <h2 style={styles.title}>{titre}</h2>
        <p style={styles.description}>{description}</p>
        <p style={styles.price}>
          <span style={styles.priceLabel}>Prix :</span>{' '}
          <strong style={styles.priceValue}>{prix} Ar</strong>
        </p>

        <div style={styles.quantityRow}>
          <span style={styles.quantiteLabel}>Quantité :</span>
          <span style={styles.quantiteValue}>{quantite}</span>
          <IconButton onClick={decrementer} style={styles.squareButton}>
            <RemoveIcon style={styles.icon} />
          </IconButton>
          <IconButton onClick={incrementer} style={styles.squareButton}>
            <AddIcon style={styles.icon} />
          </IconButton>
        </div>
      </div>

      <div style={styles.deleteContainer}>
        <IconButton aria-label="Supprimer" onClick={onDelete} style={styles.deleteButton}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    margin: '10px auto',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)',
    gap: '24px',
  },
  imageContainer: {
    flexShrink: 0,
  },
  image: {
    width: '160px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '10px',
    // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  infoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#2e7d32',
    margin: '0 0 10px 0',
  },
  description: {
    fontSize: '15px',
    color: '#555',
    fontStyle: 'italic',
    margin: '5px',
  },
  price: {
    fontSize: '16px',
    margin: '5px',
  },
  priceLabel: {
    color: '#333',
    fontWeight: '500',
  },
  priceValue: {
    color: '#000',
    fontSize: '18px',
  },
  quantityRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  quantiteLabel: {
    fontSize: '15px',
    color: '#333',
  },
  quantiteValue: {
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  squareButton: {
    width: '36px',
    height: '36px',
    backgroundColor: '#4caf50',
    borderRadius: '6px',
    color: '#fff',
  },
  icon: {
    color: '#fff',
  },
  deleteContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  deleteButton: {
    color: '#f44336',
    width: '40px',
    height: '40px',
    border: '2px solid #f44336',
    borderRadius: '8px',
    transition: '0.3s',
  },
};

export default ShoppingCard;
