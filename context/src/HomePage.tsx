import React, { useContext, useEffect, Suspense } from "react";

import { Store } from "./Store";
import { IEpisode, IAction, IEpisodeProps } from "./interface";
import { fetchDataAction, toggleFavAction } from "./Actions";
const EpisodeList = React.lazy(() => import("./EpisodeList"));

const HomePage = () => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    fetchDataAction(dispatch);
    //eslint-disable-next-line
  }, []);

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction: toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </Suspense>
  );
};

export default HomePage;
