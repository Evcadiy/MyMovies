import { TReviewResult } from "@/components/MovieInfoComp/types"
import { EInfoRoutes } from "@/enums/infoRoutes"
import { getInfoById } from "@/utils/actions/getInfoById"
import {
	Avatar,
	Box,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Heading,
	Text
} from "@chakra-ui/react"

const ReviewPage = async ({ params }: { params: { reviewId: string } }) => {
	const reviewId = params.reviewId
	const review: TReviewResult = await getInfoById(EInfoRoutes.REVIEW, reviewId)
	const dateNumber = review.created_at.slice(8, 10)
	const monthNumber = review.created_at.slice(5, 7)

	const { author, author_details, content, created_at } = review
	const { username, name, avatar_path } = author_details

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

	const createMarkup = (html: string) => {
		return { __html: html }
	}
	return (
		<Flex
			minHeight="100vh"
			height="100%"
			direction={{ base: "column", md: "row" }}
		>
			<Flex
				justify={"center"}
				pt={{ base: 5, md: 10 }}
				pb={{ base: 5, md: 0 }}
				px={20}
				bgColor={"#fff"}
			>
				<Avatar
					size="2xl"
					name={review.author}
					src={`https://image.tmdb.org/t/p/w200${avatar_path}`}
				/>
			</Flex>
			<Card bgColor={"#fff"} color={"#000"} borderRadius={0} flex="1">
				<CardHeader pb={0}>
					<Flex>
						<Flex
							flex="1"
							gap="4"
							alignItems="center"
							flexWrap="wrap"
							direction={"row"}
						>
							<Box>
								<Heading size="lg">{username}</Heading>
							</Box>
						</Flex>
					</Flex>
					{name ? (
						<Text>
							Written by
							<Text px={1} as={"span"} fontWeight={"bold"}>
								{author_details.name}
							</Text>
							{`on` + ` ` + monthName} {dateNumber}, {created_at.slice(0, 4)}
						</Text>
					) : (
						<Text>
							{`Written on` + ` ` + monthName} {dateNumber},{" "}
							{created_at.slice(0, 4)}
						</Text>
					)}
				</CardHeader>
				<CardBody>
					<Text
						fontSize={{ base: "sm", md: "md" }}
						dangerouslySetInnerHTML={createMarkup(content)}
					/>
				</CardBody>
			</Card>
		</Flex>
	)
}

export default ReviewPage
