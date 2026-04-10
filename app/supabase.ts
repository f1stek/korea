import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rmipqunbwlemtqfpsxrh.supabase.co' 
const supabaseAnonKey = 'sb_publishable_2ZOA9H58Q-EGqkF6XRFWqA_SUm8h-R3_mIDzV8Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)