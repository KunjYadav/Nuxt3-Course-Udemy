import { createClient } from "@supabase/supabase-js";

const useSupabase = () => {
  const config = useRuntimeConfig();

  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.SUPABASE_KEY
  );

  return {
    supabase,
  };
};

export default useSupabase;
