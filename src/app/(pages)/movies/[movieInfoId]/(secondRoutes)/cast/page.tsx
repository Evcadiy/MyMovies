import CastPageContainer from "@/components/MovieInfoComp/Cast/CastPageContainer"
import { TMovieCast } from "@/components/MovieInfoComp/types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { getInfoById } from "@/utils/actions/getInfoById"

const CastPage = async ({
	params: { movieInfoId }
}: {
	params: { movieInfoId: string }
}) => {
	const movieCast: TMovieCast = await getInfoById(
		EInfoRoutes.MOVIE,
		movieInfoId,
		EMoviesInfoEndpoints.CREDITS
	)

	return <CastPageContainer movieCast={movieCast} />
}

export default CastPage
