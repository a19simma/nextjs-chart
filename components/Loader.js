export default function ({ show }) {
  return show ? (
    <div className="animate-spin rounded-full border-t-purple-500 border-4 h-5 w-5 m-2"></div>
  ) : null;
}
