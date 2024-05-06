import { Prisma, PrismaClient } from "@prisma/client";

let prisma;

if(process.env.NODE_ENV === "production") {
    prisma = getClient();
}
else {
    if(!global.__db__) {
        global.__db__ = getClient();
    }
    prisma = global.__db__;
}

function getClient() {
    const { DATABASE_URL } = process.env;
    
    const client = new PrismaClient();
    client.$connect();
    return client;
}

export default prisma;