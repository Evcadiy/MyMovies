import { Box, Flex, Text } from "@chakra-ui/react"
import { TCrew, TMovieCast } from "../types"
import CastItem from "./CastItem"

const CastPageContainer = ({ movieCast }: { movieCast: TMovieCast }) => {
	const { cast, crew } = movieCast

	const groupedByDepartment = crew.reduce<Record<string, TCrew[]>>(
		(acc, member) => {
			const { department } = member
			if (!acc[department]) {
				acc[department] = []
			}
			acc[department].push(member)
			return acc
		},
		{}
	)
	return (
		<Box w={"100vw"}>
			<Flex maxW={"1200px"} mx={"auto"} p={5} justify={"space-between"}>
				<Flex direction={"column"} gap={2}>
					<Flex fontSize={"xl"} gap={2}>
						<Text mb={2}>Cast</Text>
						<Text>{cast.length}</Text>
					</Flex>
					<Flex direction={"column"} gap={4}>
						{cast.map(actor => (
							<CastItem key={actor.id} job={actor.character} {...actor} />
						))}
					</Flex>
				</Flex>
				<Flex direction={"column"} gap={2}>
					<Flex fontSize={"xl"} gap={2}>
						<Text>Crew</Text>
						<Text>{crew.length}</Text>
					</Flex>
					{Object.keys(groupedByDepartment).map(department => (
						<div key={department}>
							<Text mt={10} mb={2}>
								{department}
							</Text>
							<Flex direction={"column"} gap={4}>
								{groupedByDepartment[department].map(member => (
									<CastItem key={member.id} {...member} />
								))}
							</Flex>
						</div>
					))}
				</Flex>
			</Flex>
		</Box>
	)
}

export default CastPageContainer
