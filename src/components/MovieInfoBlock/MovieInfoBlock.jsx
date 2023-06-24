import { FilmInfo, LinksList, LinksListEl, StyledNavLink, Wrapper } from "./MovieInfoBlock.styled";
import PropTypes from "prop-types";

export const MovieInfoBlock = ({ info }) => {
    const { poster_path, title, overview, genres, release_date, vote_average } = info;
    const date = release_date.slice(0, release_date.indexOf('-'));
    const score = `${vote_average.toFixed(1) * 10}%`;
    const DEFAULT_FILM_POSTER = "https://media.comicbook.com/files/img/default-movie.png";

    return (
        <article>
            <Wrapper>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : DEFAULT_FILM_POSTER} width={200} alt={`${title} poster`} />
                <FilmInfo>
                    <h2 style={{ marginBottom: "7px" }}>{title} ({date})</h2>
                    <p>User Score: {score}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul style={{ listStyle: "inside disc" }}>
                        {genres.map(({ id, name }) => <li key={id}>{name}</li>)}
                    </ul>
                </FilmInfo>
            </Wrapper>
            <h4>Additional information</h4>
            <LinksList>
                <LinksListEl><StyledNavLink to="cast">Cast</StyledNavLink></LinksListEl>
                <li><StyledNavLink to="reviews">Reviews</StyledNavLink></li>
            </LinksList>
        </article>
    )
};

MovieInfoBlock.propTypes = {
    info: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),),
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
    }).isRequired,
};