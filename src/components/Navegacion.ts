export default class Navegacion extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
    this.addEventListener("click", this.handleEvent)
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
      nav{
        display: flex;
        column-gap: 1rem;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Navegacion.styles}</style>
        <nav>
            <router-link goto="/">Inicio</router-link>
            <router-link goto="/about">About</router-link>
            <router-link goto="/contact">Contact</router-link>
        </nav>
      `
  }
  handleEvent(event: Event): void {
    console.log(event.target)
  }

  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
    this.removeEventListener("click", this.handleEvent)
  }

//   attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("main-nav",Navegacion);