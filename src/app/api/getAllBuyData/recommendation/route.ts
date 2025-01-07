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

    // おすすめ順、デフォルトのソート
    if (!area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: {
            contains: "buy",
          },
        },
        orderBy: {
          recommendation: "desc",
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
          recommendation: "desc",
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
          recommendation: "desc",
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
          recommendation: "desc",
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
