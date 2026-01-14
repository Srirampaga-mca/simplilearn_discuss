export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="font-bold text-xl tracking-tight">
            BrandName
        </div>

        {/* Navigation - Hidden on mobile, Flex on desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition">Features</a>
            <a href="#" className="hover:text-black transition">Pricing</a>
            <a href="#" className="hover:text-black transition">About</a>
        </nav>

        {/* CTA Button */}
        <button className="text-sm font-medium bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition">
            Get Started
        </button>
      </div>
    </header>
  );
}