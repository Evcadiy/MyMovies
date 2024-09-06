import { getInfoById } from "@/utils/actions/getInfoById"
import { TMovieImages } from "../types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import MediaBoxContainer from "./MediaBoxContainer"

const MediaBox = async ({ id: movieId }: { id: number }) => {
	const movieImages: TMovieImages = await getInfoById(
		EInfoRoutes.MOVIE,
		movieId,
		EMoviesInfoEndpoints.IMAGES
	)

	return <MediaBoxContainer movieImages={movieImages} id={movieId} />
}

export default MediaBox
