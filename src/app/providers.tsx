'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider } from '@privy-io/wagmi'
import { wagmiConfig } from '../config/wagmi'
import { ReactNode, useState } from 'react'

interface ProvidersProps {
	children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
						refetchOnWindowFocus: false,
					},
				},
			})
	)

	return (
		<PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} >
			<QueryClientProvider client={queryClient}>
				<WagmiProvider config={wagmiConfig}>
					{children}
				</WagmiProvider>
			</QueryClientProvider>
		</PrivyProvider>
	)
}
