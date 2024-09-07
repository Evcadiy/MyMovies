import { Box, Grid } from "@chakra-ui/react"
import MovieCard from "./MovieCard"
import { TMovie } from "./types"

const MovieList = ({ movies }: { movies: TMovie[] }) => {
	return (
		<Box maxW="1200px" p={5} mt={6}>
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					sm: "repeat(2, 1fr)",
					md: "repeat(3, 1fr)",
					lg: "repeat(4, 1fr)"
				}}
				gap={7}
				p={5}
				justifyItems={"center"}
			>
				{movies.map(movie => (
					<Box key={movie.id} display={"flex"} flexDirection={"column"}>
						<MovieCard movie={movie} />
					</Box>
				))}
			</Grid>
		</Box>
	)
}

export default MovieList
