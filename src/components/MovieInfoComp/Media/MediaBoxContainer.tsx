"use client"

import { Button, Divider, Flex, Heading, Image, Link } from "@chakra-ui/react"
import { TMovieImages } from "../types"
import { useState } from "react"
import { Colors } from "@/constants/Colors"
import { ERoutes } from "@/enums/routesEn"
import { motion } from "framer-motion"

const MediaBoxContainer = ({
	movieImages,
	id
}: {
	movieImages: TMovieImages
	id: number
}) => {
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

	console.log("MediaPage Render")

	return (
		<>
			{images.length > 0 && (
				<>
					<motion.div
						initial={{ opacity: 0, translateY: 50 }}
						whileInView={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						viewport={{ once: true }}
						style={{ width: "100%" }}
					>
						<Heading w={"100%"} as="h2" size={"md"} pb={2}>
							Media
						</Heading>
						<Flex
							w={"100%"}
							justify={"space-between"}
							wrap={"wrap"}
							align={"center"}
						>
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
											_active={{
												borderBottom: "2px solid #fff",
												borderRadius: 0
											}}
										>
											{category.label}
										</Button>
									))}
							</Flex>
							{images.length > 10 && (
								<Link
									color={Colors.gold}
									mt={{ base: 5, sm: 0 }}
									href={`${ERoutes.MOVIES}/${id}/${ERoutes.IMAGES}/${selectedCategory}`}
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
					</motion.div>
					<Divider borderColor={"gray.600"} />
				</>
			)}
		</>
	)
}

export default MediaBoxContainer
