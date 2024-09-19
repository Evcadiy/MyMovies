import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { getInfoById } from "@/utils/actions/getInfoById"
import { TMovie } from "../MoviesComp/types"
import RecommendationContainer from "../MovieInfoComp/Recommendations/RecommendationContainer"

const PersonalKnownForList = async ({ id }: { id: number }) => {
	const movieList = await getInfoById(
		EInfoRoutes.PERSON,
		id,
		EMoviesEndpoints.MOVIE_CREDITS
	)
	const movies: TMovie[] = movieList.cast
	return (
		movies && (
			<RecommendationContainer recommendations={movies} heading="Known for" />
		)
	)
}

export default PersonalKnownForList
