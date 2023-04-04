import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getOptionsForVote } from "~/utils/getRandomCuisine";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .query(() => {

      const [first, second] = getOptionsForVote();
      return {
        firstCuisine: first,
        secondCuisine: second
      };

    }),
  
  vote: publicProcedure.input(z.object({votedFor: z.string(),
    votedAgainst: z.string()})).mutation(async ({ctx, input}) => {

      const voteInDb = await ctx.prisma.example.create({
        data: {
          votedFor: input.votedFor,
          votedAgainst: input.votedAgainst,
        },
      });

      return { success: true, vote: voteInDb };
  }),


  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
