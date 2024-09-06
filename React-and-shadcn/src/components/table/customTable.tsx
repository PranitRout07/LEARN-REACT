import { CustomTableProps } from "@/App"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


export default function CustomTable({val}:CustomTableProps){
    console.log(val)

    
    return (
        <div>
<Table>
  <TableCaption>Details of a candidate.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Age</TableHead>
      <TableHead>Roll</TableHead>
      <TableHead>Activity 1</TableHead>
      <TableHead>Professional Status</TableHead>
      <TableHead className="text-right">Result</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Pranit</TableCell>
      <TableCell>22</TableCell>
      <TableCell>19</TableCell>
      <TableCell>Content Writing</TableCell>
      <TableCell>Freelancer</TableCell>
      <TableCell className="text-right">Pass</TableCell>
    </TableRow>
    
    
  </TableBody>
</Table>


        </div>
    )
}