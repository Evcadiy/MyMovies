"use client"

import { useState } from "react"
import { Grid, GridItem, Box, Image, Button, Flex } from "@chakra-ui/react"
import { TMovieImageDetails } from "../types"
import { Colors } from "@/constants/Colors"

interface LazyLoadGridProps {
	images: TMovieImageDetails[]
	initialCount?: number
	loadMoreCount?: number
}

const LazyLoadGrid = ({
	images,
	initialCount = 30,
	loadMoreCount = 30
}: LazyLoadGridProps) => {
	const [visibleCount, setVisibleCount] = useState(initialCount)

	const visibleImages = images.slice(0, visibleCount)

	return (
		<Box maxW={"1200px"} margin={"0 auto"}>
			<Grid
				px={2}
				w={"100%"}
				h={"100%"}
				templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
				gap={10}
				justifyItems={"center"}
			>
				{visibleImages.map(image => (
					<GridItem
						onClick={() =>
							window.open(
								`https://image.tmdb.org/t/p/original/${image.file_path}`
							)
						}
						key={image.file_path}
						maxW={"200px"}
						w={"100%"}
						h={"100%"}
						overflow={"hidden"}
						boxShadow={"lg"}
						borderRadius={"md"}
						cursor={"pointer"}
						_hover={{
							transform: "scale(1.05)",
							transition: "0.3s ease-in-out"
						}}
						_focus={{ transform: "scale(1)" }}
					>
						<Box
							w={"100%"}
							h={"100%"}
							overflow={"hidden"}
							display={"flex"}
							alignItems={"center"}
							justifyContent={"center"}
							borderRadius={"md"}
						>
							<Image
								src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
								alt={image.file_path}
								objectFit={"cover"}
								borderRadius={"md"}
							/>
						</Box>
					</GridItem>
				))}
			</Grid>
			{visibleCount < images.length && (
				<Flex>
					<Button
						mt={5}
						mx={10}
						w={"100%"}
						onClick={() => setVisibleCount(prev => prev + loadMoreCount)}
						size="md"
						_hover={{ color: Colors.gold }}
						_active={{
							color: Colors.gold
						}}
						_focus={{ bg: "#fff", color: "#000" }}
					>
						Load More
					</Button>
				</Flex>
			)}
		</Box>
	)
}

export default LazyLoadGrid
