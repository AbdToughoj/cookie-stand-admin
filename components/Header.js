import Link from "next/link";
import { useAuth } from "@/contexts/auth"

export default function Header() {
  const { user, login, token ,logout} = useAuth()
  return (
    <header className="flex items-center justify-between p-4 text-white bg-green-500">
      <h1 className="text-4xl">Cookie Stand Admin</h1>
      <div>
        {user ? (
          <div>
            <button
              type="submit"
              className="p-2 text-xl text-white bg-green-500 rounded"
            >
              <Link href={"../"}>Home</Link>
            </button>
            <button
              type="submit"
              className="p-2 text-xl text-white bg-green-500 rounded"
            >
              <Link href={"assets/overview"}>Overview</Link>
            </button>
            <button
              onClick={() => logout()}
              type="submit"
              className="p-2 text-xl text-white bg-green-500 rounded"
            >
              <Link href={"../"}>log out</Link>
            </button>
          </div>
        ) : (
<></>
        )}
      </div>
    </header>
  );
}