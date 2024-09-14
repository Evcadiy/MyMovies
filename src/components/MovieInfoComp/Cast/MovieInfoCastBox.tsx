import { VStack, Heading, Divider } from "@chakra-ui/react"
import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { TMovieCast } from "../types"
import { getInfoById } from "@/utils/actions/getInfoById"
import { EInfoRoutes } from "@/enums/infoRoutes"
import CastScrollList from "./CastScrollList"

const MovieInfoCastBox = async ({ id }: { id: number }) => {
	const movieCast: TMovieCast = await getInfoById(
		EInfoRoutes.MOVIE,
		id,
		EMoviesInfoEndpoints.CREDITS
	)

	return (
		<>
			{movieCast.cast.length > 0 && (
				<>
					<VStack
						spacing={4}
						align={{ base: "center", xl: "flex-start" }}
						direction={"column"}
						w={"100%"}
					>
						<Heading w={"100%"} as="h2" size={"md"}>
							Top Billed Cast
						</Heading>
						<CastScrollList movieCast={movieCast} id={id} />
					</VStack>
					<Divider borderColor={"gray.600"} />
				</>
			)}
		</>
	)
}

export default MovieInfoCastBox
