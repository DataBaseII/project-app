import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Grid } from "semantic-ui-react";

import AddMovie from './Modal';
import Navbar from "components/Navbar";
import { getAllMovies } from "services/movies";
import DefaultImage from "assets/default_image.png";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    getAllMovies().then(({ data }) => setMovies(data));
  }

  const movie = {
    name:'Adrian Movie', 
    genreId: 1
  }

  return (
    <>
      <Navbar />
      <h1>Movies</h1>
      <AddMovie movie={movie}/>
      <Grid >
        <Grid.Column width={1} />
        <Grid.Column width={14}  verticalAlign="middle">
          <Card.Group>
            {movies.map((movie) => (
              <Card>
                <Link to={`/admin-movies/${movie._id}`}>
                <Image src={movie.imageCard ? movie.imageCard : DefaultImage} />
                </Link>
                <Card.Content>
                  <Card.Header>{movie.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">Estreno {movie.year}</span>
                  </Card.Meta>
                  <Card.Description>{movie.sinopsis}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="film" />
                  {movie.genres[0].name}
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    </>
  );
}
