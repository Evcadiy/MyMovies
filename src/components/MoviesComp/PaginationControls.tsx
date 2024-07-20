"use client"

import { ERoutes } from "@/enums/routesEn"
import { Box, Button, Select } from "@chakra-ui/react"
import { useRouter, useSearchParams } from "next/navigation"
import {
	HiOutlineArrowSmallLeft,
	HiOutlineArrowSmallRight
} from "react-icons/hi2"

const PaginationControls = () => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const page = Number(searchParams.get("page")) || 1
	const totalPages = 25

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

	const selectPageHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedPage = Number(event.target.value)
		router.push(`${ERoutes.MOVIES}?page=${selectedPage}`)
	}

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
			<Select value={page} onChange={selectPageHandler} width="70px">
				{Array.from({ length: totalPages }, (_, index) => (
					<option key={index + 1} value={index + 1}>
						{index + 1}
					</option>
				))}
			</Select>
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
