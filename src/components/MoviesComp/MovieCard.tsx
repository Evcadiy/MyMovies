import { Box, GridItem, Image, Text } from "@chakra-ui/react"
import VoteInCircle from "./VoteInCircle"
import { Colors } from "@/constants/Colors"
import { TMovie } from "@/types/AllFilmsTypes/types"

const MovieCard = ({ movie }: { movie: TMovie }) => {
	return (
		<GridItem
			key={movie.id}
			pos={"relative"}
			padding={3}
			boxShadow={"dark-lg"}
			borderRadius={{ base: "md", md: "lg" }}
			transition="transform 0.2s"
			_hover={{ transform: "scale(1.05)", cursor: "pointer" }}
			minWidth="200px"
			maxWidth="250px"
		>
			<Box
				width="100%"
				height={{ base: "300px", md: "340px" }}
				overflow="hidden"
				borderRadius={{ base: "md", md: "lg" }}
			>
				<Image
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
					objectFit="cover"
					w="100%"
					h="100%"
				/>
				<VoteInCircle vote={movie.vote_average.toFixed(1)} />
			</Box>
			<Box
				px={3}
				fontWeight={"bold"}
				fontSize={{ base: "0.9rem", md: "1.1rem" }}
				height={{ base: "70px", md: "90px" }}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={3}
				bgColor={Colors.mainRed}
				mt={3}
				borderRadius={{ base: "md", md: "lg" }}
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
