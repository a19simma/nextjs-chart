export default function Body({ children }) {
  return (
    <div className="relative m-auto border-y-8 md:w-3/5 bg-black md:rounded-sm">
      <div className="p-3 m-auto text-gray-200">{children}</div>
    </div>
  );
}
