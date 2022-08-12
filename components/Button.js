export default function Button({ onclick, text }) {
  return (
    <div>
      <div>
        <button
          onClick={onclick}
          className="text-white mx-auto hover:bg-stone-500 px-3 py-2 border-white border-2 rounded-sm text-sm font-medium cursor-pointer"
        >
          {text}
        </button>
      </div>
    </div>
  );
}
