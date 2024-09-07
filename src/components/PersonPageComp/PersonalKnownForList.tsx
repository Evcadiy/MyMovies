import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { getInfoById } from "@/utils/actions/getInfoById"
import { TMovie } from "../MoviesComp/types"
import RecommendationContainer from "../MovieInfoComp/Recommendations/RecommendationContainer"
import { Box } from "@chakra-ui/react"

const PersonalKnownForList = async ({ id }: { id: number }) => {
	const movieList = await getInfoById(
		EInfoRoutes.PERSON,
		id,
		EMoviesEndpoints.MOVIE_CREDITS
	)
	const movies: TMovie[] = movieList.cast
	return (
		movies && (
			<Box
				mx={"auto"}
				mt={6}
				maxW={{
					base: "300px",
					sm: "380px",
					md: "630px",
					xl: "900px"
				}}
			>
				<RecommendationContainer recommendations={movies} heading="Known for" />
			</Box>
		)
	)
}

export default PersonalKnownForList
