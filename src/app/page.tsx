
import { SwapSection } from '../components/swap-section'
import { WalletSection } from '../components/wallet-section'

export default function Home() {
	return (
		<main className="p-8 max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-8">Zotto SDK Test</h1>
			
			<div className="space-y-8">
				<WalletSection />
				<SwapSection />
			</div>
		</main>
	)
}