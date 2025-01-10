import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
	...authTables,
	tasks: defineTable({
		taskId: v.string(),
		title: v.string(),
		labels: v.optional(v.id("labels")),
		status: v.optional(v.id("status")),
		priority: v.optional(v.id("priority")),
	})
		.index("by_title", ["title"])
		.index("by_labels", ["labels"])
		.index("by_priority", ["priority"])
		.index("by_status", ["status"])
    .index("by_title_status",["title","status"])
    .index("by_title_priority",["title","priority"]),
	tasksWithUsers: defineTable({
		taskId: v.id("tasks"),
		userId: v.id("users"),
	})
		.index("by_taskId", ["taskId"])
		.index("by_userId", ["userId"]),
	labels: defineTable({
		title: v.string(),
		color: v.optional(v.string()),
	}).index("by_title", ["title"]),
	status: defineTable({
		title: v.string(),
		color: v.optional(v.string()),
	}).index("by_title", ["title"]),
	priority: defineTable({
		title: v.string(),
		color: v.optional(v.string()),
	}).index("by_title", ["title"]),
});
