/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TeamImport } from './routes/team'
import { Route as IndexImport } from './routes/index'
import { Route as MarketIndexImport } from './routes/market/index'
import { Route as MarketDaoIdImport } from './routes/market/$daoId'

// Create/Update Routes

const TeamRoute = TeamImport.update({
  path: '/team',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MarketIndexRoute = MarketIndexImport.update({
  path: '/market/',
  getParentRoute: () => rootRoute,
} as any)

const MarketDaoIdRoute = MarketDaoIdImport.update({
  path: '/market/$daoId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/team': {
      id: '/team'
      path: '/team'
      fullPath: '/team'
      preLoaderRoute: typeof TeamImport
      parentRoute: typeof rootRoute
    }
    '/market/$daoId': {
      id: '/market/$daoId'
      path: '/market/$daoId'
      fullPath: '/market/$daoId'
      preLoaderRoute: typeof MarketDaoIdImport
      parentRoute: typeof rootRoute
    }
    '/market/': {
      id: '/market/'
      path: '/market'
      fullPath: '/market'
      preLoaderRoute: typeof MarketIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  TeamRoute,
  MarketDaoIdRoute,
  MarketIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/team",
        "/market/$daoId",
        "/market/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/team": {
      "filePath": "team.tsx"
    },
    "/market/$daoId": {
      "filePath": "market/$daoId.tsx"
    },
    "/market/": {
      "filePath": "market/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
