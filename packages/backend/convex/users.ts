import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";

export const get = query({
  args:{},
  handler:async(ctx, args_0) => {
    const userId = await getAuthUserId(ctx)
    if(!userId){
      throw new ConvexError("not signedIn")
    }
    return await ctx.db.get(userId)
  },
})