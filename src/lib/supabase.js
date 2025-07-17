import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Storage bucket helper functions
export const uploadFile = async (file, bucket = 'project-assets', path = '') => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const filePath = path ? `${path}/${fileName}` : fileName

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file)

  if (error) {
    throw error
  }

  return data
}

export const getFileUrl = (bucket = 'project-assets', path) => {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return data.publicUrl
}

export const deleteFile = async (bucket = 'project-assets', path) => {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path])

  if (error) {
    throw error
  }

  return true
} 