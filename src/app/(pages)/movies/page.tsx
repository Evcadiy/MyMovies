import Search from "@/components/MoviesComp/Header/Search"
import MoviesContainer from "@/components/MoviesComp/MoviesContainer"
import { Colors } from "@/constants/Colors"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { ERoutes } from "@/enums/routesEn"
import { getInfo } from "@/utils/actions/getInfo"
import { getInfoBySearch } from "@/utils/actions/getInfoBySeacrh"
import { Box, Button, Link, Text } from "@chakra-ui/react"

const Movies = async ({
	searchParams
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) => {
	const page = (searchParams["page"] ?? 1).toString()
	const query = (searchParams["query"] ?? "").toString()
	const movieList = query
		? await getInfoBySearch(EInfoRoutes.MOVIE, query, page)
		: await getInfo(EInfoRoutes.MOVIE, EMoviesEndpoints.POPULAR, page)

	const movies = movieList.results
	const totalPages = movieList.total_pages
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
		>
			<Search />
			{movieList.results.length === 0 ? (
				<>
					<Text mt={5}>There are no movies that matched your query.</Text>
					<Link color={Colors.gold} href={ERoutes.MOVIES} mt={5}>
						Go back
					</Link>
				</>
			) : (
				<MoviesContainer movies={movies} totalPages={totalPages} />
			)}
		</Box>
	)
}

export default Movies
