import { render } from "@testing-library/react";
import Movie from "../Components/Movie";

describe('Movie Component', () => {

    test('renders learn react link', () => {
        const movieData = {
            "adult": false,
            "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 238,
            "original_language": "en",
            "original_title": "The Godfather",
            "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "popularity": 102.359,
            "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            "release_date": "1972-03-14",
            "title": "The Godfather",
            "video": false,
            "vote_average": 8.7,
            "vote_count": 17665
        };
        const { asFragment } = render(<Movie movie={movieData} />);
        expect(asFragment()).toMatchSnapshot();
    })
})