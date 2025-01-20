import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "rkgqcy94",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skALkrYkXgOaYFMKlvjxgglLzGFlDYsghtJ1BKlAdAtRGUr7pOIG9spZbb9iJjyxpHEkZyR91MgE3E7oFOtONWzKqUH0wqcWEhzvBnvgOSOSANFLOPxbK9c4iJHnxzxOFYqDCBgF5OY9GUqfIdNQ6Ctld8qeieXO6iuZG4hWPMPWlhQ6NybC",
})
