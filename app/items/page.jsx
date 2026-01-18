import Link from "next/link";
import { ArrowLeft, ShoppingBag, Filter } from "lucide-react";

async function getItems() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12",
    {
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 text-white">
        <div>
          <Link
            href="/"
            className="text-neutral-400 hover:text-white flex items-center gap-2 mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Premium Marketplace</h1>
          <p className="text-neutral-400 mt-2">
            Explore our curated collection of exclusive items.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link
            href={`/items/${item.id}`}
            key={item.id}
            className="premium-card rounded-xl overflow-hidden group flex flex-col h-full"
          >
            <div className="h-56 bg-neutral-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={`https://picsum.photos/seed/${item.id}/400/300`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white z-20 border border-white/10">
                New Arrival
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                {item.title.charAt(0).toUpperCase() +
                  item.title.slice(1).slice(0, 20)}
                ...
              </h2>
              <p className="text-sm text-neutral-400 line-clamp-2 mb-4 flex-grow">
                {item.body}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xl font-bold text-white">
                  ${(item.id * 15.99).toFixed(2)}
                </span>
                <span className="text-xs text-blue-400 font-medium hover:underline">
                  View Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
