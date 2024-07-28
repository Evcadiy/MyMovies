import { Box, Flex } from "@chakra-ui/react"
import MovieInfoCastBox from "./MovieInfoCastBox"
import MovieInfoHeader from "./MovieInfoHeader"

const MovieInfoContainer = ({ id }: { id: number }) => {
	return (
		<>
			<MovieInfoHeader id={id} />
			<Flex
				justify={"center"}
				direction={{ base: "column", xl: "row" }}
				align={{ base: "center", xl: "flex-start" }}
			>
				<Flex direction={"column"} justify={"center"} align={"center"}>
					<MovieInfoCastBox id={id} />
					<Box>Another Info</Box>
					<Box>Another Info</Box>
					<Box>Another Info</Box>
				</Flex>
				<Box w={"20vw"}>Right side Info</Box>
			</Flex>
		</>
	)
}

export default MovieInfoContainer
