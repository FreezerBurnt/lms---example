const { PrismaClient } = require('@prisma/client')

const database = new PrismaClient()

async function main() {
  try {
    await database.category.createMany({
      data: [
        {
          name: 'Programming'
        },
        {
          name: 'Design'
        },
        {
          name: 'Business'
        },
        {
          name: 'Marketing'
        },
        {
          name: 'Finance'
        },
        {
          name: 'Health'
        },
        {
          name: 'Teaching'
        },
        {
          name: 'Music'
        },
        {
          name: 'Photography'
        },
        {
          name: 'Lifestyle'
        },
        {
          name: 'Personal Development'
        },
        {
          name: 'Other'
        }
      ]
    })
  } catch (error) {
    console.log('Error seeding the database', error)
  } finally {
    await database.$disconnect()
  }
}

main()
