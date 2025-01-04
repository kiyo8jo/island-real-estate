-- CreateTable
CREATE TABLE "RealEstate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "postCode" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "space" INTEGER NOT NULL,
    "layout" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RealEstate_pkey" PRIMARY KEY ("id")
);
