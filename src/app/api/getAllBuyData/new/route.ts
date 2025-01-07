import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error);
  }
};

export const GET = async () => {
  try {
    await connectDB();
    // 新着、降順
    const realEstates = await prisma.realEstate.findMany({
      where: {
        type: {
          contains: "buy",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(realEstates, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
