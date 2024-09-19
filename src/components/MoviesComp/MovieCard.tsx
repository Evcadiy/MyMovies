"use client"

import { Box, GridItem, Image, Text } from "@chakra-ui/react"
import VoteInCircle from "./VoteInCircle"
import { Colors } from "@/constants/Colors"
import { useRouter } from "next/navigation"
import { ERoutes } from "@/enums/routesEn"
import { TMovie } from "./types"

const MovieCard = ({ movie }: { movie: TMovie }) => {
	const router = useRouter()

	const goToInfo = () => {
		router.push(`${ERoutes.MOVIES}/${movie.id}`)
	}

	return (
		<GridItem
			onClick={goToInfo}
			key={movie.id}
			pos={"relative"}
			padding={{ base: 1, sm: 3 }}
			boxShadow={"dark-lg"}
			borderRadius={{ base: "md", md: "lg" }}
			transition="transform 0.2s"
			_hover={{
				"@media (max-width: 768px)": {
					transform: "scale(1)"
				},
				transform: "scale(1.05)",
				cursor: "pointer"
			}}
			minWidth={{ base: "140px", sm: "225px" }}
			maxWidth={{ base: "140px", sm: "250px" }}
		>
			<Box
				width="100%"
				height={{ base: "220px", sm: "340px" }}
				overflow="hidden"
				borderRadius={{ base: "md", sm: "lg" }}
			>
				{movie.poster_path ? (
					<Image
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={movie.title}
						objectFit="cover"
						w="100%"
						h="100%"
					/>
				) : (
					<Image
						src="/images/movie-placeholder.jpg"
						alt={movie.title}
						h="100%"
						w={"226px"}
					/>
				)}
				<VoteInCircle vote={movie.vote_average.toFixed(1)} />
			</Box>
			<Box
				px={3}
				fontWeight={"bold"}
				fontSize={{ base: "0.7rem", sm: "1.1rem" }}
				height={{ base: "50px", sm: "90px" }}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={3}
				bgColor={Colors.mainRed}
				mt={3}
				borderRadius={{ base: "md", sm: "lg" }}
				_hover={{ bgColor: Colors.secondaryRed }}
			>
				<Text textAlign="center">
					{movie.title.length > 20
						? movie.title.slice(0, 20) + "..."
						: movie.title}
				</Text>
				<Box display={"flex"}>
					<Text>{movie.release_date.slice(0, 2)}</Text>
					<Text color={Colors.gold}>{movie.release_date.slice(2, 4)}</Text>
				</Box>
			</Box>
		</GridItem>
	)
}

export default MovieCard
