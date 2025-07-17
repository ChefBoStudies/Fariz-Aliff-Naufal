-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  video_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  technologies TEXT[],
  project_type TEXT DEFAULT 'web', -- 'web', 'mobile', 'video', etc.
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for project assets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-assets', 'project-assets', true);

-- Create storage policy for public access
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'project-assets');

-- Create storage policy for authenticated uploads (if you want to add admin features later)
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'project-assets' AND auth.role() = 'authenticated');

-- Sample data
INSERT INTO projects (title, description, image_url, video_url, technologies, project_type, is_featured) VALUES
('E-Commerce Platform', 'Full-stack e-commerce solution with React and Node.js', 'https://via.placeholder.com/500x400/667eea/ffffff?text=E-Commerce', null, ARRAY['React', 'Node.js', 'MongoDB'], 'web', true),
('AR Mobile App Demo', 'Immersive AR experience built with ARKit and RealityKit', null, 'path/to/your/video.mp4', ARRAY['Swift', 'ARKit', 'RealityKit'], 'video', true),
('Weather Dashboard', 'Real-time weather application with beautiful UI', 'https://via.placeholder.com/500x400/4ade80/ffffff?text=Weather+App', null, ARRAY['React', 'API Integration'], 'web', false),
('Social Media Dashboard', 'Analytics dashboard for social media management', 'https://via.placeholder.com/500x400/fb7185/ffffff?text=Social+Dashboard', null, ARRAY['React', 'Chart.js'], 'web', false); 