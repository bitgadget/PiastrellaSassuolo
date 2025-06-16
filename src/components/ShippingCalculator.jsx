import React, { useState } from "react";

export default function ShippingCalculator() {
  const [mq, setMq] = useState("");
  const [zona, setZona] = useState("");
  const [costo, setCosto] = useState(null);
  const [loading, setLoading] = useState(false);

  function calcola() {
    const mqNum = parseFloat(mq.replace(",", "."));
    if (isNaN(mqNum) || mqNum <= 0 || !zona) {
      setCosto(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      let base = 40;
      let perMq = 1.5;
      if (zona === "nord") perMq = 2.5;
      if (zona === "centro") perMq = 1.5;
      if (zona === "sud") perMq = 2.5;
      if (zona === "isole") perMq = 4;
      const totale = base + perMq * mqNum;
      setCosto(totale.toFixed(2));
      setLoading(false);
    }, 900);
  }

  return (
    <form
      className="flex flex-col gap-4 items-center"
      onSubmit={e => {
        e.preventDefault();
        setCosto(null);
        setLoading(true);
        calcola();
      }}
    >
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="flex-1 flex flex-col">
          <label htmlFor="mq" className="text-xs text-neutral-600 mb-1">Metri quadri (mq)</label>
          <div className="relative flex">
            <input
              id="mq"
              type="number"
              min={1}
              step={1}
              value={mq}
              onChange={e => setMq(e.target.value)}
              placeholder="Es: 50"
              className="px-4 py-3 rounded-lg border-2 border-green-400/50 focus:border-green-600 outline-none text-lg shadow-sm w-full pr-16"
              required
              disabled={loading}
            />
            <span
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white font-bold rounded-md flex items-center justify-center"
              style={{ width: 38, height: 38, minWidth: 38, minHeight: 38, fontSize: 15 }}
            >
              mq
            </span>
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="zona" className="text-xs text-neutral-600 mb-1">Zona</label>
          <select
            id="zona"
            value={zona}
            onChange={e => setZona(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-green-400/50 focus:border-green-600 outline-none text-lg shadow-sm"
            required
            disabled={loading}
          >
            <option value="">Seleziona una zona</option>
            <option value="nord">Nord Italia</option>
            <option value="centro">Centro Italia</option>
            <option value="sud">Sud Italia</option>
            <option value="isole">Isole</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-green-600 text-white px-8 py-3 font-bold text-lg shadow hover:bg-green-700 transition flex items-center justify-center min-w-[180px]"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg className="animate-spin mr-2" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            Calcolo in corso...
          </>
        ) : (
          "Calcola spedizione"
        )}
      </button>
      {loading && (
        <div className="mt-4 text-green-700 flex items-center gap-2 text-lg font-semibold">
          <svg className="animate-spin" width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="4"></circle>
            <path className="opacity-75" fill="#16a34a" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          Attendere calcolo...
        </div>
      )}
      {costo && !loading && (
        <div className="mt-4 text-xl font-bold text-green-700 bg-green-100 rounded-lg px-6 py-3 shadow text-center">
          Costo stimato spedizione:
          <br className="block sm:hidden" />
          <span className="text-green-900 block sm:inline">{costo} €</span>
        </div>
      )}
      <style>
        {`
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </form>
  );
}