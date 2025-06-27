'use client'

import { WalletConnect } from './wallet-connect'

export function WalletSection() {
	return (
		<section>
			<h2 className="text-xl font-semibold mb-4">Wallet Connection</h2>
			<WalletConnect />
		</section>
	)
}
