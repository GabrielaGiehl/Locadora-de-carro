import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
const client = await prisma..create({
  data: {
    name: "luana",
    email: "luana@fema.com.br",
    phone: "55 996130563"
  },
});
    console.log(client)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  