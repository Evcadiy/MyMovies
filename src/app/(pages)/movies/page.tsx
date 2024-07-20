import MoviesContainer from "@/components/MoviesComp/MoviesContainer"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { getMovies } from "@/utils/actions/getMovies"
import { Box, Text } from "@chakra-ui/react"

const Movies = async ({
	searchParams
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) => {
	const page = searchParams["page"] ?? 1

	const movies = await getMovies(EMoviesEndpoints.POPULAR, page)

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
			<MoviesContainer movies={movies} />
		</Box>
	)
}

export default Movies
