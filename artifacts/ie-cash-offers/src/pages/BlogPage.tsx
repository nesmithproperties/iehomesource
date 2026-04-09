import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Building2, PhoneCall, ArrowRight, BookOpen, Loader2, AlertCircle } from "lucide-react";

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string;

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedDate: string;
  imageUrl: string | null;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!SPACE_ID || !ACCESS_TOKEN) {
      setError("Contentful credentials are not configured.");
      setLoading(false);
      return;
    }

    const url =
      `https://cdn.contentful.com/spaces/${SPACE_ID}/entries` +
      `?content_type=pageBlogPost` +
      `&access_token=${ACCESS_TOKEN}` +
      `&include=2` +
      `&order=-fields.publishedDate`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Contentful error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const assetMap: Record<string, string> = {};
        (data.includes?.Asset ?? []).forEach((asset: any) => {
          const fileUrl: string = asset.fields?.file?.url ?? "";
          if (fileUrl) {
            assetMap[asset.sys.id] = fileUrl.startsWith("//")
              ? `https:${fileUrl}`
              : fileUrl;
          }
        });

        const mapped: BlogPost[] = (data.items ?? []).map((item: any) => {
          const f = item.fields;
          const imgId: string | undefined = f.featuredImage?.sys?.id;
          return {
            id: item.sys.id,
            title: f.title ?? f.internalName ?? "Untitled",
            slug: f.slug ?? item.sys.id,
            excerpt: f.shortDescription ?? "",
            publishedDate: f.publishedDate ?? item.sys.createdAt?.slice(0, 10) ?? "",
            imageUrl: imgId ? (assetMap[imgId] ?? null) : null,
          };
        });

        setPosts(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message ?? "Failed to load posts.");
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
}

export default function BlogPage() {
  const { posts, loading, error } = useBlogPosts();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-cyan-600" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Inland Empire Home Source
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-5 text-sm font-bold">
            <Link href="/" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/cities" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Cities</Link>
            <Link href="/blog" className="text-cyan-600 uppercase tracking-widest">Blog</Link>
            <Link href="/contact" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Contact Us</Link>
            <a href="tel:9092026006" className="flex items-center gap-2 bg-cyan-600 text-white px-5 py-2.5 rounded-full font-black hover:shadow-xl transition-all">
              <PhoneCall className="h-4 w-4" /> (909) 202-6006
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-36 pb-16 bg-slate-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-[11px] font-black uppercase tracking-widest mb-6">
            <BookOpen className="h-3.5 w-3.5" /> Resources & Guides
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-black tracking-tighter mb-6 uppercase">
            The IE Home Source <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-slate-300 text-lg font-medium leading-relaxed">
            Honest guides to help Inland Empire homeowners navigate selling, probate, foreclosure, and more.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-slate-50 min-h-[40vh]">
        <div className="max-w-6xl mx-auto px-4">

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400">
              <Loader2 className="h-10 w-10 animate-spin mb-4" />
              <p className="font-bold uppercase tracking-widest text-sm">Loading posts…</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-24 text-red-500">
              <AlertCircle className="h-10 w-10 mb-4" />
              <p className="font-bold text-sm">{error}</p>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-24 text-slate-400">
              <BookOpen className="h-10 w-10 mx-auto mb-4" />
              <p className="font-bold uppercase tracking-widest text-sm">No posts found.</p>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {post.imageUrl && (
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    {post.publishedDate && (
                      <p className="text-slate-400 text-xs font-medium mb-3">
                        {formatDate(post.publishedDate)}
                      </p>
                    )}
                    <h2 className="font-serif font-black text-xl tracking-tight text-slate-900 mb-3 leading-snug flex-1">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-cyan-600 font-black text-xs uppercase tracking-widest hover:gap-2.5 transition-all mt-auto"
                    >
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-white text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-black tracking-tighter uppercase mb-4">
            Ready to <span className="text-cyan-400">Sell Your Home?</span>
          </h2>
          <p className="text-slate-400 font-medium mb-8">
            Skip the research — call us. We'll answer all your questions and make a fair cash offer within 24 hours.
          </p>
          <a
            href="tel:9092026006"
            className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-black px-10 py-5 rounded-full transition-all shadow-2xl shadow-cyan-600/30"
          >
            <PhoneCall className="h-5 w-5" />
            (909) 202-6006
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 text-center border-t border-white/10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-4">
          <span className="font-serif font-black text-xl tracking-tighter text-white uppercase">Inland Empire Home Source</span>
        </Link>
        <div className="flex justify-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Inland Empire Home Source • All Rights Reserved
        </p>
      </footer>

    </div>
  );
}
