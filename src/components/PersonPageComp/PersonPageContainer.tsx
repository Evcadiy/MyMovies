import { Box, Flex } from "@chakra-ui/react"
import PersonalInfo from "./PersonalInfo"
import MovieInfoImage from "../MovieInfoComp/MovieInfoImage"
import PersonalBio from "./PersonalBio"
import { TPerson } from "./types"
import PersonalKnownForList from "./PersonalKnownForList"

const PersonPageContainer = ({ person }: { person: TPerson }) => {
	return (
		<Flex
			maxW={"1400px"}
			mx={"auto"}
			p={10}
			gap={10}
			h={"100%"}
			wrap={{ base: "wrap", lg: "nowrap" }}
			justify={"center"}
		>
			<Box>
				<Flex
					maxW={{ base: "full", lg: "300px" }}
					maxH={"90%"}
					justify={"center"}
				>
					<MovieInfoImage
						title={person.name}
						poster_path={person.profile_path}
					/>
				</Flex>
				<PersonalInfo person={person} />
			</Box>
			<PersonalBio name={person.name} biography={person.biography} />
			<PersonalKnownForList id={person.id} />
		</Flex>
	)
}

export default PersonPageContainer
