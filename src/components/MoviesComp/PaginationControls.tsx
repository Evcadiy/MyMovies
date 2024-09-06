"use client"

import { ERoutes } from "@/enums/routesEn"
import { Box, Button, Text } from "@chakra-ui/react"
import { useRouter, useSearchParams } from "next/navigation"
import {
	HiOutlineArrowSmallLeft,
	HiOutlineArrowSmallRight
} from "react-icons/hi2"

const PaginationControls = ({ totalPages }: { totalPages: number }) => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const page = Number(searchParams.get("page")) || 1

	const prevPageHandler = () => {
		if (page > 1) {
			router.push(`${ERoutes.MOVIES}?page=${page - 1}`)
		}
	}

	const nextPageHandler = () => {
		if (page < totalPages) {
			router.push(`${ERoutes.MOVIES}?page=${page + 1}`)
		}
	}

	const selectPageHandler = (pageNumber: number) => {
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			router.push(`${ERoutes.MOVIES}?page=${pageNumber}`)
		}
	}

	const generatePageRange = () => {
		const range = []
		const start = Math.max(1, page - 2)
		const end = Math.min(totalPages, page + 2)

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
			gap={4}
		>
			<Button
				onClick={prevPageHandler}
				px={3}
				display={page > 1 ? "" : "none"}
				disabled={page > 1}
			>
				<HiOutlineArrowSmallLeft size={"25px"} />
			</Button>

			{page > 3 && (
				<Button onClick={() => selectPageHandler(1)} mx={1}>
					<Text>1</Text>
				</Button>
			)}

			{page > 4 && <Text>...</Text>}

			{pageRange.map(pageNumber => (
				<Button
					key={pageNumber}
					onClick={() => selectPageHandler(pageNumber)}
					mx={1}
					border={"1px solid #fff"}
					variant={pageNumber === page ? "solid" : ""}
				>
					<Text>{pageNumber}</Text>
				</Button>
			))}

			{page < totalPages - 3 && <Text>...</Text>}

			{page < totalPages - 2 && (
				<Button mx={1}>
					<Text>{totalPages}</Text>
				</Button>
			)}
			<Button
				onClick={nextPageHandler}
				px={3}
				display={page < totalPages ? "" : "none"}
			>
				<HiOutlineArrowSmallRight size={"25px"} />
			</Button>
		</Box>
	)
}

export default PaginationControls
