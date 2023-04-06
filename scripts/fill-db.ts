/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cuisines = [
  {
    name: "Italian",
    country: "IT",
  },
  {
    name: "Mexican",
    country: "MX",
  },
  {
    name: "Japanese",
    country: "JP",
  },
  {
    name: "Spanish",
    country: "ES",
  },
  {
    name: "Greece",
    country: "GR",
  },
  {
    name: "Indian",
    country: "IN",
  },
  {
    name: "Turkish",
    country: "TR",
  },
];

const doBackfill = async () => {
    const formattedCuisine = cuisines.map((p, index) => ({
        id: index,
        name: p.name,
        svgUrl: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${p.country}.svg`,
    }));

    console.log("formattedData", formattedCuisine);

    const creation = await prisma.cuisine.createMany({
        data: formattedCuisine ,
    });

    console.log("Creation?", creation);
    
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
doBackfill();