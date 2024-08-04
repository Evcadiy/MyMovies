import { Box, Flex } from "@chakra-ui/react"
import MovieInfoHeader from "./MovieInfoHeader"
import MovieInfoCastBox from "./Cast/MovieInfoCastBox"
import ReviewsList from "./Reviews/ReviewsList"
import MediaBox from "./Media/MediaBox"
import RecommendationsBox from "./Recommendations/RecommendationsBox"

const MovieInfoContainer = ({ id }: { id: number }) => {
	return (
		<>
			<MovieInfoHeader id={id} />
			<Flex direction={"column"} align={"center"} p={5}>
				<Flex
					justify={"center"}
					direction={{ base: "column", xl: "row" }}
					align={{ base: "center", xl: "flex-start" }}
					maxW={"1400px"}
				>
					<Flex
						direction={"column"}
						align={"center"}
						maxW={{
							base: "320px",
							sm: "480px",
							md: "750px",
							lg: "900px",
							xl: "1100px"
						}}
						py={{ base: 5, lg: 10 }}
						px={{ base: 5, xl: 20 }}
						gap={7}
					>
						<MovieInfoCastBox id={id} />
						<ReviewsList id={id} />
						<MediaBox id={id} />
						<RecommendationsBox id={id} />
					</Flex>
					<Box w={"20vw"}>Right side Info</Box>
				</Flex>
			</Flex>
		</>
	)
}

export default MovieInfoContainer
