import { getInfoById } from "@/utils/actions/getInfoById"
import { TMovieInfo } from "../types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import RightSideInfoContainer from "./RightSideInfoContainer"

const RightSideInfoComp = async ({ id }: { id: number }) => {
	const movieInfo: TMovieInfo = await getInfoById(EInfoRoutes.MOVIE, id)
	const keywords = await getInfoById(
		EInfoRoutes.MOVIE,
		id,
		EInfoRoutes.KEYWORDS
	)

	return (
		<RightSideInfoContainer
			movieInfo={movieInfo}
			keywords={keywords.keywords}
		/>
	)
}

export default RightSideInfoComp
