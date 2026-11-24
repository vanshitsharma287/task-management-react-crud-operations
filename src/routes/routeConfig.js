import { lazy } from "react"

export const publicRoutes = [
    {to: "/login", component:  lazy(() => import("../pages/Login"))},
]

export const privateRoutes = [
 {to: "/dashboard", component: lazy(() => import("../pages/Dashboard")), title: "Dashboard", icon: "fa-regular fa-house"},
 {to: "/tasks", component: lazy(() => import("../pages/Tasks")), title: "My Tasks", icon: "fa-solid fa-list-check"},
 {to: "/analytics", component: lazy(() => import("../pages/Analytics")), title: "Analytics", icon: "fa-solid fa-chart-simple"},
 {to: "/settings", component: lazy(() => import("../pages/Settings")), title: "Settings",icon: "fa-solid fa-gear"}
]
