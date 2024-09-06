"use client"

import { useState } from "react"
import { Box, Text } from "@chakra-ui/react"
import { Colors } from "@/constants/Colors"

const ReadMoreText = ({ text }: { text: string }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const truncatedText =
		text.length > 750 ? text.substring(0, 750) + "..." : text

	return (
		<Box pos={"relative"}>
			<Text>{isExpanded ? text : truncatedText}</Text>
			{text.length > 750 && !isExpanded && (
				<Text
					position={"absolute"}
					right={4}
					bottom={-6}
					onClick={() => setIsExpanded(true)}
					colorScheme="teal"
					size="sm"
					cursor={"pointer"}
					color={Colors.gold}
					mt={2}
				>
					Read More
				</Text>
			)}
		</Box>
	)
}

export default ReadMoreText
