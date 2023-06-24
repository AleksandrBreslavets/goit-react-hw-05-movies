import { Loader } from "components/Loader/Loader";
import { getCast } from "helpers/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActorCard, ActorImg, ActorInfo, ActorName, BoldText, CastList} from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const DEFAULT_ACTOR_IMG = "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg";
    const ERROR_MSG = "Something went wrong with loading a cast. Try to reload the page!";
    const EMPTY_MSG = "There is not information about actors...";

    useEffect(() => {
        async function getListOfActors() {
            try {
                setError(null);
                setIsEmpty(false);
                setIsLoading(true);
                const listOfReviews = await getCast(movieId);
                if (!listOfReviews.length) {
                    setIsEmpty(true);
                    return;
                }
                setCast(listOfReviews);
            }
            catch {
                setError(ERROR_MSG);
            }
            finally {
                setIsLoading(false);
            }

        };
        getListOfActors();
    }, [movieId]);

    return (
        <div>
            {!isEmpty &&
                <CastList>
                    {cast.map(({ name, character, cast_id, profile_path }) => (
                        <ActorCard key={cast_id}>
                            <ActorImg src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : DEFAULT_ACTOR_IMG} alt={`${name}'s avatar`} />
                            <ActorInfo>
                                <ActorName>{name}</ActorName>
                                <p><BoldText>Character:</BoldText> {character}</p>
                            </ActorInfo>
                        </ActorCard>
                    ))}
                </CastList>
            }
            {isEmpty && <p>{EMPTY_MSG}</p>}
            {error && <p>{error}</p>}
            {isLoading && <Loader />}
        </div>
    );
};

export default Cast;