import ErrorSearch from "@/components/MoviesComp/Header/ErrorSearch"
import Header from "@/components/MoviesComp/Header/Header"
import MoviesContainer from "@/components/MoviesComp/MoviesContainer"
import { Colors } from "@/constants/Colors"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { ERoutes } from "@/enums/routesEn"
import { getInfo } from "@/utils/actions/getInfo"
import { getInfoBySearch } from "@/utils/actions/getInfoBySeacrh"
import { Box, Link, Text } from "@chakra-ui/react"

const Movies = async ({
	searchParams
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) => {
	const page = (searchParams["page"] ?? 1).toString()
	const query = (searchParams["query"] ?? "").toString()
	const category = (searchParams["category"] ?? "popular").toString()
	let endpoint: EMoviesEndpoints
	switch (category) {
		case "now_playing":
			endpoint = EMoviesEndpoints.NOW_PLAYING
			break
		case "upcoming":
			endpoint = EMoviesEndpoints.UPCOMING
			break
		case "top_rated":
			endpoint = EMoviesEndpoints.TOP_RATED
			break
		default:
			endpoint = EMoviesEndpoints.POPULAR
	}

	const movieList = query
		? await getInfoBySearch(EInfoRoutes.MOVIE, query, page)
		: await getInfo(EInfoRoutes.MOVIE, endpoint, page)

	const movies = movieList.results
	const totalPages = movieList.total_pages

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			{movies.length === 0 ? (
				<ErrorSearch route={ERoutes.MOVIES} title={"movies"} />
			) : (
				<MoviesContainer movies={movies} totalPages={totalPages} />
			)}
		</Box>
	)
}

export default Movies
