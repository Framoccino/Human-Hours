'use client'

import { WagmiConfig, createConfig } from 'wagmi'
import { polygon, polygonMumbai } from 'wagmi/chains'
import { createPublicClient, http } from 'viem'
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const { wallets } = getDefaultWallets({
  appName: 'Human Hours',
  projectId: 'YOUR_PROJECT_ID', // You'll need to get this from WalletConnect
  chains: [polygon, polygonMumbai]
})

const connectors = connectorsForWallets([...wallets])

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: polygon,
    transport: http()
  }),
  connectors
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={[polygon, polygonMumbai]}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
