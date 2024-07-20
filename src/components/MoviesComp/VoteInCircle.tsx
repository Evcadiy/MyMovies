import { Box } from "@chakra-ui/react"

const VoteInCircle = ({ vote }: { vote: string }) => {
	const color = vote <= "5.0" ? "red" : vote <= "7.0" ? "orange" : "#20b655"

	return (
		<Box
			pos={"absolute"}
			right={4}
			top={4}
			fontSize={"1.2rem"}
			width={"50px"}
			h={"50px"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			p={2}
			bgColor={"#0000005f"}
			border={`2px solid ${color}`}
			borderRadius={"100%"}
		>
			{vote}
		</Box>
	)
}

export default VoteInCircle
