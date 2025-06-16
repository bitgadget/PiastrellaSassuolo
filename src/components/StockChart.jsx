import React from "react";

const categorie = [
	{
		nome: "Effetto Marmo",
		mercato: 28,
		piastrellasassuolo: 11.9,
	},
	{
		nome: "Effetto Legno",
		mercato: 24,
		piastrellasassuolo: 9.9,
	},
	{
		nome: "Effetto Pietra",
		mercato: 22,
		piastrellasassuolo: 8.9,
	},
	{
		nome: "Effetto Cemento",
		mercato: 20,
		piastrellasassuolo: 7.9,
	},
];

export default function StockChart() {
	return (
		<div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-neutral-200 p-0 flex flex-col items-center">
			<div className="w-full flex flex-col items-center px-2 py-4 sm:px-6 sm:py-6">
				<h3 className="text-xl font-extrabold mb-1 text-center text-neutral-900 tracking-tight">
					Confronto prezzi al mq per categoria
				</h3>
				<p className="text-center text-neutral-600 text-xs mb-3">
					Media Nazionale vs. piastrellasassuolo.com
				</p>
				{/* Colonne compatte con etichette una sola volta */}
				<div className="w-full flex flex-row justify-center gap-2 sm:gap-4">
					{categorie.map((cat) => {
						const max = Math.max(cat.mercato, cat.piastrellasassuolo);
						const mercatoPerc = (cat.mercato / max) * 100;
						const piasPerc = (cat.piastrellasassuolo / max) * 100;
						return (
							<div
								key={cat.nome}
								className="flex flex-col items-center min-w-[70px] max-w-[90px] flex-1"
							>
								<div className="text-xs font-semibold text-neutral-700 text-center mb-1 whitespace-nowrap">
									{cat.nome}
								</div>
								<div className="flex flex-row gap-1 items-end">
									<div className="flex flex-col items-center">
										<div className="w-7 h-16 bg-neutral-200 rounded-t-lg flex items-end justify-center relative mb-0.5">
											<div
												className="w-full bg-red-500 rounded-t-lg"
												style={{ height: `${mercatoPerc}%` }}
											/>
											<span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white font-bold text-xs">
												{cat.mercato}€
											</span>
										</div>
									</div>
									<div className="flex flex-col items-center">
										<div className="w-7 h-16 bg-neutral-200 rounded-t-lg flex items-end justify-center relative mb-0.5">
											<div
												className="w-full bg-green-600 rounded-t-lg"
												style={{ height: `${piasPerc}%` }}
											/>
											<span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white font-bold text-xs">
												{cat.piastrellasassuolo}€
											</span>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				
				{/* Legenda centrata sotto i grafici */}
				<div className="flex flex-row items-center gap-6 mt-6 justify-center w-full">
					<span className="flex items-center gap-1 text-xs text-neutral-700">
						<span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
						Media Nazionale
					</span>
					<span className="flex items-center gap-1 text-xs text-neutral-700">
						<span className="inline-block w-3 h-3 rounded-full bg-green-600"></span>
						piastrellasassuolo.com
					</span>
				</div>
			</div>
		</div>
	);
}