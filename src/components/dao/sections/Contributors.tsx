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
import { TypographyH1 } from "@/components/typography/h1";
import { daos } from "@/lib/mock";

type ContributorsProps = {
  daoId: string;
};

export const Contributors = ({ daoId }: ContributorsProps) => {
  const dao = daos.find((dao) => dao.id === daoId)!;
  return (
    <div className="flex flex-col gap-10">
      <PieChart className="w-full h-[250px]" />
      <TypographyH1>Top Contributors</TypographyH1>
      <div className="grid grid-cols-3 gap-4">
        {dao.contributors.slice(0, 3).map((contributor) => (
          <Card
            key={contributor.wallet}
            className="p-4 shadow rounded-lg flex flex-col items-center justify-center gap-1"
          >
            <Avatar>
              <AvatarImage src={contributor.avatarUrl} />
              <AvatarFallback>{contributor.name[0]}</AvatarFallback>
            </Avatar>
            <div className="mt-2 text-center">
              <div className="font-bold">{contributor.name}</div>
              <div className="text-sm text-gray-500">
                {contributor.votes} votes
              </div>
            </div>
          </Card>
        ))}
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
            {dao.contributors.map((contributor) => (
              <TableRow key={contributor.wallet}>
                <TableCell>{contributor.name}</TableCell>
                <TableCell>{contributor.type}</TableCell>
                <TableCell>{contributor.votes}</TableCell>
                <TableCell>{contributor.role}</TableCell>
                <TableCell>{contributor.govOwnership}</TableCell>
                <TableCell>{contributor.income}</TableCell>
                <TableCell>{contributor.wallet}</TableCell>
                <TableCell>{contributor.keysAttached}</TableCell>
              </TableRow>
            ))}
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
        colors={["#3c79dd", "#3ec565", "#e7b124"]}
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
