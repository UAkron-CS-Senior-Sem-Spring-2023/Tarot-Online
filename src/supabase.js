// This the import for Supabase

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ldeqdetkgejadnyobnji.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZXFkZXRrZ2VqYWRueW9ibmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0MDAzMDksImV4cCI6MTk5Njk3NjMwOX0.hM1BMNrdpMpUNL1zEgfvcHjkrAPKhagxKdpANrYmgBM'
export const supabase = createClient(supabaseUrl, supabaseKey)
