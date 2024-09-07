import { TPerson } from "../PersonPageComp/types"

export type TPersonList = {
	page: number
	results: TPerson[]
	total_pages: number
	total_results: number
}
