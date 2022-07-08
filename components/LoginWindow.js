import Button from "./Button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ({ visible }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div
        className={`float-right -mr-10 mt-10 p-4 bg-slate-200 border-4 border-slate-900 rounded-md ${
          visible ? "visible" : "hidden"
        }`}
      >
        <Button text="Sign In" onclick={() => signIn()} />
      </div>
    );
  }
  return (
    <div
      className={`float-right -mr-10 mt-10 p-4 bg-slate-200 border-4 border-slate-900 rounded-md ${
        visible ? "visible" : "hidden"
      }`}
    >
      <Button text="Sign out" onclick={() => signOut()} />
    </div>
  );
}
