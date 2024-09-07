import { EInfoRoutes } from "@/enums/infoRoutes"
import { getInfoById } from "@/utils/actions/getInfoById"
import RecommendationContainer from "./RecommendationContainer"

const RecommendationsBox = async ({ id }: { id: number }) => {
	const RecommendationsList = await getInfoById(
		EInfoRoutes.MOVIE,
		id,
		EInfoRoutes.SIMILAR
	)

	const recommendations = RecommendationsList.results

	return (
		<RecommendationContainer
			recommendations={recommendations}
			heading="Recommendations"
		/>
	)
}

export default RecommendationsBox
