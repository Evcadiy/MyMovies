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

export type TActor = {
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

export type TAuthorDetails = {
	name: string
	username: string
	avatar_path: string | null
	rating: number | null
}

export type TReviewResult = {
	author: string
	author_details: TAuthorDetails
	content: string
	created_at: string
	id: string
	updated_at: string
	url: string
}

export type TReview = {
	id: number
	page: number
	results: TReviewResult[]
	total_pages: number
	total_results: number
}

export type TMovieImageDetails = {
	aspect_ratio: number
	height: number
	iso_639_1: string | null
	file_path: string
	vote_average: number
	vote_count: number
	width: number
}

export type TMovieImages = {
	backdrops: [TMovieImageDetails]
	id: number
	logos: [TMovieImageDetails]
	posters: [TMovieImageDetails]
}
