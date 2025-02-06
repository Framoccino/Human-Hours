import { User, Skill } from '@/types'

export function findMatchingUsers(currentUser: User, allUsers: User[]): User[] {
  // Convert skills to vector format
  const userVector = skillsToVector(currentUser.skills)
  const otherUsers = allUsers
    .filter(user => user.id !== currentUser.id)
    .map(user => ({
      ...user,
      vector: skillsToVector(user.skills)
    }))

  // Calculate cosine similarity
  return otherUsers
    .map(user => ({
      ...user,
      similarity: cosineSimilarity(userVector, user.vector)
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 5) // Return top 5 matches
}

function skillsToVector(skills: Skill[]): number[] {
  // Implement skill vectorization
  return skills.map(skill => skill.validations)
}

function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0)
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0))
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0))
  return dotProduct / (magnitudeA * magnitudeB)
} 