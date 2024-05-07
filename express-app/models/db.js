import { Prisma, PrismaClient } from "@prisma/client";

let prisma;
let _db_;

if (process.env.NODE_ENV === "production") {
  prisma = getClient();
} else {
  if (!global._db_) {
    global._db_ = getClient();
  }
  prisma = global._db_;
}

function getClient() {
  const { DATABASE_URL } = process.env;

  const client = new PrismaClient({
    db: {
      url: DATABASE_URL,
    },
  });
  client.$connect();
  return client;
}

export default Prisma;
