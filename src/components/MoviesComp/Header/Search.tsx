"use client"

import { Colors } from "@/constants/Colors"
import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SlMagnifier } from "react-icons/sl"
import { RxCross1 } from "react-icons/rx"

const Search = () => {
	const [searchTerm, setSearchTerm] = useState<string | undefined>("")
	const router = useRouter()
	const handleSearch = () => {
		if (searchTerm) {
			router.push(`/movies?query=${searchTerm}`)
		}
		setSearchTerm("")
	}
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch()
		}
	}

	return (
		<Box
			display="flex"
			justifyContent="center"
			w={"full"}
			borderBottom={"0.1px solid #f5f5f5"}
		>
			<Box pos={"relative"} w={"full"} mx={{ base: 0, lg: "200px" }} my={2}>
				{searchTerm && (
					<Text
						cursor={"pointer"}
						zIndex={2}
						p={2}
						pos={"absolute"}
						right={4}
						top={1}
						onClick={() => setSearchTerm("")}
					>
						<RxCross1 />
					</Text>
				)}
				<Text
					cursor={"pointer"}
					zIndex={2}
					p={2}
					pos={"absolute"}
					left={0}
					top={1}
					onClick={() => setSearchTerm("")}
				>
					<SlMagnifier />
				</Text>
				<Input
					placeholder="Search for movies..."
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					width="full"
					mx={8}
					border={"none"}
					_focusVisible={""}
					_hover={""}
					borderRadius={""}
					onKeyDown={handleKeyDown}
				/>
			</Box>
		</Box>
	)
}

export default Search
