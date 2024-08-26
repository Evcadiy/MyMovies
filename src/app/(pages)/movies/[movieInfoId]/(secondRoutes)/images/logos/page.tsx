import LazyLoadGrid from "@/components/MovieInfoComp/Media/LazyLoadGrid"
import ViewAllHeader from "@/components/MovieInfoComp/Media/ViewAllHeader"
import { TMovieImages } from "@/components/MovieInfoComp/types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { getInfoById } from "@/utils/actions/getInfoById"
import { Box } from "@chakra-ui/react"

const Logos = async ({
	params: { movieInfoId }
}: {
	params: { movieInfoId: string }
}) => {
	const images: TMovieImages = await getInfoById(
		EInfoRoutes.MOVIE,
		movieInfoId,
		EMoviesInfoEndpoints.IMAGES
	)

	const { logos } = images

	return <LazyLoadGrid images={logos} />
}

export default Logos
