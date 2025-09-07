import { PrismaClient } from "@prisma/client";
 

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "cina", email: "cina@example.com" },
      { name: "kero", email: "kero@example.com" },
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




