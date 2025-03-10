import {
	Card,
	CardHeader,
	CardBody,
	Flex,
	Box,
	Heading,
	Text,
	Avatar,
	Link
} from "@chakra-ui/react"
import { ERoutes } from "@/enums/routesEn"
import { TReviewResult } from "../types"

const ReviewCard = ({
	author,
	author_details,
	content,
	created_at,
	id
}: Pick<
	TReviewResult,
	"author" | "author_details" | "content" | "created_at" | "id"
>) => {
	const dateNumber = created_at.slice(8, 10)
	const monthNumber = created_at.slice(5, 7)

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]

	const monthName = monthNames[parseInt(monthNumber) - 1]

	const truncatedContent =
		content.length > 300 ? `${content.slice(0, 300) + "..."} ` : content
	const createMarkup = (html: string) => {
		return { __html: html }
	}
	return (
		<Card maxW="full" bgColor={"#fff"} color={"#000"}>
			<CardHeader pb={0}>
				<Flex>
					<Flex
						flex="1"
						gap="4"
						alignItems="center"
						flexWrap="wrap"
						direction={"row"}
					>
						<Avatar
							name={author}
							src={`https://image.tmdb.org/t/p/w200${author_details.avatar_path}`}
						/>
						<Box>
							<Heading size="md">{author_details.username}</Heading>
							{author_details.name ? (
								<Text fontStyle={"italic"} fontSize={"14px"}>
									Written by
									<Text px={1} as={"span"} fontWeight={"bold"}>
										{author_details.name}
									</Text>
									{`on` + ` ` + monthName} {dateNumber},{" "}
									{created_at.slice(0, 4)}
								</Text>
							) : (
								<Text fontStyle={"italic"} fontSize={"14px"}>
									{`Written on` + ` ` + monthName} {dateNumber},{" "}
									{created_at.slice(0, 4)}
								</Text>
							)}
						</Box>
					</Flex>
				</Flex>
			</CardHeader>
			<CardBody>
				<Box>
					<Text dangerouslySetInnerHTML={createMarkup(truncatedContent)} />
					{content.length > 300 ? (
						<Link href={`${ERoutes.REVIEW}/${id}`} textDecoration={"underline"}>
							read the rest
						</Link>
					) : null}
				</Box>
			</CardBody>
		</Card>
	)
}

export default ReviewCard
