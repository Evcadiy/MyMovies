import { Colors } from "@/constants/Colors"
import { ERoutes } from "@/enums/routesEn"
import { Flex, Link, Text } from "@chakra-ui/react"
import React from "react"

const ErrorSearch = ({ route, title }: { route: ERoutes; title: string }) => {
	return (
		<Flex
			direction={"column"}
			align={"center"}
			justify={"center"}
			textAlign={"center"}
			p={5}
		>
			<Text fontSize={"xl"} mt={20}>
				There are no {title} that matched your query.
			</Text>
			<Link color={Colors.gold} href={route} mt={5}>
				Go back
			</Link>
		</Flex>
	)
}

export default ErrorSearch
