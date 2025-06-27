'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useEffect, useState } from 'react'

export function WalletConnect() {
	const [isClient, setIsClient] = useState(false)
	const { address, isConnected } = useAccount()
	const { connect, connectors, error, isPending } = useConnect()
	const { disconnect } = useDisconnect()

	useEffect(() => {
		setIsClient(true)
	}, [])

	// Show loading state until client hydration is complete
	if (!isClient) {
		return (
			<div className="space-y-4">
				<h2 className="text-lg font-semibold">Connect Wallet</h2>
				<div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
					<p className="text-gray-600">Loading wallet options...</p>
				</div>
			</div>
		)
	}

	if (isConnected) {
		return (
			<div className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
				<div>
					<p className="text-sm text-green-700">Connected to:</p>
					<p className="font-mono text-sm text-green-800">
						{address?.slice(0, 6)}...{address?.slice(-4)}
					</p>
				</div>
				<button
					onClick={() => disconnect()}
					className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
				>
					Disconnect
				</button>
			</div>
		)
	}

	return (
		<div className="space-y-4">
			<h2 className="text-lg font-semibold">Connect Wallet</h2>
			<div className="grid gap-2">
				{connectors.map((connector) => (
					<button
						disabled={isPending}
						key={connector.id}
						onClick={() => connect({ connector })}
						className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						<span className="font-medium">{connector.name}</span>
						{isPending && ' (connecting...)'}
					</button>
				))}
			</div>

			{error && (
				<div className="p-3 bg-red-50 border border-red-200 rounded-lg">
					<p className="text-sm text-red-700">Error: {error.message}</p>
				</div>
			)}
		</div>
	)
} 