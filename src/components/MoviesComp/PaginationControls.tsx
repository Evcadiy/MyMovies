"use client"

import { Box, Button, Text } from "@chakra-ui/react"
import { useRouter, useSearchParams } from "next/navigation"
import {
	HiOutlineArrowSmallLeft,
	HiOutlineArrowSmallRight
} from "react-icons/hi2"

const PaginationControls = ({
	totalPages,
	route
}: {
	totalPages: number
	route: string
}) => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const page = Number(searchParams.get("page")) || 1
	const query = searchParams.get("query") || ""

	console.log(query)

	const prevPageHandler = () => {
		if (page > 1) {
			router.push(`${route}?page=${page - 1}`)
		}
		if (query && page > 1) {
			router.push(`${route}?query=${query}&page=${page - 1}`)
		}
	}

	const nextPageHandler = () => {
		if (page < totalPages) {
			router.push(`${route}?page=${page + 1}`)
		}
		if (query && page < totalPages) {
			router.push(`${route}?query=${query}&page=${page + 1}`)
		}
	}

	const selectPageHandler = (pageNumber: number) => {
		if (pageNumber) {
			router.push(`${route}?page=${pageNumber}`)
		}
		if (query) {
			router.push(`${route}?query=${query}&page=${pageNumber}`)
		}
	}

	const generatePageRange = () => {
		const range = []
		const start = Math.max(1, page - 1)
		const end = Math.min(totalPages, page + 1)

		for (let i = start; i <= end; i++) {
			range.push(i)
		}

		return range
	}

	const pageRange = generatePageRange()

	return (
		<Box
			marginBottom={10}
			display="flex"
			alignItems="center"
			justifyContent="center"
			gap={{ base: 2, sm: 4 }}
		>
			<Button
				onClick={prevPageHandler}
				px={{ base: 2, sm: 3 }}
				display={page > 1 ? "" : "none"}
				disabled={page > 1}
				fontSize={{ base: "sm", sm: "md" }}
			>
				<HiOutlineArrowSmallLeft size={"20px"} />
			</Button>

			{page > 3 && (
				<Button
					onClick={() => selectPageHandler(1)}
					mx={1}
					fontSize={{ base: "sm", sm: "md" }}
				>
					<Text fontSize={{ base: "sm", sm: "md" }}>1</Text>
				</Button>
			)}

			{page > 4 && <Text fontSize={{ base: "sm", sm: "md" }}>...</Text>}

			{pageRange.map(pageNumber => (
				<Button
					key={pageNumber}
					onClick={() => selectPageHandler(pageNumber)}
					border={"1px solid #fff"}
					variant={pageNumber === page ? "solid" : ""}
					fontSize={{ base: "sm", sm: "md" }}
					p={{ base: 1, sm: 2 }}
				>
					<Text fontSize={{ base: "sm", sm: "md" }}>{pageNumber}</Text>
				</Button>
			))}

			<Button
				onClick={nextPageHandler}
				px={{ base: 2, sm: 3 }}
				display={page < totalPages ? "" : "none"}
				fontSize={{ base: "sm", sm: "md" }}
			>
				<HiOutlineArrowSmallRight size={"20px"} />
			</Button>
		</Box>
	)
}

export default PaginationControls
