import {
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useDisclosure
} from "@chakra-ui/react"
import React from "react"
import { Colors } from "@/constants/Colors"
import { useRouter } from "next/navigation"
import { ERoutes } from "@/enums/routesEn"

interface HeaderMenuProps {
	title: string
}

const HeaderMenu = ({ title }: HeaderMenuProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const router = useRouter()

	const handleCategorySelect = (category?: string) => {
		if (category) {
			router.push(`${ERoutes.MOVIES}?category=${category}`)
		} else {
			router.push(`${ERoutes.PERSON}`)
		}

		onClose()
	}
	return (
		<Menu isOpen={isOpen}>
			<MenuButton
				fontSize={"md"}
				cursor={"pointer"}
				fontWeight={"bold"}
				_hover={{ color: Colors.gold }}
				as={Text}
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				{title}
			</MenuButton>
			<MenuList
				zIndex={"100"}
				mt={-2}
				color={"#000"}
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				{title === "Movies" ? (
					<>
						<MenuItem onClick={() => handleCategorySelect("popular")}>
							Popular
						</MenuItem>
						<MenuItem onClick={() => handleCategorySelect("now_playing")}>
							Now Playing
						</MenuItem>
						<MenuItem onClick={() => handleCategorySelect("upcoming")}>
							Upcoming
						</MenuItem>
						<MenuItem onClick={() => handleCategorySelect("top_rated")}>
							Top Rated
						</MenuItem>
					</>
				) : (
					<MenuItem onClick={() => handleCategorySelect()}>Popular</MenuItem>
				)}
			</MenuList>
		</Menu>
	)
}

export default HeaderMenu
