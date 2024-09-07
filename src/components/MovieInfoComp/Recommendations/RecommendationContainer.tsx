"use client"

import { TMovie } from "@/components/MoviesComp/types"
import { ERoutes } from "@/enums/routesEn"
import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const RecommendationContainer = ({
	recommendations,
	heading
}: {
	recommendations: TMovie[]
	heading: string
}) => {
	const shouldScroll = recommendations.length * 300 > 800
	const router = useRouter()

	const goToMovie = (movieId: number) => {
		router.push(`${ERoutes.MOVIES}/${movieId}`)
	}

	return (
		<>
			{recommendations.length > 0 && (
				<motion.div
					initial={{ opacity: 0, translateY: 40 }}
					whileInView={{ opacity: 1, translateY: 0 }}
					transition={{ duration: 1, ease: "easeInOut" }}
					viewport={{ once: true }}
					style={{ width: "100%" }}
				>
					<Heading w={"100%"} as="h2" size={"md"}>
						{heading}
					</Heading>
					<Flex
						w={"100%"}
						justify={"space-between"}
						wrap={"wrap"}
						align={"center"}
					></Flex>
					<Flex
						maxW={"100%"}
						overflowX={shouldScroll ? "scroll" : "hidden"}
						overflowY={"hidden"}
						gap={5}
						py={5}
					>
						{recommendations.map(movie => (
							<Box
								key={movie.id}
								position="relative"
								cursor="pointer"
								onClick={() => goToMovie(movie.id)}
								flexShrink={0}
							>
								<Image
									src={
										movie.poster_path
											? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
											: "https://via.placeholder.com/200x300/FFF?text=No%20Image"
									}
									alt={movie.title}
									borderRadius={"10px"}
									h={{ base: "170px", md: "265px" }}
								/>
								<Box
									position="absolute"
									top="0"
									left="0"
									w="100%"
									h="100%"
									opacity="0"
									display="flex"
									justifyContent="center"
									alignItems="center"
									transition="opacity 0.3s ease"
									_hover={{ opacity: 1, cursor: "pointer" }}
									borderRadius="lg"
								>
									<Box
										position="absolute"
										bottom={0}
										left={0}
										right={0}
										bg="#ffffffde"
										color="#000"
										textAlign="center"
										py={2}
										px={3}
										borderBottomRadius="10px"
									>
										{movie.title.length > 16
											? movie.title.slice(0, 15) + "..."
											: movie.title}
									</Box>
								</Box>
							</Box>
						))}
					</Flex>
				</motion.div>
			)}
		</>
	)
}

export default RecommendationContainer
