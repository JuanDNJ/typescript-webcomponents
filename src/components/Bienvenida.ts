import LetraAnimada from "./Letra";
export default class BienvenidaNjv extends HTMLElement {
  nameUser: string = !this.hasAttribute("nameUser") ? JSON.parse(localStorage.getItem('nameUser')!) : this.getAttribute("nameUser");
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
    this.addEventListener("router-link", this.eventHandler)
    this.shadowRoot!.querySelector("input[name='nameUser']")?.addEventListener("keyup", this.eventHandler)
  }
  static get styles() {
    return /*html*/ `
      :host{
        display: block;
      }
      span {
        display: inline-flex;
        color: #646cff;
        font-size: 2rem;
        animation: hola 1000ms ease-in-out alternate infinite;
        background: url("./vite.svg") ;
        background-repeat: no-repeat;
      
      }
      @keyframes hola {
        0%{
          transform: rotate(0deg);
        }
       
        100%{
          transform: translateX(3em) rotate(-180deg);
       
          
        }
      }
    `
  }
  eventHandler(e: any) {
    console.log(e)
    this.nameUser = e.target.value;

  }
  ready() {

    const letra = new LetraAnimada();
    letra.setAttribute("getLetra", "l")
    letra.setAttribute("animacion", "rotacion")
    // console.log(letra.getAttribute("getLetra"),letra.getAttribute("animacion"))
    this.shadowRoot!.appendChild(letra)
    this.shadowRoot!.innerHTML += /*html*/ `
        <style>${BienvenidaNjv.styles}</style>
        <h2 part="h2">
          Bienvenid
          <span>@</span> 
          <strong>
            ${this.getAttribute("nameUser") ? this.getAttribute("nameUser")?.split("-") : 0}
            ${this.hasAttribute("nameUser") ? this.getAttribute("nameUser") : this.nameUser}
          </strong>
        </h2>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr: any, old: any, now: any) {

    if (typeof attr !== "string") {
      throw new Error("This attribute must be a string")
    }


    console.log(this.setAttribute("nameUser", now))

  }


  static get observedAttributes() {
    return ['nameUser'];
  }
}
window.customElements.define("bienvenida-njv", BienvenidaNjv);