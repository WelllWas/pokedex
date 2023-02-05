import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styles from "./index.module.css";
import { UseTypes, UsetypeColor } from "../../Utils/Imports";

type pokemon = {
  name: string;
  image: string;
  types: any;
  id: string;
}

export function PokemonCard(props: pokemon) {
  const { name, image } = props;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Card sx={{ maxWidth: 300, maxHeight: 245, backgroundColor: '#406882'}} className={styles.Card}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {capitalizedName}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" style={{
              borderRadius: '20%',
              backgroundColor: `${UsetypeColor(props)}`
            }}>
              {UseTypes(props)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
