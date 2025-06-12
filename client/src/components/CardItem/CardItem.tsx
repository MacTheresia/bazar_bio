import React from 'react';

type Props = {
  titre: string;
  image: string;
};

const CardItem: React.FC<Props> = ({ titre, image }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{titre}</h2>
      <img src={image} alt={titre} style={styles.image} />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
    borderRadius: 8,
  },
};

export default CardItem;
