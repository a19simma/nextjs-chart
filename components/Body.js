export default function Body({ title, children }) {
  return (
    <div className="relative m-auto border-y-8 md:w-3/5 bg-gray-200 md:border-8 border-slate-800 md:rounded-lg">
      <div className="py-1 h-15 bg-gray-400">
        <h2 className="px-2 font-medium text-2xl">{title}</h2>
      </div>
      <div className="p-2 m-auto">{children}</div>
    </div>
  );
}
