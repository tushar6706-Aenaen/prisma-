import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const PORT = 4000;


app.get('/', async (_, res) => {
  const users = await prisma.user.findMany({
    where: {
      age: {
        gt: 30
      },
      isMarried: false
    },
    // where: {
    //   OR: [{
    //     nationality: "American"
    //   },
    //   { age: { gte: 30 } }
    //   ]
    // },
    // where: {
    //   nationality: { NOT: "Irish" }
    // },
     where: {
      nationality: {
        in:["Indian", "Italian", "Mexican"]
      }
    },
  });
  res.json(users);
}
);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
