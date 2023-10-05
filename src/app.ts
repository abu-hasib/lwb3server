import express from "express";
import prisma from "./lib/prisma";
import cors from "cors";
const app = express();

app.use(cors());

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

main()
app.get("/", function (_req, res) {
  return res.send("Boldax bot Up and running");
});

app.get("/files/:fileId", async function (req, res) {
  const { fileId } = req.params;
  console.log({ fileId });
  const files = await prisma.file.findMany({
    where: {
      fileId: fileId,
    },
  });
  console.log({ files });
  return res.status(200).json({ files });
});
export default app;
