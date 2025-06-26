/*
  # RJLinks Database Schema

  1. New Tables
    - `links`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `original_url` (text)
      - `short_code` (text, unique)
      - `title` (text, optional)
      - `created_at` (timestamp)
      - `is_active` (boolean, default true)
    
    - `clicks`
      - `id` (uuid, primary key)
      - `link_id` (uuid, references links)
      - `ip_address` (text)
      - `country` (text)
      - `device` (text)
      - `user_agent` (text)
      - `clicked_at` (timestamp)
    
    - `earnings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `link_id` (uuid, references links)
      - `amount` (decimal)
      - `created_at` (timestamp)
    
    - `withdrawals`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `amount` (decimal)
      - `payment_method` (text)
      - `payment_details` (text)
      - `status` (text, default 'pending')
      - `requested_at` (timestamp)
      - `processed_at` (timestamp, nullable)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Links table
CREATE TABLE IF NOT EXISTS links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  original_url text NOT NULL,
  short_code text UNIQUE NOT NULL,
  title text,
  created_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own links"
  ON links
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Anyone can view active links by short_code"
  ON links
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Clicks table
CREATE TABLE IF NOT EXISTS clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  link_id uuid REFERENCES links(id) NOT NULL,
  ip_address text,
  country text DEFAULT 'Unknown',
  device text DEFAULT 'Unknown',
  user_agent text,
  clicked_at timestamptz DEFAULT now()
);

ALTER TABLE clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view clicks for their links"
  ON clicks
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM links 
      WHERE links.id = clicks.link_id 
      AND links.user_id = auth.uid()
    )
  );

CREATE POLICY "Anyone can insert clicks"
  ON clicks
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Earnings table
CREATE TABLE IF NOT EXISTS earnings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  link_id uuid REFERENCES links(id) NOT NULL,
  amount decimal(10,2) DEFAULT 0.05,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE earnings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own earnings"
  ON earnings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Withdrawals table
CREATE TABLE IF NOT EXISTS withdrawals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  amount decimal(10,2) NOT NULL,
  payment_method text NOT NULL,
  payment_details text NOT NULL,
  status text DEFAULT 'pending',
  requested_at timestamptz DEFAULT now(),
  processed_at timestamptz
);

ALTER TABLE withdrawals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own withdrawals"
  ON withdrawals
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_links_short_code ON links(short_code);
CREATE INDEX IF NOT EXISTS idx_links_user_id ON links(user_id);
CREATE INDEX IF NOT EXISTS idx_clicks_link_id ON clicks(link_id);
CREATE INDEX IF NOT EXISTS idx_clicks_clicked_at ON clicks(clicked_at);
CREATE INDEX IF NOT EXISTS idx_earnings_user_id ON earnings(user_id);
CREATE INDEX IF NOT EXISTS idx_withdrawals_user_id ON withdrawals(user_id);