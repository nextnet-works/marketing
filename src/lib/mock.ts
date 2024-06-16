import Logo1 from "@/assets/logo-1.png";
import Logo2 from "@/assets/logo-2.png";
import { Dao } from "./types";
export const daos: Dao[] = [
  {
    id: "1",
    name: "The Observability CloudDao",
    description:
      "aims to provide a managed OpenTelemetry Service (OTaaS) in a vendor agnostic way, to instrument and collect application data in order to provide developers best-in-class Observability capabilities. This central service will provide all teams with their own OpenTelemetry collector instance. These instances contains configuration that is managed and owned centrally by the DAOs or users of the service",
    category: ["Cloud Services"],
    governance: "NFT Based",
    avatarUrl: Logo1,
    financial: {
      revenues: 3500000,
      expenses: 1000000,
      infrastructure: 500000,
    },
    code: {
      contributors: 137,
      proposals: 2000,
      pushes: 789,
    },
  },
  {
    id: "2",
    name: "Morpheus AI Fleet Management",
    category: ["DePin"],
    avatarUrl: Logo2,

    description:
      "Morpheus AI offers a cutting-edge solution for automating and optimizing fleet deployments across decentralized cloud infrastructure, such as Akash Network and other DePINs (Decentralized Physical Infrastructure Networks). By leveraging advanced APIs and automated protocols, Morpheus AI ensures the seamless deployment and management of AI workloads. This not only optimizes costs but also significantly enhances operational efficiency and scalability.",
    governance: "Token Based",
    financial: {
      revenues: 1200000,
      expenses: 600000,
      infrastructure: 200000,
    },
    code: {
      contributors: 200,
      proposals: 80,
      pushes: 600,
    },
  },
];
