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
import { ResponsiveLine } from "@nivo/line";
import { Route } from "@/routes/market/$daoId";
import { daos } from "@/lib/mock";

export const Infrastructure = () => {
  const { daoId } = Route.useParams();
  const dao = daos.find((dao) => dao.id === daoId)!;
  return (
    <div className="flex flex-col gap-8">
      <section className="flex gap-8">
        <Card className="flex-1">
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
        <Card className="flex-1">
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
      </section>
      <Card>
        <Table className="w-full overflow-auto">
          <TableHeader>
            <TableRow>
              <TableHead>Provider</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Uptime</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Spending</TableHead>
              <TableHead>Last Incident</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dao.infrastructure.map((infrastructure) => (
              <TableRow key={infrastructure.provider}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {infrastructure.provider === "Cloud Hosting" && (
                      <CloudIcon className="w-4 h-4" />
                    )}
                    {infrastructure.provider === "Database" && (
                      <DatabaseIcon className="w-4 h-4" />
                    )}
                    {infrastructure.provider === "Email Service" && (
                      <MailIcon className="w-4 h-4" />
                    )}
                    {infrastructure.provider === "Identity Provider" && (
                      <LockIcon className="w-4 h-4" />
                    )}
                    {infrastructure.provider === "File Storage" && (
                      <StoreIcon className="w-4 h-4" />
                    )}

                    <span>{infrastructure.provider}</span>
                  </div>
                </TableCell>
                <TableCell>{infrastructure.type}</TableCell>
                <TableCell>{infrastructure.uptime}%</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      infrastructure.status === "Operational"
                        ? "success"
                        : "destructive"
                    }
                  >
                    {infrastructure.status}
                  </Badge>
                </TableCell>
                <TableCell>${infrastructure.spendingPerMonth}/month</TableCell>
                <TableCell>
                  {infrastructure.lastIncident.toLocaleDateString()}
                </TableCell>
                <TableCell>{infrastructure.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
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
