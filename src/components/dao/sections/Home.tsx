import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";

export const HomeSection = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-8 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
              DAO Metrics & Statistics
            </h2>
            <p className="mt-4 text-gray-600 md:text-xl/relaxed dark:text-gray-400">
              Explore key metrics and statistics related to the Acme DAO's
              finances, treasury, and contributors.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Finances</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Revenue
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        $120,000
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Expenses
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        $80,000
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Infrastructure
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        $40,000
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Community
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        $20,000
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Contributions
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        $20,000
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Treasury</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Value
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        $2,500,000
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        ETH
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        1,000
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        USDC
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        $500,000
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Contributors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Funding
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        25
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Code
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        15
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Community
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        40
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-8 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
              Applications & Services
            </h2>
            <p className="mt-4 text-gray-600 md:text-xl/relaxed dark:text-gray-400">
              Explore the applications, services, and intellectual property
              owned by the Acme DAO.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Acme Cloud</CardTitle>
                <CardDescription>
                  A decentralized cloud computing platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Link href="#" className="text-indigo-600 underline">
                    acmecloud.xyz
                  </Link>
                  <Link href="#" className="text-indigo-600 underline">
                    GitHub Repository
                  </Link>
                  <Link href="#" className="text-indigo-600 underline">
                    Documentation
                  </Link>
                  <Link href="#" className="text-indigo-600 underline">
                    Support Discord
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Acme Wallet</CardTitle>
                <CardDescription>
                  A secure multi-chain crypto wallet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Link href="#" className="text-indigo-600 underline">
                    acmewallet.app
                  </Link>
                  <Link href="#" className="text-indigo-600 underline">
                    GitHub Repository
                  </Link>
                  <Link href="#" className="text-indigo-600 underline">
                    Documentation
                  </Link>
                  <Link href="#" className="text-indigo-600 underline">
                    Support Twitter
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
              Change Management & Active Resources
            </h2>
            <p className="mt-4 text-gray-600 md:text-xl/relaxed dark:text-gray-400">
              View the latest changes proposed and implemented by the DAO, as
              well as the current infrastructure services and resources
              utilized.
            </p>
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
                    <TableRow>
                      <TableCell>Upgrade Acme Cloud to v2.1</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-green-600 text-white"
                        >
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell>2023-05-01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Allocate $50,000 to Community Fund</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-green-600 text-white"
                        >
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell>2023-04-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Hire 2 Full-Time Developers</TableCell>
                      <TableCell>
                        <Badge
                          variant="destructive"
                          className="bg-red-600 text-white"
                        >
                          Rejected
                        </Badge>
                      </TableCell>
                      <TableCell>2023-04-01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Launch Acme Wallet v1.0</TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-green-600 text-white"
                        >
                          Approved
                        </Badge>
                      </TableCell>
                      <TableCell>2023-03-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Redesign DAO Website</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
