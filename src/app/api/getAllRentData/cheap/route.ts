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

    // 価格安い順
    if (!area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "rent",
        },
        orderBy: {
          value: "asc",
        },
      });
    }

    if (area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "rent",
          area: area,
          buildingType: buildingType,
        },
        orderBy: {
          value: "asc",
        },
      });
    }

    if (!area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "rent",
          buildingType: buildingType,
        },
        orderBy: {
          value: "asc",
        },
      });
    }

    if (area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: "rent",
          area: area,
        },
        orderBy: {
          value: "asc",
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
