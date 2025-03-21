import Image from "next/image"

export function WalletIllustration() {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        src="/placeholder.svg?height=400&width=600"
        alt="Wallet validation illustration"
        fill
        className="object-contain"
      />
    </div>
  )
}

