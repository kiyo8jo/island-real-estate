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
          type: {
            contains: "buy",
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    if (area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: {
            contains: "buy",
          },
          area: {
            contains: area,
          },
          buildingType: {
            contains: buildingType,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    if (!area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: {
            contains: "buy",
          },
          buildingType: {
            contains: buildingType,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }
    if (area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: {
            contains: "buy",
          },
          area: {
            contains: area,
          },
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
