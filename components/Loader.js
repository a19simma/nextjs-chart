export default function Loader({ show }) {
  return show ? (
    <div className="className={`relative h-[calc(100%-5rem)]">
      <div className="relative mx-auto top-[calc(50%-6rem)] animate-spin rounded-full border-transparent border-t-purple-800 border-8 w-36 h-36"></div>
    </div>
  ) : null;
}
