import { useState } from "react";
import { Input } from "@/components/ui/input";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChangeManagementProposal } from "@/lib/types";
type Proposal = {
  id: string;
  name: string;
  version: string;
  changeType: string;
  approvalRequired: string;
  status: string;
  approvedBy: string;
  changeset: string;
  discussionLinks: string[];
  transactionId: string;
};

export const Governance = () => {
  const [proposals, _] = useState<ChangeManagementProposal[]>([
    {
      id: "PROP-001",
      name: "Increase Staking Rewards",
      version: "1.0",
      type: "Parameter Change",
      approvalRequired: "DAO Vote",
      status: "pending",
      approvedBy: ["0x123...abc", "0x456...def"],
      changeSetLink: "https://github.com/dao/proposal/diff",
      discussionLink: "https://forum.dao.com/proposal-001",
      transactionId: "0x456...def",
      date: "2021-09-01",
    },
    {
      id: "PROP-002",
      name: "Add New Token to Ecosystem",
      version: "2.1",
      type: "Contract Upgrade",
      approvalRequired: "DAO Vote",
      status: "approved",
      approvedBy: ["0x123...abc"],
      changeSetLink: "https://github.com/dao/proposal/diff",
      discussionLink: "https://forum.dao.com/proposal-002",
      transactionId: "0x789...ghi",
      date: "2021-09-15",
    },
    {
      id: "PROP-003",
      name: "Modify Governance Parameters",
      version: "1.5",
      type: "Parameter Change",
      approvalRequired: "DAO Vote",
      status: "rejected",
      approvedBy: ["0x123...abc"],
      changeSetLink: "",
      discussionLink: "https://forum.dao.com/proposal-003",
      transactionId: "0x789...ghi",
      date: "2021-09-15",
    },
  ]);
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterText, setFilterText] = useState("");
  const [expandedProposalId, setExpandedProposalId] = useState<string | null>(
    null
  );
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };
  const handleExpand = (id: string) => {
    setExpandedProposalId(expandedProposalId === id ? null : id);
  };
  const filteredProposals = proposals.filter((proposal) => {
    return (
      proposal.id.toLowerCase().includes(filterText.toLowerCase()) ||
      proposal.name.toLowerCase().includes(filterText.toLowerCase()) ||
      proposal.version.toLowerCase().includes(filterText.toLowerCase()) ||
      proposal.type.toLowerCase().includes(filterText.toLowerCase()) ||
      (proposal?.approvalRequired || "")
        .toLowerCase()
        .includes(filterText.toLowerCase()) ||
      proposal.status.toLowerCase().includes(filterText.toLowerCase()) ||
      proposal.approvedBy[0].toLowerCase().includes(filterText.toLowerCase()) ||
      proposal.transactionId.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 flex flex-col gap-4">
      <div className=" p-4 flex space-x-4 rounded-lg">
        <Card className=" p-3 flex-1 rounded-lg flex flex-col items-center justify-center">
          <CodeIcon className=" h-6 w-6" />
          <div className=" mt-1">Active Code Members</div>
          <div className=" font-bold">345</div>
        </Card>
        <Card className="p-3 flex-1 rounded-lg flex flex-col items-center justify-center">
          <GavelIcon className=" h-6 w-6" />
          <div className=" mt-1">Active Gov Members</div>
          <div className=" font-bold">345</div>
        </Card>
        <Card className="p-3  flex-1 rounded-lg flex flex-col items-center justify-center">
          <BracketsIcon className=" h-6 w-6" />
          <div className=" mt-1">Code updates proposals</div>
          <div className=" font-bold">1.2M</div>
        </Card>
        <Card className="p-3  flex-1 rounded-lg flex flex-col items-center justify-center">
          <GitPullRequestIcon className=" h-6 w-6" />
          <div className=" mt-1">Open Pull-Requests</div>
          <div className=" font-bold">0.5M</div>
        </Card>
        <Card className="p-3  flex-1 rounded-lg flex flex-col items-center justify-center">
          <HashIcon className=" h-6 w-6" />
          <div className=" mt-1"># Of Commits</div>
          <div className=" font-bold">1234</div>
        </Card>
      </div>
      <Card>
        <CardHeader className="flex gap-4">
          <CardTitle>Change Management Proposals</CardTitle>
          <Input
            placeholder="Search proposals..."
            className=" w-full max-w-md"
            value={filterText}
            onChange={handleFilter}
          />
        </CardHeader>
        <CardContent>
          <Table className=" p-4 rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer text-gray-600 dark:text-gray-300"
                  onClick={() => handleSort("id")}
                >
                  Proposal ID{" "}
                  {sortColumn === "id" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-gray-600 dark:text-gray-300"
                  onClick={() => handleSort("name")}
                >
                  Proposal Name{" "}
                  {sortColumn === "name" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-gray-600 dark:text-gray-300"
                  onClick={() => handleSort("version")}
                >
                  Version{" "}
                  {sortColumn === "version" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-gray-600 dark:text-gray-300"
                  onClick={() => handleSort("changeType")}
                >
                  Change Type{" "}
                  {sortColumn === "changeType" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-gray-600 dark:text-gray-300"
                  onClick={() => handleSort("approvalRequired")}
                >
                  Approval Required{" "}
                  {sortColumn === "approvalRequired" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-gray-600 dark:text-gray-300"
                  onClick={() => handleSort("status")}
                >
                  Status{" "}
                  {sortColumn === "status" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead
                  className="cursor-pointer text-gray-600 dark:text-gray-300"
                  onClick={() => handleSort("approvedBy")}
                >
                  Approved By{" "}
                  {sortColumn === "approvedBy" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
                <TableHead className="text-gray-600 dark:text-gray-300">
                  Changeset
                </TableHead>
                <TableHead className="text-gray-600 dark:text-gray-300">
                  Discussion
                </TableHead>
                <TableHead
                  className="cursor-pointer text-gray-600 dark:text-gray-300"
                  onClick={() => handleSort("transactionId")}
                >
                  Transaction ID{" "}
                  {sortColumn === "transactionId" && (
                    <span className="ml-1">
                      {sortDirection === "asc" ? "\u2191" : "\u2193"}
                    </span>
                  )}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProposals.map((proposal) => (
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
                      <span className="text-gray-600 dark:text-gray-300">
                        {proposal.id}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {proposal.name}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {proposal.version}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {proposal.type}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {proposal.approvalRequired}
                  </TableCell>
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
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {proposal.approvedBy || "-"}
                  </TableCell>
                  <TableCell>
                    <Link
                      href="#"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      View Changeset
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      href="#"
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
          {expandedProposalId && (
            <div className="mt-4 border rounded-lg p-4 ">
              <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                Proposal Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Proposal ID:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {proposals.find((p) => p.id === expandedProposalId)?.id}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Proposal Name:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {proposals.find((p) => p.id === expandedProposalId)?.name}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Version:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {
                      proposals.find((p) => p.id === expandedProposalId)
                        ?.version
                    }
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Change Type:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {proposals.find((p) => p.id === expandedProposalId)?.type}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Approval Required:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {
                      proposals.find((p) => p.id === expandedProposalId)
                        ?.approvalRequired
                    }
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Status:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {proposals.find((p) => p.id === expandedProposalId)?.status}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Approved By:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {proposals.find((p) => p.id === expandedProposalId)
                      ?.approvedBy || "-"}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Changeset:
                  </div>
                  <Link
                    href="#"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    View Changeset
                  </Link>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Discussion Links:
                  </div>
                  <div>
                    {proposals.find((p) => p.id === expandedProposalId)
                      ?.discussionLink && (
                      <Link
                        href={
                          proposals.find((p) => p.id === expandedProposalId)
                            ?.discussionLink
                        }
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        View Discussion
                      </Link>
                    )}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    Transaction ID:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">
                    {
                      proposals.find((p) => p.id === expandedProposalId)
                        ?.transactionId
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
