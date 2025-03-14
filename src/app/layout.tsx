import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/components/Providers"
import Header from "@/components/UI/Header/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "MyMovies",
	description: "Movies App"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	)
}
