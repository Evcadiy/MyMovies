import { EInfoRoutes } from "@/enums/infoRoutes"
import { getInfoById } from "@/utils/actions/getInfoById"

const ReviewPage = async ({ params }: { params: { reviewId: string } }) => {
	const reviewId = params.reviewId
	console.log(reviewId)
	const review = await getInfoById(EInfoRoutes.REVIEW, reviewId)
	return <div>page</div>
}

export default ReviewPage
