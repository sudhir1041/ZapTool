import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://zkdlpubomrpoymksyncu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprZGxwdWJvbXJwb3lta3N5bmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MTEzMzcsImV4cCI6MjA2NTI4NzMzN30.NfjgAFFordrMuBZxZCGh-sTTHEdowBiZATEGhXWX4Y4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);