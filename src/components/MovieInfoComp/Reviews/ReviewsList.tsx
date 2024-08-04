import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { TReview } from "../types"
import ReviewListContainer from "./ReviewListContainer"
import { getInfoById } from "@/utils/actions/getInfoById"
import { EInfoRoutes } from "@/enums/infoRoutes"

const ReviewsList = async ({ id }: { id: number }) => {
	const reviewList: TReview = await getInfoById(
		EInfoRoutes.MOVIE,
		id,
		EMoviesInfoEndpoints.REVIEWS
	)

	const reviews = reviewList.results

	return <ReviewListContainer reviews={reviews} />
}

export default ReviewsList
