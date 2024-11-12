"use client"
import { useQuery } from 'convex/react';
import { api } from '@repo/backend/convex/_generated/api.js';

export const Messages = () => {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Tasks</h2>
      <ul className="space-y-3">
        {tasks?.map((task) => (
          <li
            key={task._id}
            className={`flex items-center justify-between p-4 rounded-lg shadow ${
              task.isCompleted ? 'bg-green-100 text-green-700' : 'bg-white text-gray-800'
            }`}
          >
            <span className="flex-1 font-medium">
              {task.text}
            </span>
            <span
              className={`ml-4 py-1 px-3 rounded-full text-xs font-semibold ${
                task.isCompleted ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
              }`}
            >
              {task.isCompleted ? 'Completed' : 'Pending'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
