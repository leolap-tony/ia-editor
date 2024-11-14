"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signInAction = async () => {
  const supabase = await createClient()
  console.log('hi')
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider:'google',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  })
  
  if (data.url) {
    console.log('error')
    redirect(data.url) // use the redirect API for your server framework
  }
};