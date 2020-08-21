import React, { useContext, Fragment, useEffect, useCallback } from "react";
import { Store } from "./Store";

interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

const App = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = useCallback(async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({ type: "FETCH", payload: dataJSON._embedded.episodes });
  }, [dispatch]);

  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);

  console.log(state);

  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode</p>
      <section>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id}>
              <img
                src={episode.image.medium}
                alt={`Rick and Mort ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          );
        })}
      </section>
    </Fragment>
  );
};

export default App;
