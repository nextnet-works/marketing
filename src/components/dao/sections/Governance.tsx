import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import {
  BracketsIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CodeIcon,
  GavelIcon,
  GitPullRequestIcon,
  HashIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Route } from "@/routes/market/$daoId";
import { daos } from "@/lib/mock";
import { TypographyLead } from "@/components/typography/lead";
import { TypographyH3 } from "@/components/typography/h3";

export const Governance = () => {
  const { daoId } = Route.useParams();
  const dao = daos.find((dao) => dao.id === daoId)!;
  const [expandedProposalId, setExpandedProposalId] = useState<string | null>(
    null
  );

  const handleExpand = (id: string) => {
    setExpandedProposalId(expandedProposalId === id ? null : id);
  };

  const selectedChangeManagementProposal = dao.changeManagementProposals.find(
    (p) => p.id === expandedProposalId
  );

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-4">
        <Card className="flex flex-col items-center justify-center gap-2 flex-1 text-center">
          <CodeIcon className="h-6 w-6" />
          <CardTitle>Active Code Members</CardTitle>
          <CardDescription>{dao.code.contributors}</CardDescription>
        </Card>
        <Card className="flex flex-col items-center justify-center gap-2 flex-1 text-center">
          <GavelIcon className="h-6 w-6" />
          <CardTitle>Gov Members</CardTitle>
          <CardDescription>{dao.code.govMembers}</CardDescription>
        </Card>
        <Card className="flex flex-col items-center justify-center gap-2 flex-1 text-center">
          <BracketsIcon className="h-6 w-6" />
          <CardTitle>Code updates proposals</CardTitle>
          <CardDescription>{dao.code.proposals}</CardDescription>
        </Card>
        <Card className="flex flex-col items-center justify-center gap-2 flex-1 text-center">
          <GitPullRequestIcon className="h-6 w-6" />
          <CardTitle>Open Pull-Requests</CardTitle>
          <CardDescription>{dao.code.pulls}</CardDescription>
        </Card>
        <Card className="flex flex-col items-center justify-center gap-2 flex-1 text-center">
          <HashIcon className="h-6 w-6" />
          <CardTitle># Of Commits</CardTitle>
          <CardDescription>{dao.code.pushes}</CardDescription>
        </Card>
      </div>
      <Card>
        <CardHeader className="flex gap-4">
          <CardTitle>Change Management Proposals</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Proposal ID</TableHead>
                <TableHead>Proposal Name</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Change Type</TableHead>
                <TableHead>Approval Required</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Approved By</TableHead>
                <TableHead>Changeset</TableHead>
                <TableHead>Discussion</TableHead>
                <TableHead>Transaction ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dao.changeManagementProposals.map((proposal) => (
                <TableRow key={proposal.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        onClick={() => handleExpand(proposal.id)}
                      >
                        {expandedProposalId === proposal.id ? (
                          <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                          <ChevronDownIcon className="h-4 w-4" />
                        )}
                      </Button>
                      <span>{proposal.id}</span>
                    </div>
                  </TableCell>
                  <TableCell>{proposal.name}</TableCell>
                  <TableCell>{proposal.version}</TableCell>
                  <TableCell>{proposal.type}</TableCell>
                  <TableCell>{proposal.approvalRequired}</TableCell>
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
                  <TableCell>{proposal.approvedBy || "-"}</TableCell>
                  <TableCell>
                    <Link
                      href={proposal.changeSetLink}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      View Changeset
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={proposal.discussionLink}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      View Discussion
                    </Link>
                  </TableCell>
                  <TableCell>{proposal.transactionId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {selectedChangeManagementProposal && (
            <Card>
              <CardHeader>
                <CardTitle>Proposal Details</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <TypographyH3>Proposal ID:</TypographyH3>
                  <TypographyLead>
                    {selectedChangeManagementProposal.id}
                  </TypographyLead>
                </div>
                <div>
                  <TypographyH3>Proposal Name:</TypographyH3>
                  <TypographyLead>
                    {selectedChangeManagementProposal.name}
                  </TypographyLead>
                </div>
                <div>
                  <TypographyH3>Version:</TypographyH3>
                  <TypographyLead>
                    {selectedChangeManagementProposal.version}
                  </TypographyLead>
                </div>
                <div>
                  <TypographyH3>Change Type:</TypographyH3>
                  <TypographyLead>
                    {selectedChangeManagementProposal.type}
                  </TypographyLead>
                </div>
                <div>
                  <TypographyH3>Approval Required:</TypographyH3>
                  <TypographyLead>
                    {selectedChangeManagementProposal.approvalRequired}
                  </TypographyLead>
                </div>
                <div>
                  <TypographyH3>Status:</TypographyH3>
                  <TypographyLead>
                    {selectedChangeManagementProposal.status}
                  </TypographyLead>
                </div>
                <div>
                  <TypographyH3>Approved By:</TypographyH3>
                  <TypographyLead>
                    {dao.changeManagementProposals.find(
                      (p) => p.id === expandedProposalId
                    )?.approvedBy || "-"}
                  </TypographyLead>
                </div>
                <div>
                  <TypographyH3>Changeset:</TypographyH3>
                  <Link
                    href={selectedChangeManagementProposal.changeSetLink}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    View Changeset
                  </Link>
                </div>
                <div>
                  <TypographyH3>Discussion:</TypographyH3>
                  <Link
                    href={selectedChangeManagementProposal.discussionLink}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    View Discussion
                  </Link>
                </div>
                <div>
                  <TypographyH3>Transaction ID:</TypographyH3>
                  <TypographyLead>
                    {selectedChangeManagementProposal.transactionId}
                  </TypographyLead>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
