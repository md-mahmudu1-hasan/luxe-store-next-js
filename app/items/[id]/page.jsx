import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Truck,
  Shield,
  Star,
  Share2,
  Heart,
} from "lucide-react";
import { notFound } from "next/navigation";

async function getItem(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  const price = (item.id * 15.99).toFixed(2);
  const fakeRating = (Math.random() * 2 + 3).toFixed(1);
  const reviewsCount = Math.floor(Math.random() * 500) + 50;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link
        href="/items"
        className="text-neutral-400 hover:text-white flex items-center gap-2 mb-8 transition-colors inline-block text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-neutral-800 rounded-2xl overflow-hidden border border-white/5 relative group">
            <img
              src={`https://picsum.photos/seed/${item.id}/800/800`}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-neutral-800 rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity border border-white/5 hover:border-blue-500"
              >
                <img
                  src={`https://picsum.photos/seed/${item.id + i * 100}/200/200`}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">
              Premium Collection
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-2 font-bold text-white">{fakeRating}</span>
              <span className="text-neutral-500 text-sm ml-1">
                ({reviewsCount} Reviews)
              </span>
            </div>
            <div className="w-1 h-1 bg-neutral-700 rounded-full" />
            <div className="text-green-400 text-sm font-medium flex items-center gap-1">
              <Check className="w-4 h-4" /> In Stock
            </div>
          </div>

          <div className="text-4xl font-bold text-white mb-8">${price}</div>

          <p className="text-neutral-300 leading-relaxed mb-8 text-lg">
            {item.body} {item.body} {item.body}. This premium item has been
            crafted with the utmost attention to detail, ensuring both style and
            durability for the discerning owner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-white/10">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
              <Truck className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-bold text-white font-sm">
                  Free Express Shipping
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  On all orders over $500
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
              <Shield className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h3 className="font-bold text-white font-sm">
                  2 Year Warranty
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Full coverage included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
