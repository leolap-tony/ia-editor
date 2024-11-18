import Header from "@/components/Header";
import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { redirect } from "next/navigation";

export default async function Index() {
  redirect('/editor')
  return (
    <>      
      <div>home page</div>
    </>
  );
}
