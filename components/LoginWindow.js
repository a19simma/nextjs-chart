export default function ({ visible }) {
  const visibleStates = { false: "hidden", true: "visible" };
  return (
    <div
      className={
        "float-right m-auto p-4 bg-slate-200 border-4 border-slate-900 rounded-md " +
        visibleStates[visible]
      }
    >
      <form>
        <label>Email:</label>
        <br />
        <input type="email" placeholder="email@example.com"></input>
        <br />
        <label>Password:</label>
        <br />
        <input type="password" placeholder="password"></input>
        <br />
        <input
          type="submit"
          value="Submit"
          className="mt-3 mx-auto hover:bg-gray-700 hover:text-white px-3 py-2 border-slate-800 border-2 rounded-sm text-sm font-medium cursor-pointer"
        ></input>
      </form>
    </div>
  );
}
