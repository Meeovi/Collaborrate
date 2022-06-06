import { RealtimeClient } from '@supabase/realtime-js'

const client = new RealtimeClient(process.env.DATABASE_URL)
client.connect()