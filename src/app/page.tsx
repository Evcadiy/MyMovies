"use client"

import { ERoutes } from "@/enums/routesEn"
import { useRouter } from "next/navigation"

const HomePage = () => {
	const router = useRouter()

	return router.push(`${ERoutes.MOVIES}`)
}

export default HomePage
