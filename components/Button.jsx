"use client";

export default function Button({ onClick }) {
  return (
    <>
      <button className=" bg-red-400 py-2 px-4 rounded-lg" type="button" onClick={onClick}>
        Click Me
      </button>
    </>
  );
}
