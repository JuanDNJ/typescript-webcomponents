import { Route } from "../core/types"
import Inicio from "../pages/Inicio"
import About from "../pages/About"
import PageNotFound from "../pages/PageNotFound"
import Contact from "../pages/Contact"

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
    path: "/contact",
    component: new Contact()
  },
  {
    path: "/page-not-found",
    component: new PageNotFound()
  }
]
