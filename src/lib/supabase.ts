import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nbjhdgwpfftbhbqyahjk.supabase.co'
const supabaseAnonKey = 'sb_publishable__h7wBMvJZuTD3W4QoqI52A_Zdk4gahD'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)