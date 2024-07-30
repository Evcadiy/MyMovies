"use server"

import { EInfoRoutes } from "@/enums/infoRoutes"
import axios from "axios"

export const getInfoById = async (
	route: EInfoRoutes,
	id: number,
	endpoint?: string
) => {
	const baseUrl = "https://api.themoviedb.org/3"
	const response = await axios.get(baseUrl + `${route}/${id}${endpoint}`, {
		params: { language: "en-US" },
		headers: {
			Authorization: "Bearer " + process.env.MOVIE_API_ACCESS_TOKEN
		}
	})
	return response.data
}
