import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { getMoviesInfoById } from "@/utils/actions/getMoviesInfoById"
import { Text } from "@chakra-ui/react"

const ReviewsList = async ({ id }: { id: number }) => {
	const reviews = await getMoviesInfoById(id, EMoviesInfoEndpoints.REVIEWS)

	return (
		<>
			<Text>Reviews {reviews.results.length}</Text>
		</>
	)
}

export default ReviewsList
