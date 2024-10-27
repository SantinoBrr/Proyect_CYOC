import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';
import '../../assets/styles/styles.css';
import '../../App.css';
import { useUser } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function SearchModels() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate(); // Crea la instancia de useNavigate
  const [searchTerm, setSearchTerm] = useState('');
  const [models, setModels] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!isAuthenticated()) {
      navigate('/Login'); // Redirige a /Login si no está autenticado
      return; // Detiene la ejecución si no está autenticado
    }

    setHasSearched(true);
    try {
      const response = await axios.get(`/api/models?name=${searchTerm}`);
      setModels(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{
      padding: 5,
      textAlign: 'center',
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '14px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}>
      <Typography variant="h4" sx={{
        fontSize: '2rem',
        color: '#333',
        marginBottom: 2,
        fontWeight: 'bold',
      }}>
        Search Car Models
      </Typography>

      <TextField
        label="Model Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
        sx={{
          width: '100%',
          marginBottom: 2,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ccc',
              borderRadius: '8px',
            },
            '&:hover fieldset': {
              borderColor: '#1976d2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1976d2',
            },
          },
          '& .MuiOutlinedInput-input': {
            border: 'none',
            marginBottom: '0px',
            padding: '27px',
            fontSize: '1.2rem',
            backgroundColor: '#fdfdfd',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          },
        }}
      />

      <Button
        onClick={handleSearch}
        sx={{
          fontFamily: "Oswald",
          padding: '10px 30px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
          width: '100%', // Mantiene el estilo de ancho completo
          marginBottom: 2,
          '&:hover': {
            backgroundColor: '#0056b3',
            transform: 'scale(1.05)',
            boxShadow: '0px 10px 20px rgba(0, 123, 255, 0.4)',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)',
          },
        }}
      >
        Search
      </Button>

      <List sx={{ marginTop: 2 }}>
        {models.length > 0 ? (
          models.map((model) => (
            <ListItem key={model.id} sx={{
              borderBottom: '1px solid #e0e0e0',
              padding: '12px 0',
              '&:last-child': {
                borderBottom: 'none',
              },
            }}>
              <ListItemText
                primary={model.name}
                secondary={`Description: ${model.description}`}
                primaryTypographyProps={{ fontWeight: 'bold' }}
              />
            </ListItem>
          ))
        ) : (
          hasSearched && (
            <Typography variant="body1" sx={{
              marginTop: 2,
              fontSize: '1.1rem',
              color: '#757575',
            }}>
              No models found. 
            </Typography>
          )
        )}
      </List>
    </Box>
  );
}

export default SearchModels;
