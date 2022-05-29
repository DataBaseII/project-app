import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/Navbar";
import { getMovie } from "services/movies";
import {
  Header,
  Icon,
  Divider,
  Embed,
  Table,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import DefaultImage from "assets/default_image.png";
import EditMovie from "../Movies/Modal";
import DeleteMovie from "../../../components/Delete";
import { updateMovie, deleteMovie } from "services/movies";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    getMovie(id)
      .then(({ data }) => {
        setMovie(data);
        setUpdate(true);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [update, id]);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Dimmer active={!isLoading}>
          <Loader indeterminate>Cargando Pelicula</Loader>
        </Dimmer>
      ) : (
        <>
          <Header as="h2" className="header-title">
            <Icon name="film" />
            <Header.Content>{movie.name}</Header.Content>
          </Header>
          <Divider />
          <EditMovie
            movie={movie}
            button={"Editar"}
            icon={"edit"}
            title={`Editar ${movie.name}`}
            action={updateMovie}
            update={setUpdate}
          />
          <DeleteMovie title={`Eliminar ${movie.name}`} action={deleteMovie} id={movie._id}/>
          {movie.video && (
            <Embed
              id={movie.video}
              placeholder={movie.imageBG ? movie.imageBG : DefaultImage}
              source="youtube"
            />
          )}
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={8} />
                <Table.HeaderCell width={8} />
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {movie.year && (
                <Table.Row>
                  <Table.Cell>Año</Table.Cell>
                  <Table.Cell>{movie.year}</Table.Cell>
                </Table.Row>
              )}

              {movie.duration && (
                <Table.Row>
                  <Table.Cell>Duracion</Table.Cell>
                  <Table.Cell>{movie.duration}</Table.Cell>
                </Table.Row>
              )}

              <Table.Row>
                <Table.Cell>Categoria</Table.Cell>
                <Table.Cell>{movie.genreId}</Table.Cell>
              </Table.Row>

              {movie.director && (
                <Table.Row>
                  <Table.Cell>Director</Table.Cell>
                  <Table.Cell>{movie.director}</Table.Cell>
                </Table.Row>
              )}

              {movie.idioms && (
                <Table.Row>
                  <Table.Cell>Idiomas</Table.Cell>
                  <Table.Cell>
                    {movie.idioms.map((idiom) => `${idiom}  `)}
                  </Table.Cell>
                </Table.Row>
              )}

              {movie.actors && (
                <Table.Row>
                  <Table.Cell>Actores</Table.Cell>
                  <Table.Cell>{movie.actors}</Table.Cell>
                </Table.Row>
              )}

              {movie.sinopsis && (
                <Table.Row>
                  <Table.Cell>Sinopsis</Table.Cell>
                  <Table.Cell>{movie.sinopsis}</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell />
              </Table.Row>
            </Table.Footer>
          </Table>

          <div style={{ height: "300px" }}></div>
        </>
      )}
    </>
  );
}
