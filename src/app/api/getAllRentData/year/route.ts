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

    // 築年数少ない順
    if (!area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: {
            contains: "rent",
          },
        },
        orderBy: {
          year: "asc",
        },
      });
    }

    if (area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: {
            contains: "rent",
          },
          area: {
            contains: area,
          },
          buildingType: {
            contains: buildingType,
          },
        },
        orderBy: {
          year: "asc",
        },
      });
    }

    if (!area && buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: {
            contains: "rent",
          },
          buildingType: {
            contains: buildingType,
          },
        },
        orderBy: {
          year: "asc",
        },
      });
    }
    if (area && !buildingType) {
      realEstates = await prisma.realEstate.findMany({
        where: {
          type: {
            contains: "rent",
          },
          area: {
            contains: area,
          },
        },
        orderBy: {
          year: "asc",
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
