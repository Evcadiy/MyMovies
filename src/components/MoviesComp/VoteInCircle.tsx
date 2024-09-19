import { Box } from "@chakra-ui/react"

const VoteInCircle = ({ vote }: { vote: string }) => {
	const color = vote <= "5.0" ? "red" : vote <= "7.0" ? "orange" : "#20b655"

	return (
		<Box
			pos={"absolute"}
			right={{ base: 2, sm: 4 }}
			top={{ base: 2, sm: 4 }}
			fontSize={{ base: "0.8rem", sm: "1.2rem" }}
			width={{ base: "30px", sm: "50px" }}
			h={{ base: "30px", sm: "50px" }}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			p={2}
			bgColor={"#0000005f"}
			border={`2px solid ${color}`}
			borderRadius={"100%"}
		>
			{Number(vote) > 0 ? vote : "-"}
		</Box>
	)
}

export default VoteInCircle
