import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Star,
  Zap,
  TrendingUp,
  Award,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";

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

export default async function Home() {
  const items = await getItems();

  const featuredItems = items.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay" />

        <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in zoom-in duration-1000">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-md">
            The Future of Shopping is Here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-neutral-500">
            Elevate Your Lifestyle
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover a curated collection of premium items designed to inspire
            and endure. Quality meets aesthetic in every piece.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/items"
              className="bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-500/20 flex items-center gap-2 text-lg px-8 py-4 rounded-full"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="bg-neutral-800 text-neutral-300 font-medium hover:bg-neutral-700 transition-all active:scale-95 border border-neutral-700 text-lg px-8 py-4 rounded-full"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Features/Benefits */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Secure Payments",
              desc: "Bank-grade encryption for all transactions.",
            },
            {
              icon: Truck,
              title: "Fast Shipping",
              desc: "Global delivery within 3-5 business days.",
            },
            {
              icon: Star,
              title: "Premium Quality",
              desc: "Hand-picked items verified for authenticity.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="premium-card p-8 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Collection Preview */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Trending Now</h2>
          <Link
            href="/items"
            className="text-blue-500 hover:text-blue-400 flex items-center gap-1"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="premium-card rounded-xl overflow-hidden group"
            >
              <div className="h-48 bg-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={`https://picsum.photos/seed/${item.id}/400/300`}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="w-full h-full bg-neutral-900 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-1">Premium Item {item.title}</h4>
                <p className="text-sm text-neutral-400 mb-3">Limited Edition</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-bold">$199.00</span>
                  <button className="p-2 bg-white/10 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="border-y border-white/5 bg-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Products", value: "1.2K+" },
            { label: "Countries", value: "25" },
            { label: "Rating", value: "4.9/5" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us (Detailed) */}
      <section className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-white/10">
          <Award className="w-12 h-12 text-blue-500 mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Excellence in Every Detail
          </h2>
          <p className="text-neutral-400 mb-6 leading-relaxed">
            We don't just sell products; we curate experiences. Our strict
            quality control ensures that only the finest items make it to our
            catalog.
          </p>
          <ul className="space-y-4">
            {[
              "Authenticity Guaranteed",
              "24/7 Concierge Support",
              "30-Day Money Back",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-30" />
          <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
            <p className="text-neutral-400">
              "Our mission is to bring premium design and functionality to your
              doorstep, bridging the gap between luxury and accessibility."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 bg-neutral-800 rounded-full" />
              <div>
                <div className="font-bold">Alex Morgan</div>
                <div className="text-xs text-neutral-500">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <div className="mb-4 text-blue-500 font-medium">Testimonials</div>
        <h2 className="text-xl md:text-3xl font-bold mb-12">
          Trusted by Designers Worldwide
        </h2>
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="text-2xl text-blue-500 mb-6">★★★★★</div>
          <p className="text-lg md:text-xl text-neutral-300 italic mb-8">
            "The quality of items I've purchased here is unmatched. The platform
            provides a seamless and luxurious shopping experience from start to
            finish."
          </p>
          <div className="font-bold">Sarah Jenkins</div>
          <div className="text-sm text-neutral-500">Interior Designer</div>
        </div>
      </section>

      {/* 7. Newsletter CTA */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the Exclusive Club
            </h2>
            <p className="text-blue-200 mb-8 max-w-lg mx-auto">
              Subscribe to get early access to new drops, exclusive offers, and
              design tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 rounded-full bg-white text-blue-900 font-bold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
