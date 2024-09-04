"use client"

import { Colors } from "@/constants/Colors"
import { ERoutes } from "@/enums/routesEn"
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"
import { TMovieCast } from "../types"
import { useRouter } from "next/navigation"

const CastScrollList = ({
	movieCast,
	id
}: {
	movieCast: TMovieCast
	id: number
}) => {
	const router = useRouter()

	const goToPerson = (id: number) => {
		router.push(`${ERoutes.PERSON}/${id}`)
	}

	return (
		<Flex
			w={"100%"}
			overflowX={"scroll"}
			overflowY={"hidden"}
			py={5}
			justify={"flex-start"}
			align={"center"}
			gap={5}
		>
			{movieCast.cast.slice(0, 10).map(actor => (
				<Box
					key={actor.id}
					minW={{ base: "110px", xl: "150px" }}
					maxW={{ base: "130px", xl: "180px" }}
					borderRadius={"10px"}
					_hover={{ cursor: "pointer", color: Colors.gold }}
					onClick={() => goToPerson(actor.id)}
				>
					<Image
						src={
							actor.profile_path
								? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
								: "https://via.placeholder.com/200x300/FFF?text=No%20Image"
						}
						alt={actor.name}
						borderRadius={"10px 10px 0 0"}
						h={{ base: "170px", xl: "225px" }}
					/>
					<Box
						p={2}
						bgColor={Colors.mainRed}
						borderRadius={"0 0 10px 10px"}
						h="80px"
						overflow="hidden"
					>
						<Text fontWeight="bold" fontSize={{ base: "xs", xl: "sm" }}>
							{actor.name}
						</Text>
						<Text fontSize={{ base: "xx-small", xl: "xs" }}>
							{actor.character.split("/")[0]}
						</Text>
					</Box>
				</Box>
			))}
			<Link
				minW={{ base: "110px", xl: "150px" }}
				maxW={{ base: "130px", xl: "180px" }}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={2}
				_hover={{ textDecoration: "none", color: Colors.gold }}
				href={`${ERoutes.MOVIES}/${id}${ERoutes.CAST}`}
				fontSize={{ base: "xs", xl: "sm" }}
			>
				View More
				<FaArrowRight />
			</Link>
		</Flex>
	)
}

export default CastScrollList
