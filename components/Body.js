export default function Body({ title, children }) {
  return (
    <div className="relative m-auto border-y-8 md:w-3/5 bg-black md:border-8 border-stone-200 md:rounded-lg">
      <div className="py-1 h-15 bg-stone-500">
        <h2 className="px-2 text-gray-200 font-medium text-2xl">{title}</h2>
      </div>
      <div className="p-2 m-auto">{children}</div>
    </div>
  );
}
