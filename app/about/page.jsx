import Link from "next/link";
import Image from "next/image";
import { Award, Users, Globe, Heart } from "lucide-react";

export const metadata = {
  title: "About Us - LuxeStore",
  description: "Learn about our journey, values, and commitment to quality.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black/80 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071')] bg-cover bg-center opacity-20 mix-blend-overlay" />

        <div className="relative z-10 text-center max-w-4xl px-4 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-neutral-500">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Redefining luxury through craftsmanship, innovation, and a passion
            for excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Crafting the <span className="text-blue-500">Extraordinary</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Founded in 2024, LuxeStore began with a simple yet ambitious
              vision: to bridge the gap between premium design and accessible
              luxury. We believe that everyone deserves to experience the joy of
              owning items that are not just functional, but truly beautiful.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Our team of curators and designers travel the globe to source
              unique pieces that tell a story. From artisanal home decor to
              cutting-edge tech accessories, every item in our collection is
              handt-picked for its quality and aesthetic appeal.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301"
                alt="Our Office"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white/5 border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every product we
              offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                desc: "We never compromise on materials or craftsmanship. Excellence is our standard.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                desc: "Your satisfaction is our priority. We are here to serve and delight you.",
              },
              {
                icon: Globe,
                title: "Sustainability",
                desc: "We are committed to eco-friendly practices and ethical sourcing.",
              },
              {
                icon: Heart,
                title: "Passion",
                desc: "We love what we do, and that energy flows into everything we create.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-neutral-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Join Our Journey
          </h2>
          <p className="text-xl text-neutral-400">
            Be part of a community that appreciates the finer things in life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/items"
              className="bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all px-8 py-4 rounded-full text-lg shadow-lg shadow-blue-500/25"
            >
              Shop Collection
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 transition-all px-8 py-4 rounded-full text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
