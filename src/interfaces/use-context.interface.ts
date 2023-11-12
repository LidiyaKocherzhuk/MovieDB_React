import {IGenre} from "./genre.inteface";

export interface IUseContext {
    theme: boolean,
    setTheme: () => void,
    genresVisibility: boolean
    setGenresVisibility: () => void,
    posterPath: string,
    setPosterPath: (value: string) => void,
    genres: IGenre[],
    setGenres: (value: IGenre[]) => void,
}