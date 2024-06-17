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
      revenues: 300000,
      expenses: 200000,
      infrastructure: 100000,
      treasury: {
        eth: 100000,
        dai: 100000,
        usdc: 100000,
      },
      nodes: {
        active: 25,
        totalActiveDuration: 10,
        remainingActiveDuration: 2,
        totalBalance: 5000,
        remainingBalance: 1200,
        totalSpending: 3800,
        spendingPerHour: 15.5,
      },
      revenue: {
        sales: 2500000,
        subscriptions: 1200000,
        other: 300000,
      },
      expensesData: {
        costOfGoods: 1200000,
        marketing: 500000,
        RnD: 800000,
        GnA: 600000,
      },
      tokens: [
        {
          name: "USDC",
          totalSupply: 141455.84075,
          usdValue: 141.46,
        },
        {
          name: "OSMO",
          totalSupply: 121963.87561,
          usdValue: 79.33,
        },
        {
          name: "USDC.axl",
          totalSupply: 724.278375,
          usdValue: 725,
        },
      ],
    },
    applicationsAndServices: [
      {
        name: "Observability Cloud",
        description: "OpenTelemetry Service",
        appLink: "https://observability.cloud",
        repositoryLink: "",
        docsLink: "",
        communityLink: "",
      },
    ],
    infrastructure: [
      {
        provider: "Cloud Hosting",
        type: "External",
        uptime: 99.98,
        status: "Operational",
        spendingPerMonth: 2500,
        lastIncident: new Date("2022-01-01"),
        description:
          "Provides cloud hosting services for our web applications.",
      },
      {
        provider: "Database",
        type: "Internal",
        uptime: 100,
        status: "Operational",
        spendingPerMonth: 1000,
        lastIncident: new Date("2022-01-01"),
        description:
          "Manages our relational database for storing application data.",
      },
      {
        provider: "Email Service",
        type: "External",
        uptime: 99.95,
        status: "Degraded",
        spendingPerMonth: 500,
        lastIncident: new Date("2022-01-01"),
        description: "Handles email delivery and transactional email services.",
      },
      {
        provider: "Identity Provider",
        type: "External",
        uptime: 99.99,
        status: "Operational",
        spendingPerMonth: 300,
        lastIncident: new Date("2022-01-01"),
        description:
          "Manages user authentication and authorization for our applications.",
      },
      {
        provider: "File Storage",
        type: "Internal",
        uptime: 100,
        status: "Operational",
        spendingPerMonth: 800,
        lastIncident: new Date("2022-01-01"),
        description:
          "Provides file storage and content delivery for our applications.",
      },
    ],
    changeManagementProposals: [
      {
        id: "PROP-001",
        name: "Add support for Prometheus",
        type: "DAO Vote",
        status: "pending",
        approvedBy: ["0x1234", "0x5678"],
        changeSetLink: "",
        discussionLink: "",
        version: "1.0",
        date: "2021-09-01",
        transactionId: "0x1234",
      },
    ],
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
      revenues: 300000,
      expenses: 200000,
      infrastructure: 100000,
      treasury: {
        eth: 100000,
        dai: 100000,
        usdc: 100000,
      },
      nodes: {
        active: 25,
        totalActiveDuration: 10,
        remainingActiveDuration: 2,
        totalBalance: 5000,
        remainingBalance: 1200,
        totalSpending: 3800,
        spendingPerHour: 15.5,
      },
      revenue: {
        sales: 2500000,
        subscriptions: 1200000,
        other: 300000,
      },
      expensesData: {
        costOfGoods: 1200000,
        marketing: 500000,
        RnD: 800000,
        GnA: 600000,
      },
      tokens: [
        {
          name: "USDC",
          totalSupply: 141455.84075,
          usdValue: 141.46,
        },
        {
          name: "OSMO",
          totalSupply: 121963.87561,
          usdValue: 79.33,
        },
        {
          name: "USDC.axl",
          totalSupply: 724.278375,
          usdValue: 725,
        },
      ],
    },
    infrastructure: [
      {
        provider: "Cloud Hosting",
        type: "External",
        uptime: 99.98,
        status: "Operational",
        spendingPerMonth: 2500,
        lastIncident: new Date("2022-01-01"),
        description:
          "Provides cloud hosting services for our web applications.",
      },
      {
        provider: "Database",
        type: "Internal",
        uptime: 100,
        status: "Operational",
        spendingPerMonth: 1000,
        lastIncident: new Date("2022-01-01"),
        description:
          "Manages our relational database for storing application data.",
      },
      {
        provider: "Email Service",
        type: "External",
        uptime: 99.95,
        status: "Degraded",
        spendingPerMonth: 500,
        lastIncident: new Date("2022-01-01"),
        description: "Handles email delivery and transactional email services.",
      },
      {
        provider: "Identity Provider",
        type: "External",
        uptime: 99.99,
        status: "Operational",
        spendingPerMonth: 300,
        lastIncident: new Date("2022-01-01"),
        description:
          "Manages user authentication and authorization for our applications.",
      },
      {
        provider: "File Storage",
        type: "Internal",
        uptime: 100,
        status: "Operational",
        spendingPerMonth: 800,
        lastIncident: new Date("2022-01-01"),
        description:
          "Provides file storage and content delivery for our applications.",
      },
    ],
    applicationsAndServices: [
      {
        name: "Morpheus AI",
        description: "AI Fleet Management",
        appLink: "https://morpheus.ai",
        repositoryLink: "",
        docsLink: "",
        communityLink: "",
      },
    ],
    changeManagementProposals: [],
    code: {
      contributors: 200,
      proposals: 80,
      pushes: 600,
    },
  },
];
