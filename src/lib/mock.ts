import Logo1 from "@/assets/logo-1.png";
import Logo2 from "@/assets/logo-2.png";
import { Dao } from "./types";
export const daos: Dao[] = [
  {
    id: "1",
    apps: {
      "Web-Development": {
        name: "React",
        description: "A JavaScript library for building user interfaces",
        apps: [
          {
            name: "Create React App",
            description: "Create React apps with no build configuration.",
            link: "https://create-react-app.dev/",
          },
          {
            name: "Next.js",
            description: "The React Framework for Production",
            link: "https://nextjs.org/",
          },
          {
            name: "Vue",
            description: "The Progressive JavaScript Framework",
            link: "https://vuejs.org/",
          },
        ],
      },
      "Mobile-App-Development": {
        name: "React Native",
        description: "Create native apps for Android and iOS using React",
        apps: [
          {
            name: "Expo",
            description: "The fastest way to build an app",
            link: "https://expo.dev/",
          },
          {
            name: "React Native CLI",
            description: "Create a new React Native project",
            link: "https://reactnative.dev/docs/environment-setup",
          },
        ],
      },

      "UI/UX": {
        name: "Figma",
        description: "The collaborative interface design tool",
        apps: [
          {
            name: "Figma",
            description: "The collaborative interface design tool",
            link: "https://www.figma.com/",
          },
          {
            name: "Sketch",
            description:
              "Create, prototype, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.",
            link: "https://www.sketch.com/",
          },
        ],
      },
      "Cloud-Computing": {
        name: "AWS",
        description: "Amazon Web Services",
        apps: [
          {
            name: "EC2",
            description: "Elastic Compute Cloud",
            link: "https://aws.amazon.com/ec2/",
          },
          {
            name: "S3",
            description: "Simple Storage Service",
            link: "https://aws.amazon.com/s3/",
          },
        ],
      },
      "Artificial-Intelligence": {
        name: "TensorFlow",
        description: "An open-source machine learning framework",
        apps: [
          {
            name: "TensorFlow",
            description: "An open-source machine learning framework",
            link: "https://www.tensorflow.org/",
          },
          {
            name: "Keras",
            description: "Deep Learning for humans",
            link: "https://keras.io/",
          },
        ],
      },
      "Blockchain-Development": {
        name: "Ethereum",
        description: "A decentralized platform that runs smart contracts",
        apps: [
          {
            name: "Solidity",
            description: "The language of Ethereum smart contracts",
            link: "https://docs.soliditylang.org/en/v0.8.7/",
          },
          {
            name: "Hardhat",
            description: "Ethereum development environment",
            link: "https://hardhat.org/",
          },
        ],
      },
    },
    name: "The Observability CloudDao",
    description:
      "aims to provide a managed OpenTelemetry Service (OTaaS) in a vendor agnostic way, to instrument and collect application data in order to provide developers best-in-class Observability capabilities. This central service will provide all teams with their own OpenTelemetry collector instance. These instances contains configuration that is managed and owned centrally by the DAOs or users of the service",
    category: ["Cloud Services"],
    governance: "NFT Based",
    avatarUrl: Logo1,
    contributors: [
      {
        name: "Luke",
        avatarUrl: "/placeholder-user.jpg",
        type: "Core",
        votes: 213,
        role: "Dev",
        govOwnership: 1,
        income: 100,
        wallet: "xxxx",
        keysAttached: 2,
      },
      {
        name: "xNet",
        avatarUrl: "/placeholder-user.jpg",
        type: "Core",
        votes: 32,
        role: "Tester",
        govOwnership: 1,
        income: 50,
        wallet: "x",
        keysAttached: 0,
      },
      {
        name: "Gusy",
        avatarUrl: "/placeholder-user.jpg",
        type: "Funding",
        votes: 44,
        role: "Funder, Dev, Tester",
        govOwnership: 1,
        income: 100,
        wallet: "xx",
        keysAttached: 6,
      },
    ],
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
        name: "upgrading OTEL Collector version to v0.103.1",
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
        name: "add support for HostMetricsReceiver in the DAO collector",
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
    ],
    code: {
      contributors: 137,
      proposals: 2000,
      pushes: 789,
      pulls: 123,
      govMembers: 1000,
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
    contributors: [
      {
        name: "Luke",
        avatarUrl: "/placeholder-user.jpg",
        votes: 213,
        type: "Core",
        role: "Dev",
        govOwnership: 1,
        income: 100,
        wallet: "xxxx",
        keysAttached: 2,
      },
      {
        name: "xNet",
        avatarUrl: "/placeholder-user.jpg",
        votes: 32,
        type: "Core",
        role: "Tester",
        govOwnership: 1,
        income: 50,
        wallet: "x",
        keysAttached: 0,
      },
      {
        name: "Gusy",
        avatarUrl: "/placeholder-user.jpg",
        votes: 44,
        type: "Advisory",
        role: "Funder, Dev, Tester",
        govOwnership: 1,
        income: 100,
        wallet: "xx",
        keysAttached: 6,
      },
    ],
    apps: {
      "Web-Development": {
        name: "React",
        description: "A JavaScript library for building user interfaces",
        apps: [
          {
            name: "Create React App",
            description: "Create React apps with no build configuration.",
            link: "https://create-react-app.dev/",
          },
          {
            name: "Next.js",
            description: "The React Framework for Production",
            link: "https://nextjs.org/",
          },
          {
            name: "Vue",
            description: "The Progressive JavaScript Framework",
            link: "https://vuejs.org/",
          },
        ],
      },
      "Mobile-App-Development": {
        name: "React Native",
        description: "Create native apps for Android and iOS using React",
        apps: [
          {
            name: "Expo",
            description: "The fastest way to build an app",
            link: "https://expo.dev/",
          },
          {
            name: "React Native CLI",
            description: "Create a new React Native project",
            link: "https://reactnative.dev/docs/environment-setup",
          },
        ],
      },

      "UI/UX": {
        name: "Figma",
        description: "The collaborative interface design tool",
        apps: [
          {
            name: "Figma",
            description: "The collaborative interface design tool",
            link: "https://www.figma.com/",
          },
          {
            name: "Sketch",
            description:
              "Create, prototype, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.",
            link: "https://www.sketch.com/",
          },
        ],
      },
      "Cloud-Computing": {
        name: "AWS",
        description: "Amazon Web Services",
        apps: [
          {
            name: "EC2",
            description: "Elastic Compute Cloud",
            link: "https://aws.amazon.com/ec2/",
          },
          {
            name: "S3",
            description: "Simple Storage Service",
            link: "https://aws.amazon.com/s3/",
          },
        ],
      },
      "Artificial-Intelligence": {
        name: "TensorFlow",
        description: "An open-source machine learning framework",
        apps: [
          {
            name: "TensorFlow",
            description: "An open-source machine learning framework",
            link: "https://www.tensorflow.org/",
          },
          {
            name: "Keras",
            description: "Deep Learning for humans",
            link: "https://keras.io/",
          },
        ],
      },
      "Blockchain-Development": {
        name: "Ethereum",
        description: "A decentralized platform that runs smart contracts",
        apps: [
          {
            name: "Solidity",
            description: "The language of Ethereum smart contracts",
            link: "https://docs.soliditylang.org/en/v0.8.7/",
          },
          {
            name: "Hardhat",
            description: "Ethereum development environment",
            link: "https://hardhat.org/",
          },
        ],
      },
    },
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

    changeManagementProposals: [
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
    ],
    code: {
      contributors: 200,
      proposals: 80,
      pushes: 600,
      pulls: 123,
      govMembers: 1000,
    },
  },
];
