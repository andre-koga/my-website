export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-8 rounded-lg bg-white/5 p-4 backdrop-blur-xs sm:p-8">
        {children}
      </div>
    </div>
  );
}
