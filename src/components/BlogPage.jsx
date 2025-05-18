import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/blog.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setPosts(results.data),
        });
      });
  }, []);

  return (
    <div className="bg-neutral-900 text-white font-sans min-h-screen">
      <Header />
      <section className="relative z-10 px-8 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Tutti gli articoli</h2>
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.SLUG}
              className="border border-neutral-800 rounded-xl p-0 bg-neutral-900/70 hover:border-[#eaff00] transition flex flex-col sm:flex-row"
            >
              {post.IMMAGINI && (
                <img
                  src={post.IMMAGINI.split(",")[0]}
                  alt={post.TITOLO}
                  className="w-full sm:w-48 h-40 object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none bg-neutral-800"
                  loading="lazy"
                />
              )}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#eaff00] leading-tight">
                    {post.TITOLO}
                  </h4>
                  <div className="text-neutral-400 text-xs mb-2">
                    {post.CATEGORIE}
                    {post.TAGS && <> · {post.TAGS}</>}
                  </div>
                  <div
                    className="prose prose-invert text-neutral-300 text-sm mb-3"
                    dangerouslySetInnerHTML={{
                      __html: post["SHORT CONTENT"] || "",
                    }}
                  />
                </div>
                <Link
                  to={`/blog/${post.SLUG}`}
                  className="inline-block mt-2 text-[#eaff00] font-semibold hover:underline text-sm"
                >
                  Leggi tutto →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/"
            className="rounded-md font-semibold px-8 py-3 text-neutral-900"
            style={{ background: "#eaff00" }}
          >
            Torna alla home
          </Link>
        </div>
      </section>
    </div>
  );
}