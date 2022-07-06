export default function ({text}) {
  return (
    <div>
      <div>
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-sm text-sm font-medium">
          {text}
        </button>
      </div>
    </div>
  );
}
