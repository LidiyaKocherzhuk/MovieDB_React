import React, {FC, PropsWithChildren} from 'react';

import {PosterPreview} from "../components";

interface IProps extends PropsWithChildren {
}

const MoviesHomePage: FC<IProps> = () => {

    return (
        <div>
            <PosterPreview/>
        </div>
    );
};

export {MoviesHomePage};