import Client from "./client";
import { getServerAuthSession } from "@userbase/lib/auth";

export default async function Page() {
  const session = await getServerAuthSession();

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      {/* <h1>Web</h1>
      <Client /> */}

      <div className="text-7xl">Userbase</div>
      {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
    </div>
  );
}
