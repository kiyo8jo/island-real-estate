import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();

    const { area, buildingType } = await request.json();

    let realEstates;

    // 登録新しい順
    if (!area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "buy",
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    if (area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "buy",
          area: area,
          buildingType: buildingType,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    if (!area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "buy",
          buildingType: buildingType,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }
    if (area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "buy",
          area: area,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    return NextResponse.json(realEstates, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
