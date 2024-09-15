"use client"

import {
	Box,
	Image,
	Text,
	useDisclosure,
	useMediaQuery
} from "@chakra-ui/react"
import { LuExpand } from "react-icons/lu"
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton
} from "@chakra-ui/react"
import { usePathname } from "next/navigation"
import { ERoutes } from "@/enums/routesEn"
const MovieInfoImage = ({
	title,
	poster_path
}: {
	title: string
	poster_path: string
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const pathname = usePathname()
	const isPerson = pathname.includes(ERoutes.PERSON)
	const [isMobile] = useMediaQuery("(min-width: 768px)")
	const imgPlaceholder = isPerson
		? "/images/person-placeholder.jpg"
		: "/images/movie-placeholder.jpg"

	return (
		<>
			<Box
				onClick={poster_path ? onOpen : undefined}
				pos={"relative"}
				w={{ base: "70%", lg: "400px" }}
				display={"flex"}
				justifyContent={"center"}
			>
				{poster_path ? (
					<Image
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
						alt={title}
						w={"100%"}
						objectFit="cover"
						borderRadius="lg"
					/>
				) : (
					<Image src={imgPlaceholder} alt={title} borderRadius="lg" />
				)}
				{poster_path && !isMobile && (
					<Box
						position="absolute"
						top="0"
						left="0"
						w="100%"
						h="100%"
						bg="rgba(0, 0, 0, 0.8)"
						opacity="0"
						display="flex"
						justifyContent="center"
						alignItems="center"
						transition="opacity 0.3s ease"
						_hover={{ opacity: 1, cursor: "pointer" }}
						borderRadius="lg"
					>
						<Box display="flex" alignItems="center" gap={2}>
							<LuExpand />
							<Text fontSize={"xl"}>Expand</Text>
						</Box>
					</Box>
				)}
			</Box>
			<Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton
						color={"#000"}
						bgColor={"#fff"}
						borderRadius={"full"}
						_hover={{}}
					/>
					<Image
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
						alt={title}
						w={"100%"}
					/>
				</ModalContent>
			</Modal>
		</>
	)
}

export default MovieInfoImage
