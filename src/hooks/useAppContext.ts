import {useContext} from "react";

import {Context} from "../hoc";
import {IContextState, IGenre, IUseContext} from "../interfaces";

const useAppContext = (): IUseContext => {
    const [state, setState] = useContext(Context);

    return {
        theme: state.theme,
        setTheme: () => setState((prev: IContextState) => ({...prev, theme: !prev.theme})),

        genresVisibility: state.genresVisibility,
        setGenresVisibility: () => setState((prev: IContextState) => (
            {
                ...prev,
                genresVisibility: !prev.genresVisibility,
            }
        )),

        posterPath: state.posterPath,
        setPosterPath: (value: string) => setState((prev: IContextState) => (
            {
                ...prev,
                posterPath: `https://image.tmdb.org/t/p/w500/${value}`
            }
        )),

        genres: state.genres,
        setGenres: (value: IGenre[]) => setState((prev: IContextState) => (
            {
                ...prev,
                genres: value,
            }
        )),
    };
};

export {useAppContext};

