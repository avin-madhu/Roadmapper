import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://jisxvmhgguafzmctrepl.supabase.co";
const supabaseUrl = "http://127.0.0.1:54321";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imppc3h2bWhnZ3VhZnptY3RyZXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzODAyMjMsImV4cCI6MjAzNDk1NjIyM30.4v9YcBuuIzHHVSEh96ww03G3bcgaxQTndJy-2NxuJhU";

export const supabase = createClient(supabaseUrl, supabaseKey);
