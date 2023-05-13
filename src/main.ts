import NJV from './core/NJV'
import App from './App'
import { router } from './router';

const app = new App()

const njv = new NJV({
  app : app,
  router
});


console.log(njv)


document.querySelector<HTMLDivElement>('#app')!.appendChild(njv)