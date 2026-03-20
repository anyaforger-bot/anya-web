import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0010] flex items-center justify-center p-6">
      <div className="glass-card rounded-2xl p-10 max-w-lg w-full text-center space-y-6 glow-border-purple">

        {/* ASCII Anya face */}
        <div className="font-mono text-4xl text-purple-400 select-none">
          (；′⌒`)
        </div>

        {/* 404 number */}
        <div className="font-mono text-6xl font-black text-purple-300 tracking-widest">
          404
        </div>

        {/* Headline */}
        <h1 className="shimmer-text font-mono text-xl font-bold">
          Anya could not find this page
        </h1>

        {/* Waku waku message */}
        <p className="text-gray-400 font-mono text-sm leading-relaxed">
          WAKU WAKU... but sadly this mission location does not exist.
          <br />
          Even Anya&apos;s telepathy can&apos;t locate what you&apos;re looking for. 🔮
        </p>

        {/* Clearance note */}
        <div className="font-mono text-xs text-purple-700 border border-purple-900/40 rounded-lg px-4 py-2">
          ⚠ PAGE STATUS: NOT FOUND · CLEARANCE LEVEL: IRRELEVANT
        </div>

        {/* Home button */}
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full border border-purple-500/60 text-purple-300 hover:border-purple-400 hover:text-white hover:shadow-[0_0_20px_#b347ff44] transition-all duration-300 font-mono text-sm"
        >
          ← Return to Main Base
        </Link>

      </div>
    </main>
  )
}
