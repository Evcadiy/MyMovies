import { Box, Image, Text, VStack, Heading, Flex, Link } from "@chakra-ui/react"
import { EMoviesInfoEndpoints } from "@/enums/moviesInfoEndPoints"
import { Colors } from "@/constants/Colors"
import { FaArrowRight } from "react-icons/fa"
import { ERoutes } from "@/enums/routesEn"
import { TMovieCast } from "../types"
import { getInfoById } from "@/utils/actions/getInfoById"
import { EInfoRoutes } from "@/enums/infoRoutes"

const MovieInfoCastBox = async ({ id }: { id: number }) => {
	const movieCast: TMovieCast = await getInfoById(
		EInfoRoutes.MOVIE,
		id,
		EMoviesInfoEndpoints.CREDITS
	)

	return (
		<VStack
			spacing={4}
			align={{ base: "center", xl: "flex-start" }}
			direction={"column"}
			w={"100%"}
		>
			<Heading w={"100%"} as="h2" size={"md"}>
				Top Billed Cast
			</Heading>
			<Flex
				w={"100%"}
				overflowX={"scroll"}
				overflowY={"hidden"}
				py={5}
				justify={"flex-start"}
				align={"center"}
				gap={5}
			>
				{movieCast.cast.slice(0, 10).map(actor => (
					<Box
						key={actor.id}
						minW={{ base: "110px", xl: "150px" }}
						maxW={{ base: "130px", xl: "180px" }}
						borderRadius={"10px"}
					>
						<Image
							src={
								actor.profile_path
									? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
									: "https://via.placeholder.com/200x300/FFF?text=No%20Image"
							}
							alt={actor.name}
							borderRadius={"10px 10px 0 0"}
							h={{ base: "170px", xl: "225px" }}
						/>
						<Box
							p={2}
							bgColor={Colors.mainRed}
							borderRadius={"0 0 10px 10px"}
							h="80px"
							overflow="hidden"
						>
							<Text fontWeight="bold" fontSize={{ base: "xs", xl: "sm" }}>
								{actor.name}
							</Text>
							<Text fontSize={{ base: "xx-small", xl: "xs" }}>
								{actor.character.split("/")[0]}
							</Text>
						</Box>
					</Box>
				))}
				<Link
					minW={{ base: "110px", xl: "150px" }}
					maxW={{ base: "130px", xl: "180px" }}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					gap={2}
					_hover={{ textDecoration: "none", color: Colors.gold }}
					href={`${ERoutes.MOVIES}/${id}${ERoutes.CAST}`}
					fontSize={{ base: "xs", xl: "sm" }}
				>
					View More
					<FaArrowRight />
				</Link>
			</Flex>
		</VStack>
	)
}

export default MovieInfoCastBox
