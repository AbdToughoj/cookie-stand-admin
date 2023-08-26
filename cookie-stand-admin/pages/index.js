import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [cookieStands, setCookieStands] = useState([]);

  const addCookieStand = (event) => {
    event.preventDefault();

    const newCookieStand = {
      id: Math.random().toString(36).substring(7), 
      location: event.target.location.value,
      minCustomersPerHour: parseInt(event.target.minCustomersPerHour.value),
      maxCustomersPerHour: parseInt(event.target.maxCustomersPerHour.value),
      avgCookiesPerSale: parseFloat(event.target.avgCookiesPerSale.value),
    };

    setCookieStands([...cookieStands, newCookieStand]);

    event.target.reset();
  };

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body className="flex flex-col min-h-screen">
        <header className="p-4 text-black bg-green-500">
          <h1 className="text-4xl">Cookie Stand Admin</h1>
        </header>
        <main className="flex flex-col items-center flex-grow py-4 space-y-8">
          <form
            onSubmit={addCookieStand}
            className="flex flex-col p-2 space-y-2 bg-green-300"
          >
          <h2 className="text-2xl text-center">Create Cookie Stand</h2>
            <label>
              Location:
              <input
                type="text"
                name="location"
                className="p-1 border rounded"
                required
              />
            </label>
            <label>
              Min Customers per Hour:
              <input
                type="number"
                name="minCustomersPerHour"
                className="p-1 border rounded"
                required
              />
            </label>
            <label>
              Max Customers per Hour:
              <input
                type="number"
                name="maxCustomersPerHour"
                className="p-1 border rounded"
                required
              />
            </label>
            <label>
              Avg Cookies per Sale:
              <input
                type="number"
                step="0.1"
                name="avgCookiesPerSale"
                className="p-1 border rounded"
                required
              />
            </label>
            <button
              type="submit"
              className="p-2 text-white bg-green-500 rounded"
            >
              Create
            </button>
          </form>
          {cookieStands.length === 0 ? (
            <p className="mt-4 text-center text-gray-600">
              Report Table Coming Soon...
            </p>
          ) : (
            <pre className="p-2 mt-4 bg-green-300">
              {JSON.stringify(cookieStands, null, 2)}
            </pre>
          )}
        </main>
        <footer className="p-4 text-center text-black bg-green-500">
          &copy; ASAC 2023
        </footer>
      </body>
    </div>
  );
}