import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Competitors from "../../assets/competitors.png";

const CompanyScatterPlot = () => {
  return (
    <Card className="m-4 p-4 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Development Solutions
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <img src={Competitors} alt="Competitors" className="rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default CompanyScatterPlot;
