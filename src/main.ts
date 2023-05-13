import NJV from './core/NJV'
import { router } from './router';

const njv = new NJV({router});

window.onpopstate = () => {
  njv.render('#app')
}
njv.render('#app')
// TODDO: Editar comentarios de lo que he hecho
// TODDO: Editar READMY.md para explicar como funciona