import { getInfoById } from "@/utils/actions/getInfoById"

const ReviewPage = async ({ params }: { params: { reviewId: string } }) => {
	const reviewId = Number(params.reviewId)
	// const review = await getInfoById(reviewId, EMoviesInfoEndpoints.REVIEWS)
	return <div>page</div>
}

export default ReviewPage
