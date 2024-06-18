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
import { daos } from "@/lib/mock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyMuted } from "@/components/typography/muted";

type InfrastructureProps = {
  daoId: string;
};

export const Infrastructure = ({ daoId }: InfrastructureProps) => {
  const dao = daos.find((dao) => dao.id === daoId)!;
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Infrastructure</CardTitle>
          <CardDescription>
            This section shows the infrastructure used by the DAO.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                  <TableCell>
                    ${infrastructure.spendingPerMonth}/month
                  </TableCell>
                  <TableCell>
                    {infrastructure.lastIncident.toLocaleDateString()}
                  </TableCell>
                  <TableCell>{infrastructure.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Applications and Services</CardTitle>
          <CardDescription>
            This section shows the applications and services used by the DAO.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 w-full grid-cols-2 md:grid-cols-3">
          {Object.entries(dao.apps).map(([name, app]) => (
            <Card key={name}>
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-4">
                {app.apps.map((app) => (
                  <div
                    key={app.name}
                    className="flex flex-col items-center gap-4"
                  >
                    <Avatar>
                      <AvatarImage src={app.link} />
                      <AvatarFallback>{app.name[0]}</AvatarFallback>
                    </Avatar>
                    <TypographyMuted>{app.name}</TypographyMuted>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
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
