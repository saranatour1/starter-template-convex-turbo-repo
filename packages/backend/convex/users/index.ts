import { getAuthUserId } from "@convex-dev/auth/server";
import { internalQuery } from "../_generated/server";
import { ConvexError } from "convex/values";

export const viewer = internalQuery({
	args: {},
	handler: async (ctx, args_0) => {
		const userId = await getAuthUserId(ctx);
		if (!userId) {
			throw new ConvexError("not Authorized");
		}
		return await ctx.db.get(userId);
	},
});
