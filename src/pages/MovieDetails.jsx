import { Loader } from "components/Loader/Loader";
import { MovieInfoBlock } from "components/MovieInfoBlock/MovieInfoBlock";
import { getMovieInfo } from "helpers/api";
import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Outlet, useLocation, Navigate, } from "react-router-dom"
import { StyledNavLink } from "./MovieDetails.styled";

const ERROR_MSG = "Something went wrong with loading movie details. Try to reload the page!";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [isLoading, setIsLoding] = useState(false);
    const [isResponseOk, setIsResponseOk] = useState(true);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? "/");

    useEffect(() => {
        async function getInfo() {
            try {
                setIsLoding(true);
                const info = await getMovieInfo(movieId);
                setMovieInfo(info);
                setIsResponseOk(true);
            }
            catch {
                console.log(ERROR_MSG);
                setIsResponseOk(false);
            }
            finally {
                setIsLoding(false);
            }
        };
        getInfo();
    }, [movieId])

    if (!isResponseOk) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <StyledNavLink to={backLinkRef.current}>⇐ Back to movies</StyledNavLink>
            {movieInfo && <MovieInfoBlock info={movieInfo} />}

            {isLoading && <Loader />}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            
        </div>
    );
};

export default MovieDetails;