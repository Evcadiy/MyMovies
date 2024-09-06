import { Flex, Text } from "@chakra-ui/react"
import { TActor, TCrew } from "../types"
import CastItem from "./CastItem"

type CastCrewListProps = {
	title: string
	items: TActor[] | TCrew[]
	groupedByDepartment?: Record<string, any[]>
}

const CastCrewList: React.FC<CastCrewListProps> = ({
	title,
	items,
	groupedByDepartment
}) => {
	return (
		<Flex direction={"column"} gap={2}>
			<Flex fontSize={"xl"} gap={2} mb={title === "Cast" ? 4 : 0}>
				<Text>{title}</Text>
				<Text>{items.length}</Text>
			</Flex>
			{groupedByDepartment ? (
				Object.keys(groupedByDepartment).map(department => (
					<div key={department}>
						<Text mt={10} mb={2}>
							{department}
						</Text>
						<Flex direction={"column"} gap={4}>
							{groupedByDepartment[department].map((member, index) => (
								<CastItem key={`${member.id}-${index}`} {...member} />
							))}
						</Flex>
					</div>
				))
			) : (
				<Flex direction={"column"} gap={4}>
					{items.map(actor => (
						<CastItem
							key={actor.id}
							job={"character" in actor ? actor.character : ""}
							{...actor}
						/>
					))}
				</Flex>
			)}
		</Flex>
	)
}

export default CastCrewList
