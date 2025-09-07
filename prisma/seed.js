import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      
        {
          "name": "Alice Johnson",
          "email": "alice.johnson@example.com",
          "age": 28,
          "isMarried": false,
          "nationality": "Canadian"
        },
        {
          "name": "David Kim",
          "email": "david.kim@example.com",
          "age": 34,
          "isMarried": true,
          "nationality": "South Korean"
        },
        {
          "name": "Maria Gonzalez",
          "email": "maria.gonzalez@example.com",
          "age": 42,
          "isMarried": true,
          "nationality": "Mexican"
        },
        {
          "name": "James Smith",
          "email": "james.smith@example.com",
          "age": 23,
          "isMarried": false,
          "nationality": "American"
        },
        {
          "name": "Sophia Rossi",
          "email": "sophia.rossi@example.com",
          "age": 30,
          "isMarried": false,
          "nationality": "Italian"
        },
        {
          "name": "Liam O'Connor",
          "email": "liam.oconnor@example.com",
          "age": 36,
          "isMarried": true,
          "nationality": "Irish"
        },
        {
          "name": "Chen Wei",
          "email": "chen.wei@example.com",
          "age": 27,
          "isMarried": false,
          "nationality": "Chinese"
        },
        {
          "name": "Fatima Zahra",
          "email": "fatima.zahra@example.com",
          "age": 31,
          "isMarried": true,
          "nationality": "Moroccan"
        },
        {
          "name": "Oliver Brown",
          "email": "oliver.brown@example.com",
          "age": 29,
          "isMarried": false,
          "nationality": "British"
        },
        {
          "name": "Amara Singh",
          "email": "amara.singh@example.com",
          "age": 35,
          "isMarried": true,
          "nationality": "Indian"
        }
      ],
  });

  console.log("✅ Seeded users successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });




