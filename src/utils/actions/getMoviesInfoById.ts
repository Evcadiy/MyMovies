"use server"

import axios from "axios"

export const getMoviesInfoById = async (endpoint: string, id: number) => {
	const baseUrl = "https://api.themoviedb.org/3/movie/"
	const response = await axios.get(baseUrl + id + endpoint, {
		params: { language: "en-US" },
		headers: {
			Authorization: "Bearer " + process.env.MOVIE_API_ACCESS_TOKEN
		}
	})
	return response.data.results
}
