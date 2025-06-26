import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      links: {
        Row: {
          id: string
          user_id: string
          original_url: string
          short_code: string
          title: string | null
          created_at: string
          is_active: boolean
        }
        Insert: {
          id?: string
          user_id: string
          original_url: string
          short_code: string
          title?: string | null
          created_at?: string
          is_active?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          original_url?: string
          short_code?: string
          title?: string | null
          created_at?: string
          is_active?: boolean
        }
      }
      clicks: {
        Row: {
          id: string
          link_id: string
          ip_address: string | null
          country: string
          device: string
          user_agent: string | null
          clicked_at: string
        }
        Insert: {
          id?: string
          link_id: string
          ip_address?: string | null
          country?: string
          device?: string
          user_agent?: string | null
          clicked_at?: string
        }
        Update: {
          id?: string
          link_id?: string
          ip_address?: string | null
          country?: string
          device?: string
          user_agent?: string | null
          clicked_at?: string
        }
      }
      earnings: {
        Row: {
          id: string
          user_id: string
          link_id: string
          amount: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          link_id: string
          amount?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          link_id?: string
          amount?: number
          created_at?: string
        }
      }
      withdrawals: {
        Row: {
          id: string
          user_id: string
          amount: number
          payment_method: string
          payment_details: string
          status: string
          requested_at: string
          processed_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          payment_method: string
          payment_details: string
          status?: string
          requested_at?: string
          processed_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          payment_method?: string
          payment_details?: string
          status?: string
          requested_at?: string
          processed_at?: string | null
        }
      }
    }
  }
}