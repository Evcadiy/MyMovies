import PersonPageContainer from "@/components/PersonPageComp/PersonPageContainer"
import { TPerson } from "@/components/PersonPageComp/types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { getInfoById } from "@/utils/actions/getInfoById"

const PersonPage = async ({ params }: { params: { personId: string } }) => {
	const personId = params.personId
	const person: TPerson = await getInfoById(EInfoRoutes.PERSON, personId)

	return <PersonPageContainer person={person} />
}

export default PersonPage
