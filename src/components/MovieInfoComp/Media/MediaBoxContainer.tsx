"use client"

import { Button, Flex, Heading, Image, Link, VStack } from "@chakra-ui/react"
import { TMovieImages } from "../types"
import { useState } from "react"
import { Colors } from "@/constants/Colors"
import { ERoutes } from "@/enums/routesEn"

const MediaBoxContainer = ({ movieImages }: { movieImages: TMovieImages }) => {
	const { backdrops, posters, logos } = movieImages

	const getFirstAvailableCategory = () => {
		if (backdrops.length) return "backdrops"
		if (posters.length) return "posters"
		if (logos.length) return "logos"
		return "backdrops"
	}

	const [selectedCategory, setSelectedCategory] = useState<
		"backdrops" | "posters" | "logos"
	>(getFirstAvailableCategory())

	const images =
		selectedCategory === "backdrops"
			? backdrops
			: selectedCategory === "posters"
			? posters
			: logos

	const shouldScroll = images.length * 300 > 800

	const categories = [
		{ label: "Backdrops", value: "backdrops", show: !!backdrops.length },
		{ label: "Posters", value: "posters", show: !!posters.length },
		{ label: "Logos", value: "logos", show: !!logos.length }
	]

	return (
		<VStack
			spacing={4}
			align={{ base: "center", xl: "flex-start" }}
			direction={"column"}
			w={"100%"}
		>
			<Heading w={"100%"} as="h2" size={"md"}>
				Media
			</Heading>
			<Flex w={"100%"} justify={"space-between"} wrap={"wrap"}>
				<Flex gap={3} py={1}>
					{categories
						.filter(category => category.show)
						.map(category => (
							<Button
								key={category.value}
								variant="link"
								color={"#fff"}
								fontWeight={"400"}
								_hover={{}}
								onClick={() =>
									setSelectedCategory(
										category.value as "backdrops" | "posters" | "logos"
									)
								}
								isActive={selectedCategory === category.value}
								py={1}
								_active={{ borderBottom: "2px solid #fff", borderRadius: 0 }}
							>
								{category.label}
							</Button>
						))}
				</Flex>
				{images.length > 10 && (
					<Link
						color={Colors.gold}
						pt={{ base: 5, sm: 0 }}
						href={`${ERoutes.IMAGES}/${selectedCategory}`}
						_hover={{ color: "gray" }}
					>
						View all {selectedCategory}
					</Link>
				)}
			</Flex>
			<Flex
				maxW={"100%"}
				overflowX={shouldScroll ? "scroll" : "hidden"}
				overflowY={"hidden"}
				py={5}
				justify={"flex-start"}
				align={"center"}
			>
				{images.slice(0, 10).map(image => (
					<Image
						key={image.file_path}
						src={
							image.file_path
								? `https://image.tmdb.org/t/p/w500${image.file_path}`
								: "https://via.placeholder.com/200x300"
						}
						alt={image.file_path}
						h={{ base: "170px", md: "265px" }}
					/>
				))}
			</Flex>
		</VStack>
	)
}

export default MediaBoxContainer
