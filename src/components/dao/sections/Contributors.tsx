import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ResponsivePie } from "@nivo/pie";

export const Contributors = () => {
  return (
    <div className="flex flex-col space-y-10">
      <PieChart className="w-full h-[300px]" />
      <h1 className="text-2xl font-bold">Top Contributors</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card className=" p-4 shadow rounded-lg flex flex-col items-center justify-center">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <div className="mt-2 text-center">
            <div className="font-bold">Luke</div>
            <div className="text-sm text-gray-500">213 votes</div>
          </div>
        </Card>
        <Card className=" p-4 shadow rounded-lg flex flex-col items-center justify-center">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <div className="mt-2 text-center">
            <div className="font-bold">xNet</div>
            <div className="text-sm text-gray-500">32 votes</div>
          </div>
        </Card>
        <Card className=" p-4 shadow rounded-lg flex flex-col items-center justify-center">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <div className="mt-2 text-center">
            <div className="font-bold">Gusy</div>
            <div className="text-sm text-gray-500">44 votes</div>
          </div>
        </Card>
      </div>
      <Card>
        <h1 className="text-2xl font-bold">Contributors Table</h1>
        <Table className="w-full rounded-lg">
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Contributor Type</TableHead>
              <TableHead># of votes</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Gov Ownership %</TableHead>
              <TableHead>Income</TableHead>
              <TableHead>Wallet</TableHead>
              <TableHead>Keys Attached</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Luke</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>213</TableCell>
              <TableCell>Dev</TableCell>
              <TableCell>1%</TableCell>
              <TableCell>$$$</TableCell>
              <TableCell>xxxx</TableCell>
              <TableCell>IAM/Multisigs, Storage</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>xNet</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>32</TableCell>
              <TableCell>Tester</TableCell>
              <TableCell>1%</TableCell>
              <TableCell>$$</TableCell>
              <TableCell>x</TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell>Gusy</TableCell>
              <TableCell>Code, Funding</TableCell>
              <TableCell>44</TableCell>
              <TableCell>Funder, Dev, Tester</TableCell>
              <TableCell>1%</TableCell>
              <TableCell>$$$</TableCell>
              <TableCell>xx</TableCell>
              <TableCell>A B C D Y I</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

interface PieChartProps extends React.HTMLProps<HTMLDivElement> {}

const PieChart: React.FC<PieChartProps> = (props) => {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Funders", value: 45 },
          { id: "Code", value: 35 },
          { id: "Both", value: 20 },
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
        colors={["#2563eb", "#34d399", "#f59e0b"]}
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
              color: "#000000",
            },
          },
        }}
        role="application"
      />
    </div>
  );
};
