import { Loader } from "components/Loader/Loader";
import { getReviews } from "helpers/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Review } from "./Reviews.styled";
import { BoldText } from "components/Cast/Cast.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const ERROR_MSG = "Something went wrong with loading reviews. Try to reload the page!";
    const EMPTY_MSG = "There is no reviews about this film...";

    useEffect(() => {
        async function getListOfReviews() {
            try {
                setError(null);
                setIsEmpty(false);
                setIsLoading(true);
                const listOfReviews = await getReviews(movieId);
                if (!listOfReviews.length) {
                    setIsEmpty(true);
                    return;
                }
                setReviews(listOfReviews);
            }
            catch {
                setError(ERROR_MSG);
            }
            finally {
                setIsLoading(false);
            }
        };
        getListOfReviews();
    }, [movieId]);
       
    return (
        <div>
            {!isEmpty &&
                <ul>
                    {reviews.map(({ author, content, created_at }) => (
                        <Review key={created_at}>
                            <p><BoldText>Author:</BoldText> {author}</p>
                            <p>{content}</p>
                        </Review>
                    ))}
                </ul>
            }
            {isEmpty && <p>{EMPTY_MSG}</p>}
            {error && <p>{error}</p>}
            {isLoading && <Loader />}
        </div>
    );
};

export default Reviews;