"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

const Providers = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<ChakraProvider disableGlobalStyle={true}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ChakraProvider>
	)
}

export default Providers
