"use server"

import axios from "axios"

export const getMovies = async (
	endpoint: string,
	page?: string | string[] | 1
) => {
	const baseUrl = "https://api.themoviedb.org/3/movie/"
	const response = await axios.get(baseUrl + endpoint, {
		params: { language: "en-US", page },
		headers: {
			Authorization: "Bearer " + process.env.NEXT_PUBLIC_MOVIE_API_ACCESS_TOKEN
		}
	})
	return response.data.results
}
