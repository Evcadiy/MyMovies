import { Box, Flex } from "@chakra-ui/react"
import MovieInfoHeader from "./MovieInfoHeader"
import MovieInfoCastBox from "./Cast/MovieInfoCastBox"
import ReviewsList from "./Reviews/ReviewsList"
import MediaBox from "./Media/MediaBox"
import RecommendationsBox from "./Recommendations/RecommendationsBox"
import RightSideInfoComp from "./RightSideInfo/RightSideInfoComp"

const MovieInfoContainer = ({ id }: { id: number }) => {
	return (
		<>
			<MovieInfoHeader id={id} />
			<Box w={"100vw"}>
				<Flex
					pb={10}
					direction={{ base: "column", xl: "row" }}
					align={{ base: "center", xl: "flex-start" }}
					maxW={"1300px"}
					mx="auto"
				>
					<Flex
						direction={"column"}
						minW={{ base: "100%", xl: "1000px" }}
						maxW={{ base: "100%", xl: "1000px" }}
						py={{ base: 5, lg: 10 }}
						px={{ base: 4, xl: 12 }}
						gap={7}
					>
						<MovieInfoCastBox id={id} />
						<ReviewsList id={id} />
						<MediaBox id={id} />
						<RecommendationsBox id={id} />
					</Flex>
					<RightSideInfoComp id={id} />
				</Flex>
			</Box>
		</>
	)
}

export default MovieInfoContainer
