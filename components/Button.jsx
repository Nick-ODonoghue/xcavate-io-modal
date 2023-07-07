"use client";

export default function Button({ onClick }) {
  return (
    <>
      <button
        className=" font-bold border-2 border-slate-50 py-2 px-4 rounded-lg transition-all duration-300 hover:border-slate-950 hover:text-slate-50"
        type="button"
        onClick={onClick}
      >
        Click Me
      </button>
    </>
  );
}
