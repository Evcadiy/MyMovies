import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { getMoviesInfoById } from "@/utils/actions/getMoviesInfoById"
import { Flex, Text } from "@chakra-ui/react"
import { TReview } from "./types"
import ReviewListContainer from "./ReviewListContainer"

const ReviewsList = async ({ id }: { id: number }) => {
	const reviews: TReview = await getMoviesInfoById(
		id,
		EMoviesInfoEndpoints.REVIEWS
	)

	const reviewList = reviews.results

	return (
		<Flex direction={"column"} gap={2} w={"100%"}>
			<ReviewListContainer reviews={reviewList} />
		</Flex>
	)
}

export default ReviewsList
