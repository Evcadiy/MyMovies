"use client"

import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import { TMovieInfo } from "../types"
import { Colors } from "@/constants/Colors"
import { useRouter } from "next/navigation"
import { ERoutes } from "@/enums/routesEn"
import { IoArrowBackSharp } from "react-icons/io5"

const ViewAllHeader = ({ movie }: { movie: TMovieInfo }) => {
	const router = useRouter()

	const getBack = () => {
		router.push(`${ERoutes.MOVIES}/${movie.id}`)
	}

	return (
		<Flex
			w={"100%"}
			h={"150px"}
			align={"center"}
			justify={"center"}
			bgColor={Colors.mainRed}
			mb={5}
		>
			<Flex
				maxW={"1200px"}
				w={"100%"}
				h={"100%"}
				align={"center"}
				gap={5}
				px={2}
			>
				<Image
					onClick={getBack}
					cursor={"pointer"}
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt={movie.original_title}
					h={"80%"}
					borderRadius={"5px"}
				/>
				<Box>
					<Box
						display={"flex"}
						gap={2}
						fontWeight={"bold"}
						fontSize={{ base: "xl", md: "4xl" }}
						color={"white"}
					>
						<Text>{movie.original_title}</Text>
						{movie.release_date ? (
							<Text fontWeight={"300"}>({movie.release_date.slice(0, 4)})</Text>
						) : null}
					</Box>
					<Link
						w={"120px"}
						display={"flex"}
						alignItems={"center"}
						gap={1}
						_hover={{ textDecoration: "none", color: Colors.gold }}
						href={`${ERoutes.MOVIES}/${movie.id}`}
					>
						<IoArrowBackSharp /> Back to main
					</Link>
				</Box>
			</Flex>
		</Flex>
	)
}

export default ViewAllHeader
