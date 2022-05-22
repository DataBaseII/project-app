import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/Navbar";
import { getMovie } from "services/movies";
import { Image } from "semantic-ui-react";
import DefaultImage from "assets/default_image.png";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie(id).then(({ data }) => setMovie(data));
  }, [id]);
  return (
    <>
      <Navbar />
      <div>{movie.name}</div>
      <div style={{ height: "100%", width: "100%" }}>
        <Image
          src={movie.imageBG ? movie.imageBG : DefaultImage}
          style={{width:'100%'}}
        ></Image>
      </div>
    </>
  );
}
