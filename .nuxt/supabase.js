import Vue from "vue";
import { createVueSupabase } from "vue-supabase";

const supabase = createVueSupabase({
  supabaseUrl: "YOUR_SUPABASE_URL",
  supabaseKey: "YOUR_SUPABASE_KEY",
  supabaseOptions: undefined,
});

Vue.use(supabase);

// Inject Supabase into Nuxt Context
export default (ctx, inject) => {
  // ctx.$supabase = supabase;
  inject("supabase", supabase);
};
