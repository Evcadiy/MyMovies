import BackgroundImage from "./BackgroundImage"
import { Flex } from "@chakra-ui/react"
import OverviewBox from "./OverviewBox"
import MovieInfoImage from "./MovieInfoImage"
import { TMovieInfo } from "./types"
import { getInfoById } from "@/utils/actions/getInfoById"
import { EInfoRoutes } from "@/enums/infoRoutes"

const MovieInfoHeader = async ({ id }: { id: number }) => {
	const movie: TMovieInfo = await getInfoById(EInfoRoutes.MOVIE, id)
	return (
		<BackgroundImage backdrop={movie.backdrop_path}>
			<Flex
				maxW={{ base: "100%", xl: "1200px" }}
				minW={{ base: "100%", xl: "1200px" }}
				height="100%"
				position="relative"
				zIndex={1}
				direction={{ base: "column", lg: "row" }}
				align={"center"}
			>
				<MovieInfoImage title={movie.title} poster_path={movie.poster_path} />
				<OverviewBox movie={movie} />
			</Flex>
		</BackgroundImage>
	)
}

export default MovieInfoHeader
