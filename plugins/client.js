import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  "https://wyhrhklrokwbwfwkgyoi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5aHJoa2xyb2t3Yndmd2tneW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NDY4ODgsImV4cCI6MTk2MDAyMjg4OH0.YkHlpppiybDFNr_Cv-mE6zfR04Xwmev4NR2a1xEnERs"
)

export default (_, inject) => {
  inject('supabase', supabase)
}