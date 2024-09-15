"use client"

import { ERoutes } from "@/enums/routesEn"
import { redirect } from "next/navigation"

const HomePage = () => {
	return redirect(ERoutes.MOVIES)
}

export default HomePage
