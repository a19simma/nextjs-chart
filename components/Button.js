export default function ({ onclick, text }) {
  return (
    <div>
      <div>
        <button
          onClick={onclick}
          className="mx-auto hover:bg-gray-700 hover:text-white px-3 py-2 border-slate-800 border-2 rounded-sm text-sm font-medium cursor-pointer"
        >
          {text}
        </button>
      </div>
    </div>
  );
}
