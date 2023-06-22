"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default async function Page() {
    const supabase = createClientComponentClient();
    const [errMsg, setError] = useState("");
    const router = useRouter();



    const signIn = async () => {
        await supabase.auth.signInWithPassword({
            email: "",
            password: "",
        });
        if(errMsg){
            console.error(errMsg);
            setError(errMsg);
        } else {
            router.replace("/");
        }
    };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <h1>Login Page</h1>
      <button className="bg-stone-200 py-1 px-3 rounded-md" onClick={signIn}>
        sign-in as test user
      </button>
      {errMsg && <p className="text-red-500">NO</p>}
    </main>
  );
}
