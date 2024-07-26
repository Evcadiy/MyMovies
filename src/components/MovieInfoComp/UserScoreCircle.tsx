import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Text
} from "@chakra-ui/react"

const UserScoreCircle = ({ score }: { score: number }) => {
	const color = score <= 50 ? "red" : score <= 70 ? "orange" : "#20b655"

	return (
		<Box textAlign="center" display="flex">
			<CircularProgress
				value={score}
				size="80px"
				thickness="8px"
				color={color}
				trackColor="gray.700"
			>
				<CircularProgressLabel>
					<Text fontSize="lg" fontWeight="bold">
						{score}%
					</Text>
				</CircularProgressLabel>
			</CircularProgress>
			<Box
				display={"flex"}
				flexDirection={"column"}
				ml={2}
				justifyContent={"center"}
			>
				<Text fontSize="lg">User</Text>
				<Text fontSize="lg">Score</Text>
			</Box>
		</Box>
	)
}

export default UserScoreCircle
