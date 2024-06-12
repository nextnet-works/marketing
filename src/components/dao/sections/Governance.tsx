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
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
interface Proposal {
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
}

type ProposalKey = keyof Proposal;

export const Governance = () => {
  const [proposals, _] = useState([
    {
      id: "PROP-001",
      name: "Increase Staking Rewards",
      version: "1.0",
      changeType: "Parameter Change",
      approvalRequired: "DAO Vote",
      status: "Pending",
      approvedBy: "0x123...abc",
      changeset: "https://github.com/dao/proposal/diff",
      discussionLinks: ["https://forum.dao.com/proposal-001"],
      transactionId: "0x456...def",
    },
    {
      id: "PROP-002",
      name: "Add New Token to Ecosystem",
      version: "2.1",
      changeType: "Contract Upgrade",
      approvalRequired: "DAO Vote",
      status: "Approved",
      approvedBy: "0x456...def",
      changeset: "https://github.com/dao/proposal/diff",
      discussionLinks: ["https://forum.dao.com/proposal-002"],
      transactionId: "0x789...ghi",
    },
    {
      id: "PROP-003",
      name: "Modify Governance Parameters",
      version: "1.5",
      changeType: "Parameter Change",
      approvalRequired: "DAO Vote",
      status: "Rejected",
      approvedBy: "",
      changeset: "https://github.com/dao/proposal/diff",
      discussionLinks: ["https://forum.dao.com/proposal-003"],
      transactionId: "0xabc...def",
    },
    {
      id: "PROP-004",
      name: "Upgrade Core Contract",
      version: "3.0",
      changeType: "Contract Upgrade",
      approvalRequired: "DAO Vote",
      status: "Pending",
      approvedBy: "",
      changeset: "https://github.com/dao/proposal/diff",
      discussionLinks: ["https://forum.dao.com/proposal-004"],
      transactionId: "0xghi...jkl",
    },
    {
      id: "PROP-005",
      name: "Adjust Liquidity Mining Rewards",
      version: "2.3",
      changeType: "Parameter Change",
      approvalRequired: "DAO Vote",
      status: "Approved",
      approvedBy: "0x789...ghi",
      changeset: "https://github.com/dao/proposal/diff",
      discussionLinks: ["https://forum.dao.com/proposal-005"],
      transactionId: "0xmno...pqr",
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
      proposal.changeType.toLowerCase().includes(filterText.toLowerCase()) ||
      proposal.approvalRequired
        .toLowerCase()
        .includes(filterText.toLowerCase()) ||
      proposal.status.toLowerCase().includes(filterText.toLowerCase()) ||
      proposal.approvedBy.toLowerCase().includes(filterText.toLowerCase()) ||
      proposal.transactionId.toLowerCase().includes(filterText.toLowerCase())
    );
  });
  const sortedProposals = filteredProposals.sort((a, b) => {
    const key = sortColumn as ProposalKey;
    if (a[key] < b[key]) return sortDirection === "asc" ? -1 : 1;
    if (a[key] > b[key]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Change Management Proposals
        </h1>
        <Input
          placeholder="Search proposals..."
          className="bg-white dark:bg-gray-950 w-full max-w-md"
          value={filterText}
          onChange={handleFilter}
        />
      </div>
      <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800">
        <Table>
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
            {sortedProposals.map((proposal) => (
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
                  {proposal.changeType}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">
                  {proposal.approvalRequired}
                </TableCell>
                <TableCell>
                  <Badge
                    // variant={
                    //   proposal.status === "Pending"
                    //     ? "pending"
                    //     : proposal.status === "Approved"
                    //       ? "success"
                    //       : "danger"
                    // }
                    className={
                      proposal.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : proposal.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
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
                  {proposal.discussionLinks.map((_, index) => (
                    <div key={index}>
                      <Link
                        href="#"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Discussion {index + 1}
                      </Link>
                    </div>
                  ))}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300">
                  {proposal.transactionId}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {expandedProposalId && (
        <div className="mt-4 border rounded-lg p-4 bg-white dark:bg-gray-800">
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
                {proposals.find((p) => p.id === expandedProposalId)?.version}
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-600 dark:text-gray-300">
                Change Type:
              </div>
              <div className="text-gray-800 dark:text-gray-200">
                {proposals.find((p) => p.id === expandedProposalId)?.changeType}
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
                {proposals
                  .find((p) => p.id === expandedProposalId)
                  ?.discussionLinks.map((_, index) => (
                    <div key={index}>
                      <Link
                        href="#"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Discussion {index + 1}
                      </Link>
                    </div>
                  ))}
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
    </div>
  );
};
