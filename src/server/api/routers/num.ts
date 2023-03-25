import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const numRouter = createTRPCRouter({
  calc: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      return input.id;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
