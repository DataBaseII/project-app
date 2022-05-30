import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Grid, Header, Divider } from "semantic-ui-react";
import AddMovie from "./Modal";
import Navbar from "components/Navbar";
import { getAllMovies } from "services/movies";
import DefaultImage from "assets/default_image.png";
import { createMovie } from "services/movies";

export default function Movies({ title }) {
  const [movies, setMovies] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getMovies();
  }, [update]);

  function getMovies() {
    getAllMovies().then(({ data }) => {
      setMovies(data);
      setUpdate(true);
    });
  }

  const movie = {
    _id: null,
    name: "",
    year: "",
    imageBG: "",
    imageCard: "",
    video: "",
    duration: "",
    genreId: "123",
    sinopsis: "",
    director: "",
    idioms: ["Ingles", "Español"],
    actors: ["Iron Man", "Capitán América", "Hulk", "Thor"],
  };

  return (
    <>
      {title ? null : <Navbar />}
      <Header as="h2" className="header-title font-title">
        <Icon name="film" />
        <Header.Content>{title ? title : "Movies"}</Header.Content>
      </Header>
      <Divider />
      {title ? null : (
        <div style={{ marginLeft: "90%", marginBottom: "2rem" }}>
          <AddMovie
            movie={movie}
            button={"Agregar"}
            icon={"add"}
            title={"Agregar Pelicula"}
            action={createMovie}
            update={setUpdate}
          />
        </div>
      )}
      <Grid>
        <Grid.Column width={1} />
        <Grid.Column width={14} verticalAlign="middle">
          <Card.Group>
            {movies.map((movie) => (
              <Card key={movie._id}>
                <Link to={`/admin-movies/${movie._id}`}>
                  <Image
                    src={movie.imageCard ? movie.imageCard : DefaultImage}
                  />
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
                  {movie.genreId}
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
