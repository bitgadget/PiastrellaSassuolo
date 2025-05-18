import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(null);
  // Stato per mostrare solo l’anteprima
  const previewCount = 3;

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

  if (selected) {
    return (
      <section id="blog" className="relative z-10 px-8 py-24 max-w-3xl mx-auto">
        <button
          className="mb-6 text-[#eaff00] hover:underline"
          onClick={() => setSelected(null)}
        >
          ← Torna al blog
        </button>
        <h2 className="text-3xl font-bold mb-2">{selected.TITOLO}</h2>
        <div className="mb-2 text-neutral-400 text-sm">
          {selected.CATEGORIE}
          {selected.TAGS && <> · {selected.TAGS}</>}
        </div>
        {selected.IMMAGINI && (
          <img
            src={selected.IMMAGINI.split(",")[0]}
            alt={selected.TITOLO}
            className="mb-6 rounded-lg max-h-72 object-cover w-full"
          />
        )}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: selected.CONTENUTO }}
        />
        {/* RIMOSSA LA SEZIONE SEO */}
      </section>
    );
  }

  // Mostra solo anteprima dei primi 2-3 articoli
  const previewPosts = posts.slice(0, previewCount);

  return (
    <section id="blog" className="relative z-10 px-8 py-24 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">Dal nostro Blog</h3>
      <div className="grid gap-8">
        {previewPosts.map((post) => (
          <Link
            to={`/blog/${post.SLUG}`}
            key={post.SLUG}
            className="border border-neutral-800 rounded-xl p-0 bg-neutral-900/70 hover:border-[#eaff00] transition flex flex-col sm:flex-row cursor-pointer no-underline"
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
                  className="text-neutral-300 text-sm mb-3"
                  dangerouslySetInnerHTML={{
                    __html: post["SHORT CONTENT"] || "",
                  }}
                />
              </div>
              <span className="inline-block mt-2 text-[#eaff00] font-semibold hover:underline text-sm">
                Leggi tutto →
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/blog"
          className="rounded-md font-semibold px-8 py-3 text-neutral-900"
          style={{ background: "#eaff00" }}
        >
          Vai al blog
        </Link>
      </div>
    </section>
  );
}

export function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/blog.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const found = results.data.find((p) => p.SLUG === slug);
            setPost(found);
          },
        });
      });
  }, [slug]);

  if (!post) return <div className="text-center py-24 text-white bg-neutral-900 min-h-screen font-sans">Caricamento...</div>;

  return (
    <div className="bg-neutral-900 text-white font-sans min-h-screen">
      <section className="relative z-10 px-8 py-24 max-w-3xl mx-auto">
        <Link to="/blog" className="mb-6 inline-block text-[#eaff00] hover:underline">
          ← Torna al blog
        </Link>
        <h2 className="text-3xl font-bold mb-2">{post.TITOLO}</h2>
        <div className="mb-2 text-neutral-400 text-sm">
          {post.CATEGORIE}
          {post.TAGS && <> · {post.TAGS}</>}
        </div>
        {post.IMMAGINI && (
          <img
            src={post.IMMAGINI.split(",")[0]}
            alt={post.TITOLO}
            className="mb-6 rounded-lg max-h-72 object-cover w-full"
          />
        )}
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.CONTENUTO }}
        />
        {/* Nessuna sezione SEO qui */}
      </section>
    </div>
  );
}