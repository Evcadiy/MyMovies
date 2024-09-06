import MovieInfoContainer from "@/components/MovieInfoComp/MovieInfoContainer"

const MovieInfo = ({ params }: { params: { movieInfoId: string } }) => {
	const movieInfoId = params.movieInfoId
	const id = Number(movieInfoId)

	return <MovieInfoContainer id={id} />
}

export default MovieInfo
