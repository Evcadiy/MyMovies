"use client"

import { Flex, Image, Text } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
const CastItem = ({
	name,
	job,
	profile_path
}: {
	name: string
	job: string
	profile_path: string | null
}) => {
	const router = useRouter()

	return (
		<Flex direction={{ base: "column", sm: "row" }} px={2}>
			<Image
				src={
					profile_path
						? `https://image.tmdb.org/t/p/w200${profile_path}`
						: "https://via.placeholder.com/200x300/FFF?text=No%20Image"
				}
				minW={"70px"}
				maxW={"70px"}
				h={"70px"}
				borderRadius={"10px"}
				objectFit={"cover"}
				objectPosition={"center"}
				alt={name}
				cursor={"pointer"}
				onClick={() => router.push("/")}
			/>
			<Flex direction={"column"} justify={"center"} pl={{ base: 0, sm: 5 }}>
				<Text fontWeight={"bold"}>{name}</Text>
				<Text fontWeight={"300"} fontSize={"sm"}>
					{job}
				</Text>
			</Flex>
		</Flex>
	)
}

export default CastItem
