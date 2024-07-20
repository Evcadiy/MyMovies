// import { Colors } from "@/constants/Colors"
// import { Image, Link } from "@chakra-ui/next-js"
// import {
// 	Box,
// 	Modal,
// 	ModalBody,
// 	ModalCloseButton,
// 	ModalContent,
// 	ModalHeader,
// 	ModalOverlay,
// 	Text
// } from "@chakra-ui/react"

// const FilmModal = ({
// 	filmTrailer,
// 	isOpen,
// 	onClose,
// 	film
// }: {
// 	filmTrailer: {
// 		key: string
// 	}
// 	isOpen: boolean
// 	onClose: () => void
// 	film: Film
// }) => {
// 	const color =
// 		film.vote_average.toFixed(1) <= "5.0"
// 			? "red"
// 			: film.vote_average.toFixed(1) <= "7.0"
// 			? "orange"
// 			: "#20b655"

// 	return (
// 		<Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
// 			<ModalOverlay bgColor={"#000000b1"} />
// 			<ModalContent color={"#000"}>
// 				<ModalCloseButton />
// 				<ModalHeader fontSize={"3xl"} fontWeight={"bold"}>
// 					{film.title}
// 				</ModalHeader>
// 				<Box p={5} display={"flex"} gap={10}>
// 					<Image
// 						src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
// 						alt="img"
// 						width={300}
// 						height={450}
// 					/>
// 					<Box
// 						fontSize={"1.3rem"}
// 						px={3}
// 						display={"flex"}
// 						flexDirection={"column"}
// 						flex={1}
// 						gap={7}
// 					>
// 						<Box display={"flex"} justifyContent={"space-between"}>
// 							<Text fontWeight={"bold"}>Or Title: </Text>
// 							{film.original_title}
// 						</Box>
// 						<Box display={"flex"} justifyContent={"space-between"}>
// 							<Text fontWeight={"bold"}>Or language: </Text>
// 							{film.original_language}
// 						</Box>
// 						<Box display={"flex"} justifyContent={"space-between"}>
// 							<Text fontWeight={"bold"}>Realease date: </Text>
// 							{film.release_date}
// 						</Box>
// 						<Box display={"flex"} justifyContent={"space-between"}>
// 							<Text fontWeight={"bold"}>Vote average: </Text>
// 							<Text color={color}>{film.vote_average.toFixed(1)}</Text>
// 						</Box>
// 						<Box display={"flex"} justifyContent={"space-between"}>
// 							<Text fontWeight={"bold"}>Vote count: </Text>
// 							{film.vote_count}
// 						</Box>
// 						<Link href={`https://www.youtube.com/watch?v=${filmTrailer.key}`}>
// 							Watch the trailer
// 						</Link>
// 					</Box>
// 				</Box>
// 				<Box ml={5} fontSize={"1.5rem"} fontWeight={"bold"} display={"flex"}>
// 					About the
// 					<Text ml={2} color={Colors.mainRed}>
// 						film
// 					</Text>
// 				</Box>
// 				<ModalBody p={5}>{film.overview}</ModalBody>
// 			</ModalContent>
// 		</Modal>
// 	)
// }

// export default FilmModal
