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
        flex-direction: row;
        width: 100%;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
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
    // console.log(event.target)
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