import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CircleIcon } from "lucide-react";

export const Financials = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mx-auto justify-center items-center">
      <Card className="h-full w-full mx-auto">
        <CardHeader>
          <CardTitle>Profit & Loss Statement</CardTitle>
          <CardDescription>
            A detailed view of the company's financial performance and future
            budget.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-4">
              <div className="font-medium text-lg">Profit & Loss</div>
              <BarChart className="aspect-[16/9]" />
            </div>
            <div className="grid gap-4">
              <div className="font-medium text-lg">Future Budget</div>
              <BarChart className="aspect-[16/9]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="grid gap-2">
              <div className="font-medium">Revenue</div>
              <div className="flex justify-between">
                <div>Sales</div>
                <div className="font-medium">$2.5M</div>
              </div>
              <div className="flex justify-between">
                <div>Subscriptions</div>
                <div className="font-medium">$1.2M</div>
              </div>
              <div className="flex justify-between">
                <div>Other</div>
                <div className="font-medium">$0.3M</div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Expenses</div>
              <div className="flex justify-between">
                <div>Cost of Goods Sold</div>
                <div className="font-medium">$1.2M</div>
              </div>
              <div className="flex justify-between">
                <div>Marketing</div>
                <div className="font-medium">$0.5M</div>
              </div>
              <div className="flex justify-between">
                <div>R&D</div>
                <div className="font-medium">$0.8M</div>
              </div>
              <div className="flex justify-between">
                <div>G&A</div>
                <div className="font-medium">$0.6M</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="bg-[#0d0d2b] text-white p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">Treasury Value</h2>
            <CircleIcon className="h-5 w-5" />
          </div>
          <LineChart className="w-full h-[300px]" />
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="ghost">D</Button>
            <Button variant="ghost">W</Button>
            <Button variant="ghost">M</Button>
            <Button variant="ghost">Y</Button>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Tokens</h3>
            <div className="flex items-center">
              <Badge variant="secondary">Highest USD value</Badge>
              <CircleIcon className="h-4 w-4 ml-2" />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Token</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Est. USD value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                    </Avatar>
                    <span>USDC</span>
                  </div>
                </TableCell>
                <TableCell>141,455.84075</TableCell>
                <TableCell>$141.46K</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                    </Avatar>
                    <span>OSMO</span>
                  </div>
                </TableCell>
                <TableCell>121,963.87561</TableCell>
                <TableCell>$79.33K</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                    </Avatar>
                    <span>USDC.axl</span>
                  </div>
                </TableCell>
                <TableCell>724.278375</TableCell>
                <TableCell>$725.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

function BarChart(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
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
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function LineChart(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
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
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
