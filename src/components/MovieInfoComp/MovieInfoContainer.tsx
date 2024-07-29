import { Box, Divider, Flex } from "@chakra-ui/react"
import MovieInfoCastBox from "./MovieInfoCastBox"
import MovieInfoHeader from "./MovieInfoHeader"
import ReviewsList from "./ReviewsList"

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
						maxW={"1100px"}
						py={{ base: 5, lg: 10 }}
						px={{ base: 5, xl: 20 }}
						gap={7}
					>
						<MovieInfoCastBox id={id} />
						<ReviewsList id={id} />
					</Flex>
					<Box w={"100vw"}>Right side Info</Box>
				</Flex>
			</Flex>
		</>
	)
}

export default MovieInfoContainer
