"use client"

import { Box, Input, Text } from "@chakra-ui/react"
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
		<Box w={"full"} pos={"relative"}>
			<Box
				borderBottom={"0.1px solid #f5f5f5"}
				pos={"absolute"}
				mt={-4}
				py={2}
				top={0}
				left={{ base: "0", md: "50%" }}
				transform={{ base: "0", md: "translateX(-50%)" }}
				w={{ base: "100%", md: "55%" }}
			>
				{searchTerm && (
					<Text
						cursor={"pointer"}
						zIndex={2}
						p={2}
						pos={"absolute"}
						right={4}
						top={3}
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
					top={3}
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
