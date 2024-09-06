import { Flex } from "@chakra-ui/react"
import { TPerson } from "../PersonPageComp/types"

const PersonList = ({ people }: { people: TPerson[] }) => {
	return (
		<Flex>
			{people.map(person => (
				<div key={person.id}>{person.name}</div>
			))}
		</Flex>
	)
}

export default PersonList
