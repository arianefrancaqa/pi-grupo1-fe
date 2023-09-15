import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SearchCard = ({ cardId, cardImage, cardTitle, cardDescription, fnCardClick }) => {

  const cardStyle = {
    borderRadius: "10px", // Adicione o valor de borderRadius que desejar
  };

  const cardContentStyle = {
    padding: "10px", // Adicione o valor de borderRadius que desejar
  };

  const handleCardClick = (id) => {
    console.log('Card clicado!');
    fnCardClick(id);
    // Adicione a lógica que deseja executar ao clicar no card
  };

  return (

    <Card style={cardStyle} sx={{ maxWidth: 345 }} elevation={9}>
      <CardActionArea onClick={() => handleCardClick(cardId)}>
        <CardMedia
          sx={{ height: 140 }}
          image={cardImage}
          title="green iguana"
        />
        <CardContent style={cardContentStyle}>
          <Typography gutterBottom variant="h5" component="div" >
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SearchCard;