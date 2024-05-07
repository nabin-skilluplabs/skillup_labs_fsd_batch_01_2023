import {PrismaClient } from "@prisma/client";
let prisma;
if(process.env.NODE_ENV = "production"){
    prisma = getClient();
}
else{
    if(!global._db_){
        global._db_ = getClient();
    }
    prisma = global._db_;
}
function getClient(){
    const client = new PrismaClient();
    client.$connect();
    return client;
}
export default prisma;
