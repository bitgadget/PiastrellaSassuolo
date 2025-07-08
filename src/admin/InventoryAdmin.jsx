import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { PackageSearch, Loader2, ArrowUpDown, BarChart3, Layers3, CalendarDays } from "lucide-react";

export default function InventoryAdmin() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null); // null, "asc", "desc"

  useEffect(() => {
    fetch("/prodotti/prodotti.xlsx")
      .then(res => {
        if (!res.ok) throw new Error("File non trovato");
        return res.arrayBuffer();
      })
      .then(buffer => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        let json = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const dataRows = json
          .slice(1)
          .filter(row => row && row[0] && row[1] && Number.isFinite(Number(row[1])))
          .map(row => ({
            nome: row[0],
            quantita: Number(row[1]),
            formato: row[2] || "",
            categoria: row[3] || ""
          }));

        setRows(dataRows);
        setLoading(false);
      })
      .catch(err => {
        setErrore("Impossibile caricare l'inventario.");
        setLoading(false);
      });
  }, []);

  // Calcoli dashboard
  const totaleProdotti = rows.length;
  const totaleMq = rows.reduce((acc, r) => {
    const q = Number(r.quantita);
    return acc + (Number.isFinite(q) ? q : 0);
  }, 0);

  const filteredRows = rows.filter(r => r.nome.toLowerCase().includes(search.toLowerCase()));

  // Ordinamento quantità
  const sortedRows = React.useMemo(() => {
    if (!sortOrder) return filteredRows;
    return [...filteredRows].sort((a, b) =>
      sortOrder === "asc"
        ? a.quantita - b.quantita
        : b.quantita - a.quantita
    );
  }, [filteredRows, sortOrder]);

  const handleSort = () => {
    setSortOrder(prev =>
      prev === "asc" ? "desc" : prev === "desc" ? null : "asc"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f0fe] via-white to-[#d1fae5] p-0 md:p-8">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-4 md:p-12 mt-8 border border-neutral-200">
        {/* LOGO IN ALTO */}
        <div className="flex flex-col items-center mb-8">
          <a href="/" className="focus:outline-none" title="Torna alla home">
            <img
              src="/logo.png"
              alt="Logo PiastrellaSassuolo"
              className="h-16 w-16 rounded-full bg-white p-2 shadow border border-neutral-200 transition-transform hover:scale-105"
              style={{ minWidth: 64 }}
            />
          </a>
          <span className="font-bold text-2xl tracking-tight text-black mt-3">PiastrellaSassuolo</span>
        </div>
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-green-100 rounded-full p-3 shadow">
            <PackageSearch size={40} className="text-green-700" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-green-800 tracking-tight leading-tight mb-1">
              Dashboard Inventario
            </h1>
            <p className="text-neutral-500 text-base font-medium">
              Visualizza lo stato aggiornato dei prodotti a magazzino.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {/* CARD 1: Prodotti */}
          <div className="relative flex flex-col items-center justify-center bg-white/60 backdrop-blur-lg border border-green-200 rounded-3xl shadow-xl p-6 sm:p-8 mb-4 sm:mb-0 transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-200 shadow-lg mb-3 sm:mb-4 animate-pulse-slow">
              <Layers3 size={32} className="sm:size-40 text-white drop-shadow-lg" />
            </div>
            <div className="text-3xl sm:text-5xl font-black text-green-700 drop-shadow-lg mb-1 sm:mb-2">{totaleProdotti}</div>
            <div className="text-sm sm:text-base font-bold text-green-900 tracking-wide uppercase mb-1">Prodotti</div>
            <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold shadow">Totale articoli</span>
          </div>

          {/* CARD 2: Totale m² */}
          <div className="relative flex flex-col items-center justify-center bg-white/60 backdrop-blur-lg border border-blue-200 rounded-3xl shadow-xl p-6 sm:p-8 mb-4 sm:mb-0 transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-200 shadow-lg mb-3 sm:mb-4 animate-pulse-slow">
              <BarChart3 size={32} className="sm:size-40 text-white drop-shadow-lg" />
            </div>
            <div className="text-3xl sm:text-5xl font-black text-blue-700 drop-shadow-lg mb-1 sm:mb-2">{totaleMq.toLocaleString("it-IT")}</div>
            <div className="text-sm sm:text-base font-bold text-blue-900 tracking-wide uppercase mb-1">Superficie</div>
            <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold shadow">Totale m²</span>
          </div>

          {/* CARD 3: Ultimo aggiornamento */}
          <div className="relative flex flex-col items-center justify-center bg-white/60 backdrop-blur-lg border border-yellow-200 rounded-3xl shadow-xl p-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 shadow-lg mb-3 sm:mb-4 animate-pulse-slow">
              <CalendarDays size={32} className="sm:size-40 text-white drop-shadow-lg" />
            </div>
            <div className="text-lg sm:text-2xl font-black text-yellow-900 drop-shadow-lg mb-1 sm:mb-2">{new Date().toLocaleDateString()}</div>
            <div className="text-sm sm:text-base font-bold text-yellow-900 tracking-wide uppercase mb-1">Ultimo aggiornamento</div>
            <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-yellow-100 text-yellow-900 rounded-full text-xs font-semibold shadow">Data odierna</span>
          </div>
        </div>
        {loading && (
          <div className="flex items-center gap-2 text-green-700 font-semibold my-12 justify-center text-lg">
            <Loader2 className="animate-spin" /> Caricamento in corso...
          </div>
        )}
        {errore && <div className="text-red-600 mb-4 text-center">{errore}</div>}
        {!loading && !errore && (
          <>
            <div className="relative mb-6 w-full max-w-xs">
              <input
                type="text"
                placeholder="Cerca prodotto..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 text-black"
              />
              <span className="absolute left-3 top-2.5 text-green-400">
                <PackageSearch size={20} />
              </span>
            </div>
            {search && (
              <div className="mb-4 flex gap-6 items-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Prodotti trovati: {filteredRows.length}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Totale m²: {filteredRows.reduce((acc, r) => acc + (Number.isFinite(Number(r.quantita)) ? Number(r.quantita) : 0), 0).toLocaleString("it-IT")}
                </span>
              </div>
            )}
            <div className="overflow-x-auto max-h-[60vh] overflow-y-auto rounded-2xl border border-neutral-200 shadow-2xl bg-white/95">
              <table className="min-w-full bg-transparent">
                <thead className="sticky top-0 z-10 bg-neutral-100/95 backdrop-blur table-header-group">
                  <tr className="bg-neutral-100 text-neutral-700">
                    <th
                      className="px-2 py-2 sm:px-6 sm:py-4 text-left font-bold text-black text-base sm:text-lg cursor-pointer select-none flex items-center gap-2"
                      onClick={handleSort}
                      title="Ordina per quantità"
                      style={{ userSelect: "none" }}
                    >
                      <span title="Nome commerciale del prodotto">Nome prodotto</span>
                      <ArrowUpDown
                        size={20}
                        className={`inline transition-transform ${
                          sortOrder === "asc"
                            ? "rotate-180 text-green-700"
                            : sortOrder === "desc"
                            ? "text-green-700"
                            : "text-neutral-400"
                        }`}
                      />
                    </th>
                    <th className="px-2 py-2 sm:px-6 sm:py-4 text-base sm:text-lg" title="Formato del prodotto">Formato</th>
                    <th className="px-2 py-2 sm:px-6 sm:py-4 text-base sm:text-lg" title="Superficie disponibile in magazzino">Quantità (m²)</th>
                    <th className="px-2 py-2 sm:px-6 sm:py-4 text-base sm:text-lg" title="Categoria del prodotto">Categoria</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedRows.map((r, i) => (
                    <tr
                      key={i}
                      className={`transition border-l-4 ${
                        r.quantita < 51 ? "border-red-400" : "border-transparent"
                      } ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"} hover:bg-green-100 focus-within:ring-2 focus-within:ring-green-300`}
                    >
                      {/* Nome prodotto */}
                      <td className="px-2 py-2 sm:px-6 sm:py-3 border-b border-neutral-100 font-semibold text-black text-sm sm:text-base break-words">
                        <a
                          href={`https://www.google.com/search?q=${encodeURIComponent(r.nome)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-green-700 hover:text-green-900 transition-colors"
                          title={`Cerca "${r.nome}" su Google`}
                        >
                          {r.nome}
                        </a>
                      </td>
                      {/* Formato */}
                      <td className="px-2 py-2 sm:px-6 sm:py-3 border-b border-neutral-100 text-sm sm:text-base text-black">
                        {r.formato}
                      </td>
                      {/* Quantità */}
                      <td className={`px-2 py-2 sm:px-6 sm:py-3 border-b border-neutral-100 font-semibold text-sm sm:text-base ${r.quantita < 51 ? "text-red-700" : "text-black"}`}>
                        {r.quantita}
                        {r.quantita < 51 && (
                          <span title="Scorta bassa" className="ml-2 text-red-500 animate-pulse">⚠️</span>
                        )}
                      </td>
                      {/* Categoria */}
                      <td className="px-2 py-2 sm:px-6 sm:py-3 border-b border-neutral-100 text-sm sm:text-base text-black">
                        {r.categoria}
                      </td>
                    </tr>
                  ))}
                  {sortedRows.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center text-neutral-400 py-8 text-lg">Nessun prodotto disponibile</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="mt-10 text-xs text-neutral-400 text-center">
          Accesso riservato. Pagina non indicizzata e non linkata pubblicamente.
        </div>
      </div>
    </div>
  );
}

/* Aggiungi questa animazione custom in CSS globale o tailwind.config.js */
<style>
{`
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.animate-pulse-slow {
  animation: pulse-slow 2.5s infinite;
}
`}
</style>