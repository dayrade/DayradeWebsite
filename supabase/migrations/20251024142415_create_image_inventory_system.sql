/*
  # DAYRADE Image Inventory System

  1. New Tables
    - `pages`
      - `id` (uuid, primary key)
      - `name` (text) - Page name (Home, About, Divisions, etc.)
      - `slug` (text) - URL slug
      - `priority` (integer) - Generation priority order
      - `created_at` (timestamptz)
    
    - `image_assets`
      - `id` (uuid, primary key)
      - `image_id` (text, unique) - Systematic ID (e.g., HOME-HERO-001)
      - `page_id` (uuid, foreign key to pages)
      - `section_name` (text) - Section/component name
      - `component_type` (text) - Component type (hero, feature, card, etc.)
      - `description` (text) - What the image represents
      - `characters` (text[]) - Array of character names (Grizz, Toro, Jet, Oran)
      - `character_role` (text) - Primary, secondary, tertiary, or none
      - `prompt_dark` (text) - Complete prompt for dark mode
      - `prompt_light` (text) - Complete prompt for light mode
      - `width` (integer) - Image width in pixels
      - `height` (integer) - Image height in pixels
      - `aspect_ratio` (text) - e.g., "16:9", "4:3"
      - `filename_dark` (text) - Dark mode filename
      - `filename_light` (text) - Light mode filename
      - `alt_text` (text) - Accessibility alt text
      - `floating_elements` (text[]) - Array of floating elements
      - `mood` (text) - Intended mood/atmosphere
      - `priority` (text) - critical, high, medium, low
      - `status` (text) - pending, in_progress, completed, approved
      - `generation_notes` (text) - Additional notes
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `characters`
      - `id` (uuid, primary key)
      - `name` (text) - Character name
      - `animal_type` (text) - Bear, Bull, Leopard, Orangutan
      - `division` (text) - Associated division
      - `role` (text) - Character role description
      - `personality_traits` (text[]) - Array of traits
      - `visual_colors` (text[]) - Primary colors (hex codes)
      - `clothing_style` (text) - Clothing description
      - `accessories` (text[]) - Array of accessories
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read data
    - Add policies for authenticated users to manage data
*/

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  priority integer NOT NULL DEFAULT 999,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read pages"
  ON pages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage pages"
  ON pages
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create characters table
CREATE TABLE IF NOT EXISTS characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  animal_type text NOT NULL,
  division text,
  role text NOT NULL,
  personality_traits text[] DEFAULT '{}',
  visual_colors text[] DEFAULT '{}',
  clothing_style text,
  accessories text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE characters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read characters"
  ON characters
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage characters"
  ON characters
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create image_assets table
CREATE TABLE IF NOT EXISTS image_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_id text UNIQUE NOT NULL,
  page_id uuid REFERENCES pages(id) ON DELETE CASCADE,
  section_name text NOT NULL,
  component_type text NOT NULL,
  description text NOT NULL,
  characters text[] DEFAULT '{}',
  character_role text,
  prompt_dark text NOT NULL,
  prompt_light text NOT NULL,
  width integer NOT NULL,
  height integer NOT NULL,
  aspect_ratio text NOT NULL,
  filename_dark text NOT NULL,
  filename_light text NOT NULL,
  alt_text text NOT NULL,
  floating_elements text[] DEFAULT '{}',
  mood text,
  priority text DEFAULT 'medium',
  status text DEFAULT 'pending',
  generation_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE image_assets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read image_assets"
  ON image_assets
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can manage image_assets"
  ON image_assets
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_image_assets_page_id ON image_assets(page_id);
CREATE INDEX IF NOT EXISTS idx_image_assets_status ON image_assets(status);
CREATE INDEX IF NOT EXISTS idx_image_assets_priority ON image_assets(priority);
CREATE INDEX IF NOT EXISTS idx_image_assets_characters ON image_assets USING gin(characters);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_image_assets_updated_at
  BEFORE UPDATE ON image_assets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
