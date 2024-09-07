"use client"

import { Box, Flex, Text } from "@chakra-ui/react"
import Search from "./Search"
import { SlMagnifier } from "react-icons/sl"
import { Colors } from "@/constants/Colors"
import HeaderMenu from "./HeaderMenu"
import { useState } from "react"
import { RxCross1 } from "react-icons/rx"

const Header = () => {
	const [isSearch, setIsSearch] = useState(false)

	const toggleSearch = () => {
		setIsSearch(prev => !prev)
	}

	return (
		<>
			<Box w={"full"} py={5} px={12}>
				<Flex justify={"space-between"} align={"center"}>
					<Flex gap={12} flex={1} align={"center"}>
						<Text
							display={{ base: "none", md: "block" }}
							fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
							fontWeight="bold"
							bgGradient={`linear(to-r, ${Colors.mainRed}, ${Colors.gold})`}
							bgClip="text"
							textAlign="center"
							letterSpacing="widest"
						>
							MyMovies
						</Text>
						<HeaderMenu title={"Movies"} />
						<HeaderMenu title={"People"} />
					</Flex>
					<Box onClick={toggleSearch} cursor={"pointer"}>
						{isSearch ? <RxCross1 /> : <SlMagnifier />}
					</Box>
				</Flex>
			</Box>
			{isSearch && <Search />}
		</>
	)
}

export default Header
