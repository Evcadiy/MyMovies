import MovieList from "./MovieList"
import PaginationControls from "./PaginationControls"
import { TMovie } from "./types"

const MoviesContainer = ({
	movies,
	totalPages
}: {
	movies: TMovie[]
	totalPages: number
}) => {
	return (
		<>
			<MovieList movies={movies} />
			<PaginationControls totalPages={totalPages} />
		</>
	)
}

export default MoviesContainer
