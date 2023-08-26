import Link from "next/link";

export default function  Header() {
    return (
  <header className="flex items-center justify-between p-4 text-black bg-green-500">
    <h1 className="text-4xl">Cookie Stand Admin</h1>
  
    <button
    
      type="submit"
      className="p-2 text-black bg-green-500 rounded"
    >
      <Link href={"assets/overview"}>
      Overview
      </Link>
    </button>
  </header>
  
    )
  }