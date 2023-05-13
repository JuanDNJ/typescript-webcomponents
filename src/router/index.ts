import { Route } from "../core/types"
import Inicio from "../pages/Inicio"
import About from "../pages/About"


export const router: Route[] = [
  {
    path: "/",
    component: new Inicio()
  },
  {
    path: "/about",
    component: new About()
  }
]
