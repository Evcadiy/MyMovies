"use server"

import { EInfoRoutes } from "@/enums/infoRoutes"
import axios from "axios"

export const getInfoBySearch = async (
	route: EInfoRoutes,
	query: string,
	page?: string | string[] | 1,
	include_adult?: boolean
) => {
	const baseUrl = "https://api.themoviedb.org/3/search"
	const response = await axios.get(baseUrl + route, {
		params: { query, include_adult, language: "en-US", page },
		headers: {
			Authorization: "Bearer " + process.env.MOVIE_API_ACCESS_TOKEN
		}
	})
	return response.data
}
