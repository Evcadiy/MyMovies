import MoviesContainer from "@/components/MoviesComp/MoviesContainer"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { getInfo } from "@/utils/actions/getInfo"
import { Box, Text } from "@chakra-ui/react"

const Movies = async ({
	searchParams
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) => {
	const page = searchParams["page"] ?? 1
	const movieList = await getInfo(
		EInfoRoutes.MOVIE,
		EMoviesEndpoints.POPULAR,
		page
	)

	const movies = movieList.results
	const totalPages = movieList.total_pages
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Text fontSize={"3xl"} fontWeight={"bold"} paddingTop={5}>
				MyMovies
			</Text>
			<MoviesContainer movies={movies} totalPages={totalPages} />
		</Box>
	)
}

export default Movies
