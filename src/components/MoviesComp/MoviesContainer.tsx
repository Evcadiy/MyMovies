import { TMovie } from "@/types/AllFilmsTypes/types"
import MovieList from "./MovieList"
import PaginationControls from "./PaginationControls"

const MoviesContainer = ({ movies }: { movies: TMovie[] }) => {
	return (
		<>
			<MovieList movies={movies} />
			<PaginationControls />
		</>
	)
}

export default MoviesContainer
