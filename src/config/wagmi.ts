import { createConfig } from '@privy-io/wagmi'
import { http } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { neura } from './chains'

export const wagmiConfig = createConfig({
	chains: [neura, mainnet, polygon, optimism, arbitrum],
	transports: {
		[neura.id]: http(),
		[mainnet.id]: http(),
		[polygon.id]: http(),
		[optimism.id]: http(),
		[arbitrum.id]: http(),
	},
})

export const chains = [neura, mainnet, polygon, optimism, arbitrum] 