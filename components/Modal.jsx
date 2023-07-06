export default function Modal({ isOpen, isClosed }) {
  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 flex items-center justify-center z-10">
          <div className=" bg-white h-60 w-60 p-4 rounded-lg shadow-lg">
            <h1>modal content</h1>
            <button onClick={isClosed}>X</button>
          </div>
        </div>
      )}
    </>
  );
}
