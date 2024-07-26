import { Box } from "@chakra-ui/react"

const BackgroundImage = ({
	children,
	backdrop
}: {
	children: React.ReactNode
	backdrop: string
}) => {
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			position="relative"
			width="100%"
			height={{ base: "auto", lg: "500px" }}
			backgroundImage={`url(https://image.tmdb.org/t/p/original/${backdrop})`}
			backgroundSize="cover"
			backgroundPosition="top"
			backgroundRepeat={"no-repeat"}
			p={4}
		>
			<Box
				position="absolute"
				top="0"
				left="0"
				width="100%"
				height="100%"
				bg={{ base: "rgba(0, 0, 0, 0.8)", lg: "rgba(0, 0, 0, 0.5)" }}
			/>
			{children}
		</Box>
	)
}

export default BackgroundImage
