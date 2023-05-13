import { Route } from "../core/types"
import Inicio from "../pages/Inicio"
import About from "../pages/About"
import PageNotFound from "../pages/PageNotFound"

export const router: Route[] = [
  {
    path: "/",
    component: new Inicio()
  },
  {
    path: "/about",
    component: new About()
  },
  {
    path: "/page-not-found",
    component: new PageNotFound()
  }
]
