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
					direction={{ base: "column", xl: "row" }}
					align={{ base: "center", xl: "flex-start" }}
					maxW={"1500px"}
					mx="auto"
				>
					<Flex
						direction={"column"}
						maxW={{
							base: "320px",
							sm: "480px",
							md: "750px",
							lg: "900px",
							xl: "1100px"
						}}
						py={{ base: 5, lg: 10 }}
						px={{ base: 5, xl: 12 }}
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
