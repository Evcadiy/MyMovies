"use client"

import {
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Text
} from "@chakra-ui/react"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { SlMagnifier } from "react-icons/sl"
import { RxCross1 } from "react-icons/rx"
import { ERoutes } from "@/enums/routesEn"
import { IoIosArrowForward } from "react-icons/io"

const Search = () => {
	const [searchTerm, setSearchTerm] = useState<string | undefined>("")
	const router = useRouter()
	const pathname = usePathname()
	const personPathname = pathname?.includes(ERoutes.PERSON)

	const handleSearch = () => {
		if (searchTerm) {
			if (personPathname === true) {
				router.push(`${ERoutes.PERSON}?query=${searchTerm}`)
			} else {
				router.push(`${ERoutes.MOVIES}?query=${searchTerm}`)
			}
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
			bgColor={{ base: "#fff", lg: "inherit" }}
			pos={"absolute"}
			top={16}
			left={{ base: "0%", lg: "50%" }}
			transform={{ base: "0", lg: "translateX(-50%)" }}
			w={{ base: "100%", lg: "55%" }}
		>
			<InputGroup
				borderBottom={"0.1px solid #f5f5f5"}
				color={{ base: "#000", lg: "#f5f5f5" }}
			>
				<InputLeftElement pointerEvents="none" fontSize="1em">
					<SlMagnifier />
				</InputLeftElement>
				<Input
					placeholder="Search for movies, people..."
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					border={"none"}
					_focusVisible={""}
					_hover={""}
					borderRadius={""}
					onKeyDown={handleKeyDown}
				/>
				<InputRightElement cursor={"pointer"}>
					{searchTerm && <RxCross1 onClick={() => setSearchTerm("")} />}
				</InputRightElement>
			</InputGroup>
		</Box>
	)
}

export default Search
