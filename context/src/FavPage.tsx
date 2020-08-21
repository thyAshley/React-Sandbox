import React, { Suspense, useContext } from "react";

import { Store } from "./Store";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interface";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

const FavPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    toggleFavAction,
    favourites: state.favourites,
    store: { state, dispatch },
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </Suspense>
  );
};

export default FavPage;
