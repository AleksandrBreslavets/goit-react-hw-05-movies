import { Loader } from "components/Loader/Loader";
import { MovieInfoBlock } from "components/MovieInfoBlock/MovieInfoBlock";
import { getMovieInfo } from "helpers/api";
import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Outlet, useLocation} from "react-router-dom"
import { StyledNavLink } from "./MovieDetails.styled";

const ERROR_MSG = "Something went wrong with loading movie details. Try to reload the page!";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoding] = useState(false);
    const backLinkRef = useRef(useLocation().state?.from ?? "/");

    useEffect(() => {
        async function getInfo() {
            try {
                setError(null);
                setIsLoding(true);
                const info = await getMovieInfo(movieId);
                setMovieInfo(info);
            }
            catch {
                setError(ERROR_MSG);
            }
            finally {
                setIsLoding(false);
            }
        };
        getInfo();
    }, [movieId])

    return (
        <div>
            <StyledNavLink to={backLinkRef.current}>⇐ Back to movies</StyledNavLink>
            {movieInfo && <MovieInfoBlock info={movieInfo} />}
            {error && <p>{error}</p>}
            {isLoading && <Loader />}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            
        </div>
    );
};

export default MovieDetails;