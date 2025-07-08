import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { PackageSearch, Loader2 } from "lucide-react";

export default function InventoryAdmin() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore] = useState(null);
  const [search, setSearch] = useState("");

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
            quantita: Number(row[1])
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-green-400/20 to-green-100 rounded-2xl p-6 flex flex-col items-center shadow border border-green-200">
            <span className="text-xs text-green-800 font-semibold uppercase mb-1 tracking-widest">Prodotti</span>
            <span className="text-3xl font-extrabold text-green-900">{totaleProdotti}</span>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-blue-100 rounded-2xl p-6 flex flex-col items-center shadow border border-blue-200">
            <span className="text-xs text-blue-800 font-semibold uppercase mb-1 tracking-widest">Totale m²</span>
            <span className="text-3xl font-extrabold text-blue-900">{totaleMq.toLocaleString("it-IT")}</span>
          </div>
          <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-100 rounded-2xl p-6 flex flex-col items-center shadow border border-yellow-200">
            <span className="text-xs text-yellow-800 font-semibold uppercase mb-1 tracking-widest">Ultimo aggiornamento</span>
            <span className="text-base text-yellow-900">{new Date().toLocaleDateString()}</span>
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
            <input
              type="text"
              placeholder="Cerca prodotto..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="mb-6 px-4 py-2 border rounded-lg w-full max-w-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 text-black"
            />
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-lg bg-white/95">
              <table className="min-w-full bg-transparent">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-700">
                    <th className="px-6 py-4 text-left font-bold text-black text-lg">Nome prodotto</th>
                    <th className="px-6 py-4 text-left font-bold text-black text-lg">Quantità (m²)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((r, i) => (
                    <tr
                      key={i}
                      className={`transition ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"} hover:bg-green-50 ${
                        r.quantita < 51 ? "bg-red-100" : ""
                      }`}
                    >
                      <td className="px-6 py-3 border-b border-neutral-100 font-semibold text-black text-base">
                        {r.nome}
                      </td>
                      <td className={`px-6 py-3 border-b border-neutral-100 text-base font-semibold ${r.quantita < 51 ? "text-red-700" : "text-black"}`}>
                        {r.quantita}
                        {r.quantita < 51 && <span title="Scorta bassa" className="ml-2 text-red-500">⚠️</span>}
                      </td>
                    </tr>
                  ))}
                  {filteredRows.length === 0 && (
                    <tr>
                      <td colSpan={2} className="text-center text-neutral-400 py-8 text-lg">Nessun prodotto disponibile</td>
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