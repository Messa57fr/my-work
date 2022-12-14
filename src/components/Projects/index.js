import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Pizza from "../../assets/images/pizza-next.png";
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>Here is some of my projects.</p>
          <p>
            Some have been done during my bootcamp at Le Wagon while others are
            just personnal training.
          </p>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  component="a"
                  href="http://pizza-vert-six.vercel.app"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={Pizza}
                    alt="pizza"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Pizza
                    </Typography>
                    <Typography variant="body">
                      Here is a pizza delivery project made with NextJS.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* <Grid xs={12} sm={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Pizza}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid xs={12} sm={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Pizza}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid> */}
          </Grid>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
