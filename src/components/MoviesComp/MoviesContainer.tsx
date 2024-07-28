import MovieList from "./MovieList"
import PaginationControls from "./PaginationControls"
import { TMovie } from "./types"

const MoviesContainer = ({ movies }: { movies: TMovie[] }) => {
	return (
		<>
			<MovieList movies={movies} />
			<PaginationControls />
		</>
	)
}

export default MoviesContainer
