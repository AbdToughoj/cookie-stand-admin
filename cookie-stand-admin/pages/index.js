import Head from "next/head";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Output from "@/components/Output";
import Input from "@/components/Input";



export default function Home() {
  // State to store the cookie stand data
  const [cookieStands, setCookieStands] = useState([]);

  // Function to add a new cookie stand
  const addCookieStand = (event) => {
    event.preventDefault();

    // Create a new cookie stand object
    const newCookieStand = {
      id: cookieStands.length + 1, // Generate a unique ID
      location: event.target.location.value,
      minCustomersPerHour: parseInt(event.target.minCustomersPerHour.value),
      maxCustomersPerHour: parseInt(event.target.maxCustomersPerHour.value),
      avgCookiesPerSale: parseFloat(event.target.avgCookiesPerSale.value),
    };

    // Update the cookie stands state with the new cookie stand
    setCookieStands([...cookieStands, newCookieStand]);

    // Reset the form fields
    event.target.reset();
  };

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col items-center flex-grow py-4 space-y-8">
          <Input handler={addCookieStand} />
          <Output handler={cookieStands.length} handler2={cookieStands} />
        </main>
        <Footer cookieStands={cookieStands} />
      </div>
    </div>
  );
}