import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getOptionsForVote } from "~/utils/getRandomCuisine";

export const exampleRouter = createTRPCRouter({

  getCuisine: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const cuisine = await ctx.prisma.cuisine.findFirst({
        where: { id: input.id },
      });

      if (!cuisine) throw new Error("cuisine doesn't exist");

      return cuisine;
    }),

  // getBoth: publicProcedure.query(async ({ ctx }) => {
  //   const [first, second] = getOptionsForVote();
  //   console.log(first);
  //   console.log(second);

  //   if(!first || !second) throw new Error("getOptionsForVote not working");

  //   const bothCuisines = await ctx.prisma.cuisine.findMany({
  //     where: { id: { in: [first, second] } },
  //   });

  //   if (bothCuisines.length !== 2)
  //     throw new Error("Failed to find two cuisnes");

  //   return { first: bothCuisines[0], second: bothCuisines[1] };
  // }),

  vote: publicProcedure
    .input(z.object({ votedForId: z.number(), votedAgainstId: z.number() }))
    .mutation(async ({ ctx, input }) => {

      const voteInDb = await ctx.prisma.vote.create({
        data: {
          votedAgainstId: input.votedAgainstId,
          votedForId: input.votedForId,
        },
      });

      return { success: true, vote: voteInDb };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.cuisine.findMany();
  }),
});
