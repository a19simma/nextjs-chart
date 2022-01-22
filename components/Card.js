export default function () {
  return (
    <div className="bg-sky-200 rounded-lg p-6 shadow-xl hover:bg-sky-300">
      <slot className="text-xm font-bold">Hello From a Card</slot>
      <p className="text-xs">More text, but smaller</p>
    </div>
  );
}
