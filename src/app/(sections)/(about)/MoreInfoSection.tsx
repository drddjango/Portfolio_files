import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { timings } from '@/utils/timingsData'
const MoreInfoSection = () => {
  return (
    <div className="w-full">
      <Table className="w-fit m-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-heading text-bold text-xl md:text-2xl">
              Day
            </TableHead>
            <TableHead className="w-fit font-heading text-bold text-xl md:text-2xl">
              Working Hours
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timings.map((timing) => (
            <TableRow key={timing.day}>
              <TableCell>{timing.day}</TableCell>
              <TableCell className="text-center">{timing.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default MoreInfoSection
