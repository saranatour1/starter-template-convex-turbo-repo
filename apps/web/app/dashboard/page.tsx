import Image from "next/image";
import { UserNav } from "../../features/user-nav";
import { DataTable } from "../../features/Table/data-table";
import { columns } from "../../features/Table/columns";

export default async function Page(){
  return ( <>
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
      <DataTable data={[
          {
            "id": "TASK-7839",
            "title": "We need to bypass the neural TCP card!",
            "status": "todo",
            "label": "bug",
            "priority": "high"
          }
      ]} 
      columns={columns} />
    </div>
  </>)
}