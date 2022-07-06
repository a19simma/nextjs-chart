export default function (props) {
  return (
    <div className="grid grid-cols-1 w-2/3 sm:grid-cols-2 lg:grid-cols-3 gap-3 m-auto  max-w-7xl">
      {props.children}
    </div>
  );
}
