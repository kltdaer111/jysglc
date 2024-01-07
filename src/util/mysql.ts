import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async ()=>{
  const data = await prisma.sglcb.findMany();
  return data;
}