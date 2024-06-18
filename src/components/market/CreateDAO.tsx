import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const CreateDAO = () => (
  <Card>
    <CardHeader>
      <CardTitle>Create DAO</CardTitle>
      <CardDescription>
        Create and manage your own decentralized autonomous organization.
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button>Create DAO</Button>
    </CardFooter>
  </Card>
);
