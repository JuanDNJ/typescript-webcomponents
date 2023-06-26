import { Route } from "../core/types"
import Inicio from "../pages/Inicio"
import About from "../pages/About"
import PageNotFound from "../pages/PageNotFound"
import Contact from "../pages/Contact"
import Proyectos from "../pages/proyectos/Proyectos"
import TodoProyecto from "../pages/proyectos/todo/Todo"


// Definimos las rutas de la aplicación
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
    path: "/proyectos",
    component: new Proyectos()
  },
  {
    path: "/todos",
    component: new TodoProyecto()
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
