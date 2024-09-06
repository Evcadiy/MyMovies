import { Box, Text } from "@chakra-ui/react"
import ReadMoreText from "./ReadMoreText"

const PersonalBio = ({
	name,
	biography
}: {
	name: string
	biography: string
}) => {
	return (
		<Box minW={{ base: "", xl: "920px" }}>
			<Text fontSize={"32px"} fontWeight={"bold"} mb={4}>
				{name}
			</Text>
			<Text fontSize={"18px"} fontWeight={"bold"}>
				Biography
			</Text>
			{biography ? (
				<ReadMoreText text={biography} />
			) : (
				<Text>We dont have a biography for Jesús Evita.</Text>
			)}
		</Box>
	)
}

export default PersonalBio
