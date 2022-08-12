export default function Background({ children }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black via-stone-900 to-black ">
      {children}
    </div>
  );
}
