import { supabase } from './supabase.js'

// Test database connection
export const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('Database connection error:', error)
      return false
    }
    
    console.log('✅ Database connected successfully!')
    console.log('Sample data:', data)
    return true
  } catch (error) {
    console.error('Connection test failed:', error)
    return false
  }
}

// Test storage connection
export const testStorage = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('project-assets')
      .list('', { limit: 1 })
    
    if (error) {
      console.error('Storage connection error:', error)
      return false
    }
    
    console.log('✅ Storage connected successfully!')
    return true
  } catch (error) {
    console.error('Storage test failed:', error)
    return false
  }
}

// Run all tests
export const runTests = async () => {
  console.log('🧪 Testing Supabase connection...')
  
  const dbTest = await testConnection()
  const storageTest = await testStorage()
  
  if (dbTest && storageTest) {
    console.log('🎉 All tests passed! Supabase is ready to use.')
  } else {
    console.log('❌ Some tests failed. Check your configuration.')
  }
  
  return dbTest && storageTest
} 