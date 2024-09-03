import { Flex } from "@chakra-ui/react"
import { TCrew, TMovieCast } from "../types"
import CastCrewList from "./CastCrewList"

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
		<Flex maxW={"1200px"} mx={"auto"} p={5} justify={"space-between"}>
			<CastCrewList title="Cast" items={cast} />
			<CastCrewList
				title="Crew"
				items={crew}
				groupedByDepartment={groupedByDepartment}
			/>
		</Flex>
	)
}

export default CastPageContainer
