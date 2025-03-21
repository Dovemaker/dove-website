import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-600 rounded-full"></div>
          </div>
          <h1 className="text-2xl font-bold text-indigo-900">Wallet Validation</h1>
        </div>
        <div className="flex gap-4">
          <Button className="bg-indigo-600 hover:bg-indigo-700">Synchronize Wallet</Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Validate Wallet</Button>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-indigo-900 mb-6">
              Wallet Syncing is the process or operation of merging.
            </h2>
            <p className="text-gray-600">
              Dapp Walletnode is a decentralized protocol. Dconnect create an innovative open-source software ecosystem
              that is both secure and resilient and it allows developers to create new online tools.
            </p>
          </div>

          <div className="w-full md:w-1/2 relative">
            <Image
              src="https://sjc.microlink.io/-wipphjYv1LkSHmXjMVBbNU0AosPTnGY2nFTpv_gIlg7IMgLInVwgZ8WTrDXt3MEQhOxtwGY9L83pDULcNzpPQ.jpeg"
              alt="Wallet validation illustration"
              width={600}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}

