import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import { daos } from "@/lib/mock";
import { TypographyMuted } from "@/components/typography/muted";
import { TypographyLarge } from "@/components/typography/large";
import { TypographyLead } from "@/components/typography/lead";
import { TypographyH1 } from "@/components/typography/h1";

type HomeProps = {
  daoId: string;
};
export const HomeSection = ({ daoId }: HomeProps) => {
  const dao = daos.find((dao) => dao.id === daoId)!;
  return (
    <div className="flex flex-col gap-36">
      <section className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <TypographyH1>DAO Metrics & Statistics</TypographyH1>
          <TypographyLead>
            Explore key metrics and statistics related to the Acme DAO's
            finances, treasury, and contributors.
          </TypographyLead>
        </div>
        <div className="flex gap-4 w-full">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Finances</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <TypographyMuted>Revenue</TypographyMuted>
                <TypographyLarge>${dao.financial.revenues}</TypographyLarge>
              </div>
              <div className="flex items-center justify-between">
                <TypographyMuted>Expenses</TypographyMuted>
                <TypographyLarge>${dao.financial.expenses}</TypographyLarge>
              </div>
              <div className="flex items-center justify-between">
                <TypographyMuted>Infrastructure</TypographyMuted>
                <TypographyLarge>
                  ${dao.financial.infrastructure}
                </TypographyLarge>
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Code</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <TypographyMuted>Contributors</TypographyMuted>
                <TypographyLarge>{dao.code.contributors}</TypographyLarge>
              </div>
              <div className="flex items-center justify-between">
                <TypographyMuted>Code Pushes</TypographyMuted>
                <TypographyLarge>{dao.code.pushes}</TypographyLarge>
              </div>
              <div className="flex items-center justify-between">
                <TypographyMuted>Proposals</TypographyMuted>
                <TypographyLarge>{dao.code.proposals}</TypographyLarge>
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Treasury</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <TypographyMuted>Total Value</TypographyMuted>
                  <TypographyLarge>
                    ${dao.financial.treasury.dai}
                  </TypographyLarge>
                </div>
                <div className="flex items-center justify-between">
                  <TypographyMuted>ETH</TypographyMuted>
                  <TypographyLarge>
                    {dao.financial.treasury.eth}
                  </TypographyLarge>
                </div>
                <div className="flex items-center justify-between">
                  <TypographyMuted>USDC</TypographyMuted>
                  <TypographyLarge>
                    ${dao.financial.treasury.usdc}
                  </TypographyLarge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <TypographyH1>Change Management & Active Resources</TypographyH1>
          <TypographyLead>
            View the latest changes proposed and implemented by the DAO, as well
            as the current infrastructure services and resources utilized.
          </TypographyLead>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Latest Changes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Change</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dao.changeManagementProposals.map((proposal) => (
                    <TableRow key={proposal.id}>
                      <TableCell>{proposal.name}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            proposal.status === "approved"
                              ? "success"
                              : proposal.status === "pending"
                                ? "warning"
                                : "destructive"
                          }
                        >
                          {proposal.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Cloud Compute</TableCell>
                    <TableCell>Acme Cloud</TableCell>
                    <TableCell>$5,000/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Storage</TableCell>
                    <TableCell>Filecoin</TableCell>
                    <TableCell>$2,000/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>CDN</TableCell>
                    <TableCell>Cloudflare</TableCell>
                    <TableCell>$500/month</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
