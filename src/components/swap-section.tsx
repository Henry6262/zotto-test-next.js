'use client'

import { ZottoProvider, ZottoSwap } from 'zotto-canary-sdk-react19'
import { useAccount } from 'wagmi'
import { usePrivy } from '@privy-io/react-auth'
import { useQueryClient } from '@tanstack/react-query'
import { wagmiConfig } from '../config/wagmi'

export function SwapSection() {
	const { address, isConnected } = useAccount()
	const { ready, authenticated, login, logout } = usePrivy()
	const queryClient = useQueryClient()

	// Show a loading state until Privy is ready
	if (!ready) {
		return <div>Loading...</div>
	}

	return (
		<section>
			{/* Add Privy authentication controls */}
			<div className="mb-4">
				{authenticated ? (
					<div>
						<p>Connected: {address}</p>
						<button onClick={logout}>Logout</button>
					</div>
				) : (
					<button onClick={login}>Connect Wallet</button>
				)}
			</div>
			
			<ZottoProvider privyId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} wagmiConfig={wagmiConfig} queryClient={queryClient}>
				<ZottoSwap />
			</ZottoProvider>
		</section>
	)
} 