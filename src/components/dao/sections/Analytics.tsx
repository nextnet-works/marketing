import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";

export function Analytics() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Monthly Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <BarChart className="absolute inset-0 w-full h-full blur-sm" />
            <div className="absolute inset-0 grid grid-cols-[auto_1fr_auto] items-center px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Jan</span>
              <div className="flex justify-between">
                <span>Revenue</span>
                <span>Profit</span>
              </div>
              <span>Dec</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Yearly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <LineChart className="absolute inset-0 w-full h-full blur-sm" />
            <div className="absolute inset-0 grid grid-cols-[auto_1fr_auto] items-center px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
              <span>2018</span>
              <div className="flex justify-between">
                <span>Revenue</span>
                <span>Profit</span>
              </div>
              <span>2023</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Customer Satisfaction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <PieChart className="absolute inset-0 w-full h-full blur-sm" />
            <div className="absolute inset-0 grid grid-cols-[auto_1fr_auto] items-center px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Very Satisfied</span>
              <div className="flex justify-between">
                <span>Satisfied</span>
                <span>Unsatisfied</span>
              </div>
              <span>Very Unsatisfied</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <BarChart className="absolute inset-0 w-full h-full blur-sm" />
            <div className="absolute inset-0 grid grid-cols-[auto_1fr_auto] items-center px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Organic</span>
              <div className="flex justify-between">
                <span>Social</span>
                <span>Paid</span>
              </div>
              <span>Other</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {}

function BarChart(props: BarChartProps) {
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

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {}

function LineChart(props: LineChartProps) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
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

interface PieChartProps extends React.HTMLAttributes<HTMLDivElement> {}

function PieChart(props: PieChartProps) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
