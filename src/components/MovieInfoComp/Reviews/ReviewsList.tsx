import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { TReview } from "../types"
import ReviewListContainer from "./ReviewListContainer"
import { getInfoById } from "@/utils/actions/getInfoById"
import { EInfoRoutes } from "@/enums/infoRoutes"

const ReviewsList = async ({ id }: { id: number }) => {
	const reviews: TReview = await getInfoById(
		EInfoRoutes.MOVIE,
		id,
		EMoviesInfoEndpoints.REVIEWS
	)

	const reviewList = reviews.results

	return <ReviewListContainer reviews={reviewList} />
}

export default ReviewsList
