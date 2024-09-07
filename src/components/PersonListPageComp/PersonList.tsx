"use client"

import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { TPerson } from "../PersonPageComp/types"
import { useRouter } from "next/navigation"
import { ERoutes } from "@/enums/routesEn"
import { Colors } from "@/constants/Colors"

const PersonList = ({ people }: { people: TPerson[] }) => {
	const router = useRouter()

	const goToPerson = (id: number) => {
		router.push(`${ERoutes.PERSON}/${id}`)
	}

	return (
		<Box maxW="1400px" m={"0 auto"} pb={12}>
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
					xl: "repeat(4, 1fr)"
				}}
				gap={8}
				p={5}
				justifyItems={"center"}
			>
				{people.map(person => (
					<GridItem
						key={person.id}
						py={6}
						cursor={"pointer"}
						_hover={{
							transform: "scale(1.05)",
							transition: "0.3s ease"
						}}
						_focus={{ transform: "scale(1)" }}
						padding={3}
						boxShadow={"dark-lg"}
						onClick={() => goToPerson(person.id)}
					>
						<Image
							src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
							alt={person.profile_path}
							maxW={{ base: "250px", md: "260px" }}
							maxH={{ base: "350px", md: "400px" }}
						/>
						<Box p={5} bgColor={Colors.mainRed}>
							<Text>{person.name}</Text>
						</Box>
					</GridItem>
				))}
			</Grid>
		</Box>
	)
}

export default PersonList
