import BackgroundImage from "./BackgroundImage"
import { Flex } from "@chakra-ui/react"
import OverviewBox from "./OverviewBox"
import { getMoviesInfoById } from "@/utils/actions/getMoviesInfoById"
import MovieInfoImage from "./MovieInfoImage"
import { TMovieInfo } from "./types"

const MovieInfoHeader = async ({ id }: { id: number }) => {
	const movie: TMovieInfo = await getMoviesInfoById(id)
	return (
		<BackgroundImage backdrop={movie.backdrop_path}>
			<Flex
				maxW={"1400px"}
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
