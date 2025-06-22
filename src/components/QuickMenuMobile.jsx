import React from "react";
import { Lightbulb } from "lucide-react";

export default function QuickMenuMobile({ show, onClose, scrollToCategoria }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-end md:hidden"
      onClick={onClose}
      style={{ background: "rgba(0,0,0,0.35)" }}
    >
      <div
        className="w-full max-w-xs mx-auto mb-4 bg-white rounded-t-2xl p-6 shadow-xl animate-slide-up relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-2xl text-black font-bold"
          onClick={onClose}
          type="button"
          aria-label="Chiudi"
        >
          &times;
        </button>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              setTimeout(() => scrollToCategoria("categoria-legno"), 100);
            }}
            className="flex flex-col items-center justify-center bg-green-50 hover:bg-green-100 rounded-xl p-4 shadow transition w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1605367615038-4e3f139fa991?q=80&w=2125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Effetto Legno"
              className="mb-2 rounded shadow object-cover w-16 h-16"
            />
            <span className="font-semibold text-sm text-green-900">Legno</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              setTimeout(() => scrollToCategoria("categoria-marmo"), 100);
            }}
            className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 rounded-xl p-4 shadow transition w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1558346648-9757f2fa4474?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Effetto Marmo"
              className="mb-2 rounded shadow object-cover w-16 h-16"
            />
            <span className="font-semibold text-sm text-blue-900">Marmo</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              setTimeout(() => scrollToCategoria("categoria-cemento"), 100);
            }}
            className="flex flex-col items-center justify-center bg-neutral-100 hover:bg-neutral-200 rounded-xl p-4 shadow transition w-full"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1733317213152-64f2d68df05c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Effetto Cemento"
              className="mb-2 rounded shadow object-cover w-16 h-16"
            />
            <span className="font-semibold text-sm text-neutral-900">Cemento</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              setTimeout(() => scrollToCategoria("categoria-pietra"), 100);
            }}
            className="flex flex-col items-center justify-center bg-yellow-50 hover:bg-yellow-100 rounded-xl p-4 shadow transition w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Effetto Pietra"
              className="mb-2 rounded shadow object-cover w-16 h-16"
            />
            <span className="font-semibold text-sm text-yellow-900">Pietra</span>
          </button>
        </div>
      </div>
    </div>
  );
}