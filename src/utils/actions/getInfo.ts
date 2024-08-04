"use server"

import { EInfoRoutes } from "@/enums/infoRoutes"
import axios from "axios"

export const getInfo = async (
	route: EInfoRoutes,
	endpoint: string,
	page?: string | string[] | 1
) => {
	const baseUrl = "https://api.themoviedb.org/3/"
	const response = await axios.get(baseUrl + route + endpoint, {
		params: { language: "en-US", page },
		headers: {
			Authorization: "Bearer " + process.env.MOVIE_API_ACCESS_TOKEN
		}
	})
	return response.data
}
