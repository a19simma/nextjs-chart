export default function Loader({ show }) {
  return show ? (
    <div className="relative m-auto top-1/2 animate-spin rounded-full border-transparent border-t-purple-800 border-8 w-32 h-32"></div>
  ) : null;
}
