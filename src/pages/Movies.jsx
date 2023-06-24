import { getFilmsByQuery } from "helpers/api";
import { useEffect, useRef, useState } from "react"
import { useSearchParams, useLocation } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from "components/Loader/Loader";
import { Container, FilmListEl, StyledNavLink } from "components/TrendingFilms/TrendingFilms.styled";
import { Button, Input, SearchForm } from "./Movies.styled";

const ERROR_MSG = "Something went wrong with loading films by your query. Try to reload the page!";
const EMPTY_MSG = "No films found by your query...";

const Movies = () => {
    const [searchedFilms, setSearchedFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const query = searchParams.get('movieName') ?? "";
    const abortCtrl = useRef();

    useEffect(() => {    
        if (!query.trim()) return;
        async function getFilms() {            
            try {
                if (abortCtrl.current) {
                abortCtrl.current.abort();
                }
                abortCtrl.current = new AbortController();
                setIsLoading(true);
                const searchedByQueryFilms = await getFilmsByQuery(query);
                if (!searchedByQueryFilms.length) {
                    setIsEmpty(true);
                    return;
                }
                setSearchedFilms(searchedByQueryFilms);
            }
            catch {
                setError(ERROR_MSG);
            }
            finally {
                setIsLoading(false);
            }
        };
        getFilms();
    }, [query]);

    const onSearch = (e) => {
        e.preventDefault();
        setError(null);
        setIsEmpty(false);
        
        const form = e.currentTarget;
        const movieName = form.elements.query.value.trim();
        if (!movieName.trim()) return toast.error("Please, enter the name of film.");
        const nextQuery = movieName? { movieName } : {};
        setSearchParams(nextQuery);
        form.reset();
    };

    return (
        <div>
            <SearchForm onSubmit={onSearch}>
                <Input type="text" name="query" autoComplete="off" placeholder="Enter the name of a film" />
                <Button type="submit">Search</Button>
            </SearchForm>
            {isEmpty && <p>{EMPTY_MSG}</p>}
            {error && <p>{error}</p>}
            {!isEmpty &&
                <ul>
                    {searchedFilms.map(({ title, id }) => (
                        <FilmListEl key={id}>
                            <StyledNavLink to={`${id}`} state={{from:location}}>{title}</StyledNavLink>
                        </FilmListEl>))}
                </ul>}
            {isLoading && <Loader />}
            <Toaster
                position="top-right"
                toastOptions={{ duration: 2000 }} />
        </div>
    )
};

export default Movies;