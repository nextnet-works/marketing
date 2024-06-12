import { Card } from "../ui/card";

export const CreateDAO = () => (
  <Card className="bg-gray-100 dark:bg-gray-800 py-8 px-4 lg:px-6 ">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold">Create DAO</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Create and manage your own decentralized autonomous organization.
        </p>
      </div>
    </div>
  </Card>
);