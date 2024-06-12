import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  CloudIcon,
  DatabaseIcon,
  LockIcon,
  MailIcon,
  StoreIcon,
} from "lucide-react";

export const Infrastructure = () => {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-gray-200 dark:bg-gray-700">
              Provider
            </TableHead>
            <TableHead className="bg-gray-200 dark:bg-gray-700">Type</TableHead>
            <TableHead className="bg-gray-200 dark:bg-gray-700">
              Uptime
            </TableHead>
            <TableHead className="bg-gray-200 dark:bg-gray-700">
              Status
            </TableHead>
            <TableHead className="bg-gray-200 dark:bg-gray-700">
              Spending
            </TableHead>
            <TableHead className="bg-gray-200 dark:bg-gray-700">
              Last Incident
            </TableHead>
            <TableHead className="bg-gray-200 dark:bg-gray-700">
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <CloudIcon className="w-5 h-5 text-blue-500" />
                <span className="text-blue-500">Cloud Hosting</span>
              </div>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              External
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              99.98%
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <Badge className="bg-green-500 text-white">Operational</Badge>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              $2,500/month
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              2 weeks ago
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              Provides cloud hosting services for our web applications.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <DatabaseIcon className="w-5 h-5 text-green-500" />
                <span className="text-green-500">Database</span>
              </div>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              Internal
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">100%</TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <Badge className="bg-green-500 text-white">Operational</Badge>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              $1,000/month
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              1 month ago
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              Manages our relational database for storing application data.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-orange-500" />
                <span className="text-orange-500">Email Service</span>
              </div>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              External
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              99.95%
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <Badge variant="destructive" className="bg-orange-500 text-white">
                Degraded
              </Badge>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              $500/month
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              3 days ago
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              Handles email delivery and transactional email services.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <LockIcon className="w-5 h-5 text-purple-500" />
                <span className="text-purple-500">Identity Provider</span>
              </div>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              External
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              99.99%
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <Badge className="bg-green-500 text-white">Operational</Badge>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              $300/month
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              2 months ago
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              Manages user authentication and authorization for our
              applications.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <StoreIcon className="w-5 h-5 text-red-500" />
                <span className="text-red-500">File Storage</span>
              </div>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              Internal
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">100%</TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              <Badge className="bg-green-500 text-white">Operational</Badge>
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              $800/month
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              6 weeks ago
            </TableCell>
            <TableCell className="bg-gray-100 dark:bg-gray-800">
              Provides file storage and content delivery for our applications.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
