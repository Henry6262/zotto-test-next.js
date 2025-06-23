import { createConfig, http } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { metaMask, walletConnect, injected } from 'wagmi/connectors'

export const wagmiConfig = createConfig({
	chains: [mainnet, polygon, optimism, arbitrum],
	connectors: [
		metaMask(),
		walletConnect({
			projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
		}),
		injected(),
	],
	transports: {
		[mainnet.id]: http(),
		[polygon.id]: http(),
		[optimism.id]: http(),
		[arbitrum.id]: http(),
	},
})

export const chains = [mainnet, polygon, optimism, arbitrum] 