import { getTrendingFilms } from "helpers/api";
import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";
import {FilmListEl, StyledNavLink } from "./TrendingFilms.styled";

const ERROR_MSG = "Something went wrong with loading trending films. Try to reload the page!";
const EMPTY_MSG = "There is not any information about trending films...";

export const TrendingFilms = () => {
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getFilms() {
            try {
                setError(null);
                setIsEmpty(false);
                setIsLoading(true);
                const trendingFilms = await getTrendingFilms();
                if (!trendingFilms) {
                    setIsEmpty(true);
                    return;
                }
                setFilms(trendingFilms);
            }
            catch {
                setError(ERROR_MSG);
            }
            finally {
                setIsLoading(false);
            }
        }
        getFilms();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {!isEmpty && <ul>
                {films.map(({ title, id }) => (
                    <FilmListEl key={id}>
                        <StyledNavLink to={`movies/${id}`}>{title}</StyledNavLink>
                    </FilmListEl>))}
            </ul>}
            {isEmpty && <p>{EMPTY_MSG}</p>}
            {isLoading && <Loader />}
         </div>
    ) 
}