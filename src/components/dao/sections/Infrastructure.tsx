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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ResponsiveLine } from "@nivo/line";

export const Infrastructure = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 max-w-6xl w-full mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Cumulative Costs</CardTitle>
              <CardDescription>
                This graph shows the cumulative costs over time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TimeseriesChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Resource Usage</CardTitle>
              <CardDescription>
                This graph shows the acumulative resource usage over time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TimeseriesChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center">
          <ToggleGroup type="single">
            <ToggleGroupItem value="projects">Projects</ToggleGroupItem>
            <ToggleGroupItem value="clouds">Clouds</ToggleGroupItem>
            <ToggleGroupItem value="components">Components</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-gray-200 dark:bg-gray-700">
                Provider
              </TableHead>
              <TableHead className="bg-gray-200 dark:bg-gray-700">
                Type
              </TableHead>
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
              <TableCell className="bg-gray-100 dark:bg-gray-800">
                100%
              </TableCell>
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
                <Badge
                  variant="destructive"
                  className="bg-orange-500 text-white"
                >
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
              <TableCell className="bg-gray-100 dark:bg-gray-800">
                100%
              </TableCell>
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
    </div>
  );
};

function TimeseriesChart(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "2018-01-01", y: 7 },
              { x: "2018-01-02", y: 5 },
              { x: "2018-01-03", y: 11 },
              { x: "2018-01-04", y: 9 },
              { x: "2018-01-05", y: 12 },
              { x: "2018-01-06", y: 16 },
              { x: "2018-01-07", y: 13 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "2018-01-01", y: 9 },
              { x: "2018-01-02", y: 8 },
              { x: "2018-01-03", y: 13 },
              { x: "2018-01-04", y: 6 },
              { x: "2018-01-05", y: 8 },
              { x: "2018-01-06", y: 14 },
              { x: "2018-01-07", y: 11 },
            ],
          },
        ]}
        margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
          format: "%d",
          tickValues: "every 1 day",
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
              color: "#000000",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
