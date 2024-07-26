import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { BsDot } from "react-icons/bs"
import UserScoreCircle from "./UserScoreCircle"
import { FaPlay } from "react-icons/fa"
import { getMoviesInfoById } from "@/utils/actions/getMoviesInfoById"
import { EMoviesEndpoints } from "@/enums/moviesEndpoints"
import { TMovieInfo } from "@/types/MoviesTypes/types"
import Link from "next/link"

const OverviewBox = async ({ movie }: { movie: TMovieInfo }) => {
	const movieVideos = await getMoviesInfoById(movie.id, EMoviesEndpoints.VIDEOS)

	const trailers = movieVideos.results.filter(
		(video: { key: ""; name: string }) => video.name.includes("Trailer")
	)

	return (
		<VStack
			pos={"relative"}
			align="flex-start"
			spacing={4}
			p={10}
			borderRadius="md"
			w={"100%"}
		>
			<Box>
				<Heading
					display={"flex"}
					gap={2}
					as="h1"
					size={{ base: "md", lg: "xl" }}
				>
					{movie.title}
					{movie.release_date ? (
						<Text fontWeight={"300"}>({movie.release_date.slice(0, 4)})</Text>
					) : null}
				</Heading>
				<Box display={{ base: "", lg: "flex" }} alignItems={"center"} gap={1}>
					<Text>{movie.release_date}</Text>
					<Text>({movie.origin_country})</Text>
					<BsDot />
					{movie.genres.map(genre => genre.name).join(", ")}
				</Box>
			</Box>
			<UserScoreCircle score={Number(movie.vote_average.toFixed(1)) * 10} />
			{trailers.length > 0 && (
				<Link
					href={`https://www.youtube.com/watch?v=${
						trailers[trailers.length - 1]?.key
					}`}
				>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						gap={2}
						transition={"color 0.2s"}
						_hover={{ color: "gray" }}
					>
						<FaPlay />
						<Text>Watch the trailer</Text>
					</Box>
				</Link>
			)}
			<Text fontStyle={"italic"}>{movie.tagline}</Text>
			<Box>
				<Text fontSize={"20px"} fontWeight={"bold"}>
					Overview
				</Text>
				<Text fontSize="lg">
					{movie.overview || `We don't have an overview`}
				</Text>
			</Box>
		</VStack>
	)
}

export default OverviewBox
