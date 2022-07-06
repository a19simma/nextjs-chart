export default function ({ text, href }) {
  return (
    <div>
      <a
        className="float-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-sm text-md font-medium"
        href={href}
      >
        {text}
      </a>
    </div>
  );
}
