const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="grid grid-cols-6 gap-4 rotate-12 scale-150 opacity-[0.02]">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="h-12 bg-white/10 rounded-lg"
            style={{
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundPattern 