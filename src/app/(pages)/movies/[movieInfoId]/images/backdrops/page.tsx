import LazyLoadGrid from "@/components/MovieInfoComp/Media/LazyLoadGrid"
import ViewAllHeader from "@/components/MovieInfoComp/Media/ViewAllHeader"
import { TMovieImages } from "@/components/MovieInfoComp/types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { getInfoById } from "@/utils/actions/getInfoById"
import { Box } from "@chakra-ui/react"

const Backdrops = async ({
	params: { movieInfoId }
}: {
	params: { movieInfoId: string }
}) => {
	const movie = await getInfoById(EInfoRoutes.MOVIE, movieInfoId)

	const images: TMovieImages = await getInfoById(
		EInfoRoutes.MOVIE,
		movieInfoId,
		EMoviesInfoEndpoints.IMAGES
	)

	const { backdrops } = images

	return (
		<Box py={5}>
			<ViewAllHeader movie={movie} />
			<LazyLoadGrid images={backdrops} />
		</Box>
	)
}

export default Backdrops
