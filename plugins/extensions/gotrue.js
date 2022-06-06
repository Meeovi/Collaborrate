/* eslint-disable no-unused-vars */
import { GoTrueClient } from '@supabase/gotrue-js'

const GOTRUE_URL = 'http://localhost:8000'

const auth = new GoTrueClient({ url: GOTRUE_URL })