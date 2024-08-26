import { Box, Flex, Text } from "@chakra-ui/react"
import { TKeyword, TMovieInfo } from "../types"

const RightSideInfoContainer = ({
	movieInfo,
	keywords
}: {
	movieInfo: TMovieInfo
	keywords: TKeyword[]
}) => {
	const { status, original_language, budget, revenue, runtime } = movieInfo

	const runTime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`

	const budgetFormatted = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(budget)

	const revenueFormatted = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(revenue)

	return (
		<Flex
			pr={{ base: 0, sm: 10 }}
			w={{ base: "280px", sm: "400px" }}
			pt={10}
			direction={"column"}
			gap={5}
		>
			<Box>
				<Text fontWeight={"bold"}>Status</Text>
				<Text>{status}</Text>
			</Box>
			<Box>
				<Text fontWeight={"bold"}>Original Language</Text>
				<Text>{original_language}</Text>
			</Box>
			<Box>
				<Text fontWeight={"bold"}>Runtime</Text>
				<Text>{runTime}</Text>
			</Box>
			<Box>
				<Text fontWeight={"bold"}>Budget</Text>
				<Text>{budgetFormatted}</Text>
			</Box>
			<Box>
				<Text fontWeight={"bold"}>Revenue</Text>
				<Text>{revenueFormatted}</Text>
			</Box>
			<Text fontSize={"lg"} fontWeight={"bold"}>
				Keywords
			</Text>
			<Flex maxW={"100%"} flexWrap={"wrap"} gap={3}>
				{keywords.map((keyword: TKeyword) => (
					<Text
						fontSize={"sm"}
						border={"1px solid"}
						rounded={"md"}
						p={2}
						key={keyword.id}
					>
						{keyword.name}
					</Text>
				))}
			</Flex>
		</Flex>
	)
}

export default RightSideInfoContainer
