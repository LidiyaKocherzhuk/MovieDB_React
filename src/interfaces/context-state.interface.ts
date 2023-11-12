import {IGenre} from "./genre.inteface";

export interface IContextState {
    theme: boolean,
    genresVisibility: boolean,
    posterPath: string,
    genres: IGenre[],
}