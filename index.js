import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();
const app = express();



app.get('/users', async (req, res) => {
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
        in: ["Indian", "Italian", "Mexican"]
      }
    },
  });
  res.json(users);
}
);


app.put('/users', async (req, res) => {
  const updatedUser = await prisma.user.update({
    where: { email: "alice.johnson@example.com" },
    data: {
      age: 35,
      isMarried: true,
    },
  });
  res.json(updatedUser);
});

app.delete('/users', async (req, res) => {
  const deletedUser = await prisma.user.deleteMany({
    // where: {
    //   email: "david.kim@example.com",
    // },
    where:{
      age : {gt:30},
    }
  });
  res.json(deletedUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
