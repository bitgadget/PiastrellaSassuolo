import { motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Package,
  Printer,
  Truck,
  Rocket,
  Star,
} from "lucide-react";

/**
 * Workflow timeline – versione con linea verticale che unisce i punti
 * --------------------------------------------------
 * • Layout alternato (zig-zag) su desktop, lineare su mobile.
 * • Linea centrale al neon (#eaff00) che attraversa l'intera sezione.
 * • Puntini di connessione (badge) perfettamente sovrapposti alla linea.
 * • Reveal a cascata via Framer Motion.
 */

const steps = [
  {
    title: "Brief & Concept",
    description: "Raccogliamo le tue idee e definiamo gli obiettivi di progetto.",
    Icon: Lightbulb,
  },
  {
    title: "Design & CAD",
    description: "Trasformiamo il concept in modelli 3D pronti alla prototipazione.",
    Icon: PenTool,
  },
  {
    title: "Prototipazione rapida",
    description: "Stampa 3D e verifica funzionale del modello.",
    Icon: Printer,
  },
  {
    title: "Iterazioni & feedback",
    description: "Affiniamo il prodotto insieme a te, fino alla perfezione.",
    Icon: Star,
  },
  {
    title: "Packaging & brand",
    description: "Studiamo l’unboxing e l’identità visiva che lo accompagna.",
    Icon: Package,
  },
  {
    title: "Produzione",
    description: "Avviamo la produzione in serie mantenendo standard qualitativi elevati.",
    Icon: Rocket,
  },
  {
    title: "Consegna",
    description: "Spediamo (just-in-time) in tutto il mondo, pronti per il lancio.",
    Icon: Truck,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Linea verticale neon */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[3px] -translate-x-1/2 bg-[#eaff00]"
      />

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-16"
      >
        {steps.map(({ title, description, Icon }, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.li
              key={title}
              variants={itemVariants}
              className={`group relative flex w-full flex-col items-${isEven ? "end" : "start"} sm:flex-row sm:items-center ${
                isEven ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              {/* Punto di connessione alla linea */}
              <span
                className="absolute left-1/2 top-[50%] h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eaff00] shadow-[0_0_12px_4px_rgba(234,255,0,0.75)]"
                aria-hidden
              />

              {/* Card */}
              <div
                className="relative w-full max-w-md rounded-2xl border border-[#3d3d3d] bg-[#141414]/80 p-6 backdrop-blur transition-all duration-300 group-hover:shadow-[0_0_20px_3px_rgba(234,255,0,0.35)] sm:w-1/2"
              >
                {/* Badge icona */}
                <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#565656] bg-[#1e1e1e] text-[#eaff00] shadow-[0_0_8px_2px_rgba(234,255,0,0.35)]">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mb-2 mt-2 text-lg font-semibold tracking-tight text-[#eaff00]">
                  {`0${i + 1}`.slice(-2)}. {title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-300">{description}</p>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
