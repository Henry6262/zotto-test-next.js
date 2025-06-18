'use client'

import { ZottoProvider, ZottoSwap } from 'zotto-canary-sdk-react19'
import { WalletConnect } from '../components/wallet-connect'

export default function Home() {
	return (
		<main className="p-8 max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-8">Zotto SDK Test</h1>
			
			<div className="space-y-8">
				<section>
					<h2 className="text-xl font-semibold mb-4">Wallet Connection</h2>
					<WalletConnect />
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-4">Zotto Swap</h2>
					<ZottoProvider>
						<ZottoSwap />
					</ZottoProvider>
				</section>
			</div>
		</main>
	)
}