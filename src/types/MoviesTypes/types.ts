export type TMovie = {
	id: number
	genre_ids: number[]
	adult: boolean
	title: string
	overview: string
	backdrop_path: string
	original_language: string
	original_title: string
	popularity: number
	poster_path: string
	release_date: string
	video: boolean
	vote_average: number
	vote_count: number
}

export type TMovieGenre = {
	id: number
	name: string
}

export type TProductionCompany = {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}

export type TProductionCountry = {
	iso_3166_1: string
	name: string
}

export type TSpokenLanguage = {
	iso_639_1: string
	name: string
}

export type TMovieInfo = {
	adult: boolean
	backdrop_path: string
	belongs_to_collection: null | Record<string, any>
	budget: number
	genres: TMovieGenre[]
	homepage: string
	id: number
	imdb_id: string
	origin_country: string[]
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: TProductionCompany[]
	production_countries: TProductionCountry[]
	release_date: string
	revenue: number
	runtime: number
	spoken_languages: TSpokenLanguage[]
	status: string
	tagline: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

type TActor = {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path: string
	cast_id: number
	character: string
	credit_id: string
	order: number
}

export type TMovieCast = {
	cast: TActor[]
}
