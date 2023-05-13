import BienvenidaNjv from "../components/Bienvenida"
const bienvenida = new BienvenidaNjv()
bienvenida.setAttribute("nameUser", "Juan Valdivia")

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*HTML*/`
  <h1>Hola Mundo!</h1>

  <section class="menu__uno">
    <a class="uno" href="/">Inicio</a>
    <a class="uno" href="/about">About</a>
  </section>
  <section class="menu__dos">
    <a class="dos" href="/">Inicio</a>
    <a class="dos" href="/about">About</a>
  </section>
  <section class="menu__tres">
    <a class="tres" href="/">Inicio</a>
    <a class="tres" href="/about">About</a>
  </section>

`
document.querySelector<HTMLDivElement>('#app')!.appendChild(bienvenida)

const menus = [...document.querySelectorAll("section[class*=menu]")!]



menus.forEach(element => {
   console.log(element)
   if(element.classList.contains("menu__uno")){
    const menuUno = [...element.querySelectorAll(".uno")]
    menuUno.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const event = new CustomEvent("routerLink", {
          composed: true,
          bubbles: true,
          detail:{
            target: link.getAttribute("href")
          }
        });
     
        window.dispatchEvent(event)

      });
      
    })
   }
});


window.addEventListener("router-link", (e) => {
  console.log(e)
})
