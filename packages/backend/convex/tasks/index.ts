import { getAuthUserId } from "@convex-dev/auth/server";
import { internalQuery } from "../_generated/server";
import { ConvexError } from "convex/values";
import { asyncMap } from "convex-helpers";

// import {asyncMap} from ""
 // get all the task associated with the user
export const viewer = internalQuery({
  args:{},
  handler:async(ctx, args_0)=> {
    const userId = await getAuthUserId(ctx);
    if(!userId){
      throw new ConvexError("not signed in")
    }
    const tasksWithUser = await ctx.db.query("tasksWithUsers")
    .withIndex("by_userId",q=>q.eq("userId",userId))
    .collect();
    
    const tasks = await asyncMap(
      // one-to-many
      tasksWithUser,
      async (doc) => {
        let labels = null
        let status = null
        let priority = null
        const task = await ctx.db.get(doc.taskId)
        if(!task) return null
        if(task.labels){
          const label = await ctx.db.get(task?.labels)
          labels= label          
        }
        
        if(task.priority){
          const pr = await ctx.db.get(task.priority)
          priority = pr
        }
        if(task.status){
          const st = await ctx.db.get(task.status)
          status = st
        }

        return { task, status, priority, labels };
      },
    );
    
    return tasks.filter(t => t!==null)
  }
})