import Head from "next/head";
import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Output from "@/components/Output";
import Input from "@/components/Input";
import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/contexts/auth"
import useResource from "@/hooks/useResource";

export default function Home() {
  const { user, login, token } = useAuth() // destructuring 

  const {response,createResource,deleteResource} = useResource()
  function loginformhandler(event) {
    event.preventDefault();
    const username = event.target.username.value
    const password = event.target.password.value
   login(username, password)
    
  }
  const addCookieStand = (event) => {
    event.preventDefault();
    // Create a new cookie stand object
    const newCookieStand = {
      id: response.length + 1, // Generate a unique ID
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minCustomersPerHour.value),
      maximum_customers_per_hour: parseInt(event.target.maxCustomersPerHour.value),
      average_cookies_per_sale: parseFloat(event.target.avgCookiesPerSale.value),
    };
    console.log(newCookieStand,5555555555555555555555555);
    createResource( newCookieStand)
    event.target.reset();
  };
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col items-center flex-grow py-4 space-y-8">
          {!user ? (
            <LoginForm loginformhandler={loginformhandler} />
          ) : (
            <>
              <Input handler={addCookieStand} />
              <Output cookieStands={response}  deleteData={deleteResource}/>
            </>
          )}
        </main>
      </div>
      <Footer cookieStands={response} />

    </>
  );
}