import { Chain } from "viem"

export const neura = {
  id: 267,
  name: "Neura testnet",
  testnet: true,
  nativeCurrency: { name: "ANKR", symbol: "ANKR", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testnet.rpc.neuraprotocol.io"] },
  },
  blockExplorers: {
    default: {
      name: "Neura Explorer",
      url: "https://testnet-blockscout.infra.neuraprotocol.io/",
    },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    ensUniversalResolver: {
      address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
      blockCreated: 16773775,
    },
  },
} as const satisfies Chain 