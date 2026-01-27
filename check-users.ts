import { prisma } from "./src/lib/prisma";

async function main() {
  const users = await prisma.user.findMany();
  console.log("Users in database:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
