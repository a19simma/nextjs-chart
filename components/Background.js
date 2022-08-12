export default function Background({ children }) {
  return (
    <div className="mt-10 min-h-[calc(100vh_-_5rem)] bg-gradient-to-b from-gray-800 via-gray-400 to-gray-800 ">
      {children}
    </div>
  );
}
