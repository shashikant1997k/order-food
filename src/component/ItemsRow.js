import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../css/ItemsRow.css';


const useStyles = makeStyles({
    root: {
      width: 126,
      maxWidth: 140,
    },
    media: {
      height: 140,
    },
  });

function ItemsRow({item}) {

    const classes = useStyles();
    return (
        <div className="itemsRow">
            <div className="all_cardItems">
                <h5 style={{marginBottom: "10px"}}>Your taste</h5>
                <div className="cards">
                {
                    item?.map((val, i) => {
                        return (
                            <Card key={i} className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={val?.small_image}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent className="card__content">
                                        <Typography className="card_header" gutterBottom variant="h5" component="h4">
                                            {val?.restaurant_name}
                                        </Typography>
                                        <Typography className="card_discription" variant="body2" color="textSecondary" component="p">
                                            {val?.address_complete}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                        
                    })
                }
            </div>
            </div>

        </div>
    )
}

export default ItemsRow
