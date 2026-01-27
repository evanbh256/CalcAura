import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // 1. Clear existing data
  await prisma.vote.deleteMany({})
  await prisma.incident.deleteMany({})
  await prisma.user.deleteMany({})

  console.log('🧹 Database cleared')

  // 2. Create a common password
  const password = await hash('123456', 10)

  // 3. Create Users
  const userNames = [
    'Evan',
    'Tenzing',
    'Smaran',
    'Sandesh',
    'Kavya',
    'Prashun',
    'Pratik',
    'Kush'
  ]

  const users = []
  for (const name of userNames) {
    const user = await prisma.user.create({
      data: {
        username: name,
        password,
        auraScore: 1000, // Everyone starts equal
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
      },
    })
    users.push(user)
    console.log(`Created user: ${user.username}`)
  }

  // 4. Create dummy incidents to make feed look alive
  
  // Incident 1: Tenzing reported Evan
  await prisma.incident.create({
    data: {
      reporterId: users[1].id, // Tenzing
      offenderId: users[0].id, // Evan
      description: "Claimed he could bench 225, failed immediately.",
      auraAmount: -50,
      status: "APPROVED",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
      expiresAt: new Date(),
    }
  })

  // Incident 2: Smaran reported Sandesh
  await prisma.incident.create({
    data: {
      reporterId: users[2].id, // Smaran
      offenderId: users[3].id, // Sandesh
      description: "Fixed the wifi for the whole house.",
      auraAmount: 100,
      status: "PENDING",
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60),
    }
  })

  console.log('✅ Seed complete')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })