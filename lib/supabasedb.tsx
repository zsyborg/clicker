import { createClient } from '@supabase/supabase-js'

import { Database, Table, Enums } from "../database.types";


const supabaseUrl = 'https://gmitebdgjevishfmuios.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtaXRlYmRnamV2aXNoZm11aW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyNTk4OTIsImV4cCI6MjAyNjgzNTg5Mn0.6gVGX2nOVst89M-5DmmdmaKORh0WlAZeaGGFeefTyBM'
const supabase = createClient(supabaseUrl, supabaseKey)

let users: Table<'clicker'>

export async function getdata() {
    
let { data: clicker, error } = await supabase
  .from('clicker')
  .select('*')


}