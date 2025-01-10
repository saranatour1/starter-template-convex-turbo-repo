import { query } from "./_generated/server";
import { internal } from "./_generated/api";
import { Doc } from "./_generated/dataModel";
// import internal from "stream";
type ViewerType = {
  task:Doc<"tasks">;
  status:Doc<"status"> |null;
  priority:Doc<"priority"> | null;
  labels:Doc<"labels"> | null;
}

export const get = query({
  args: {},
  handler: async (ctx) => {
    const tasks:ViewerType[] = await ctx.runQuery(internal.tasks.index.viewer)
    return tasks
  },
});