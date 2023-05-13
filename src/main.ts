import NJV from './core/NJV'
import App from './App'
import { router } from './router';

const app = new App()

const njv = new NJV({
  app : app,
  router
});

njv.render('#app')

window.onpopstate = () => {
  njv.render('#app')
}
// TODDO: Editar comentarios de lo que he hecho
// TODDO: Editar READMY.md para explicar como funciona