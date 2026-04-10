import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rmipqunbwlemtqfpsxrh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtaXBxdW5id2xlbXRxZnBzeHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MTA0MjEsImV4cCI6MjA5MTM4NjQyMX0.UR8tWGUv_JN6KN-nOa12rYuwghlatSeWCBBsA4NsHOY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)