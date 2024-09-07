import { Box, Flex, Text } from "@chakra-ui/react"
import { TPerson } from "./types"

const PersonalInfo = ({ person }: { person: TPerson }) => {
	if (person.birthday === null) return <></>
	const personYear =
		new Date().getFullYear() - Number(person.birthday.slice(0, 4))

	return (
		<Flex mt={6} gap={4} direction={"column"}>
			<Text fontSize={"18px"} fontWeight={"bold"}>
				Personal Info
			</Text>
			{person.known_for_department && (
				<Box>
					<Text fontWeight={"bold"}>Known for</Text>
					<Text>{person.known_for_department}</Text>
				</Box>
			)}
			{person.gender && (
				<Box>
					<Text fontWeight={"bold"}>Gender</Text>
					<Text>
						{person.gender === 2
							? "Male"
							: person.gender === 3
							? "Non-binary"
							: person.gender === 0
							? "Not set / not specified"
							: "Female"}
					</Text>
				</Box>
			)}
			{person.birthday && (
				<Box>
					<Text fontWeight={"bold"}>Birthday</Text>
					<Text>
						{person.birthday.split("-").reverse().join(".") +
							" " +
							`(${personYear} years old)`}
					</Text>
				</Box>
			)}
			{person.place_of_birth && (
				<Box>
					<Text fontWeight={"bold"}>Place of Birth</Text>
					<Text>{person.place_of_birth}</Text>
				</Box>
			)}
			{person.also_known_as.length > 0 && (
				<Box>
					<Text fontWeight={"bold"}>Also known as</Text>
					{person.also_known_as.map(name => (
						<Text key={name} py={1}>
							{name}
						</Text>
					))}
				</Box>
			)}
		</Flex>
	)
}

export default PersonalInfo
