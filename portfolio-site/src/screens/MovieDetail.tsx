import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Award from "../components/Award";
import { MovieState, IMovieState } from "../data/movieData";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState<IMovieState[]>(MovieState);
  const [movie, setMovie] = useState<IMovieState | null>(null);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url)[0];
    setMovie(currentMovie);
  }, [movies, setMovie, url]);

  return (
    <Fragment>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Details>
      )}
    </Fragment>
  );
};

const Details = styled.div`
  color: white;
`;

const HeadLine = styled.div`
  display: flex;
  justify-content: center;
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    transform: translate(-50% -10%);
  }

  img {
    height: 70vh;
    max-width: 1200px;
    object-fit: cover;
    width: 100%;
  }
`;

const Awards = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 5rem 10rem;
  min-height: 80vh;
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    height: 100vh;
    object-fit: cover;
    width: 100%;
  }
`;
export default MovieDetail;
