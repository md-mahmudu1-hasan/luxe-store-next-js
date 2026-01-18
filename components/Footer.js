export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-400">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">LuxeStore</h3>
            <p className="text-sm">
              Discover the extraordinary in everyday items. Curated for the
              discerning.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/items"
                  className="hover:text-blue-500 transition-colors"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-blue-500 transition-colors"
                >
                  Account
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} LuxeStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
